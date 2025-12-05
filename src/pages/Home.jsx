import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

function Home() {
    const features = [
    {
      title: "Yealth Guide",
      description: "desc",
    },
    {
      title: "Calendar",
      description: "desc",
    },
    {
      title: "Symptom Checker",
      description: "desc",
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
          Welcome to your Yurse (Yale Nurse)! Whether you’re feeling under the weather or are preparing for the inevitable yague, welcome. We developed the Yurse app with our fellow students in mind, since we know how hard it can be to get sick on your own for the first time (and any times after that). Our goal is to make sure you get better ASAP and stay healthy through Yurse’s various features by making any Yealth resource visible and easily available. [talk about app features too] 
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