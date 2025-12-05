import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (newPage) => {
    setPage(newPage);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Yurse</h1>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <motion.li
          whileHover={{
            scale: 1.2,
            color: "#1B4965",
          }}
          onClick={() => handleNav("home")}
          className={page === "home" ? "active" : ""}
        >
          Home
        </motion.li>
        
        <motion.li
          whileHover={{
            scale: 1.2,
            color: "#1B4965",
          }}
          onClick={() => handleNav("guide")}
          className={page === "guide" ? "active" : ""}
        >
          Guide
        </motion.li>

        <motion.li
          whileHover={{
            scale: 1.2,
            color: "#1B4965",
          }}
          onClick={() => handleNav("calendar")}
          className={page === "calendar" ? "active" : ""}
        >
          Calendar
        </motion.li>

        <motion.li
          whileHover={{
            scale: 1.2,
            color: "#1B4965",
          }}
          onClick={() => handleNav("symptoms")}
          className={page === "symptoms" ? "active" : ""}
        >
          Symptoms
        </motion.li>
      </ul>
    </nav>
  );
}