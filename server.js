import express from "express";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/advice", async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!Array.isArray(symptoms) || symptoms.length === 0) {
      return res.status(400).json({ error: "Symptoms must be a non-empty array" });
    }

    const prompt = `
A Yale student reports: "${symptoms.join(", ")}"
You are a friendly campus health assistant.

Provide:
• likely common causes (NOT a diagnosis)
• easy self-care steps with items students can get nearby, including medication if needed
• when to visit Yale Health (Yealth)
• red-flag symptoms requiring immediate help

Tone: short, supportive, non-alarming.
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
    });

    const advice = completion.choices[0].message.content;
    res.json({ advice });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "LLM request failed" });
  }
});

app.listen(3001, () => console.log("Backend on http://localhost:3001"));