import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

function Home() {
    const features = [
    {
      title: "Yealth Guide",
      description: "Your all-in-one resource for everything Yealth-related, from making appointments to understanding your coverage through the various Yale Health websites and resources.",
    },
    {
      title: "Calendar",
      description: "Use the Yurse Calendar to keep track of your appointments, symptoms, important health-related issues, and even add your own event types.",
    },
    {
      title: "Symptom Checker",
      description: "Use our AI-Powered Symptom Checker to get personalized advice on your symptoms, such as which medications to take and how to find nearby pharmacies for them.",
    }
  ];

  return (
    <section>
        <h1 style={{ fontSize: "2.4rem", fontWeight: "700", color: "#1B4965", textAlign:"center" }}>
          Yurse
        </h1>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p>
          Welcome to your Yurse (Yale Nurse)! Whether you’re feeling under the weather or are preparing for the inevitable yague, welcome. We developed the Yurse app with our fellow students in mind, since we know how hard it can be to get sick on your own for the first time (and any times after that). Our goal is to make sure you get better ASAP and stay healthy through Yurse’s various features by making any Yealth resource visible and easily available. See below for all of Yurse's features to date.
               <br /><br />
               Get well and stay well,
               <br />
               The Yurse Developers
        </p>
      </motion.div>

      <motion.section className="section" initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{textAlign: "center"}}>
      <h2>Features</h2>
      <div className="projects-grid">
        {features.map((r, i) => (
          <FeatureCard
            key={i}
            title={r.title}
            description={r.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>
    </motion.section>
    </section>
  );
}

export default Home;