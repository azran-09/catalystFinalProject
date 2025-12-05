import React from "react";
import { motion } from "framer-motion";

function FeatureCard({title, description}) {
  return (
    <motion.div className="feature-card" whileHover={{scale: 1.05}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default FeatureCard;