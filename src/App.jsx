import { useState } from "react";
import "./App.css";
import YealthGuide from "./pages/YealthGuide";
import YealthCalendar from "./pages/YealthCalendar";
import YealthSymptoms from "./pages/YealthSymptoms";
import Navbar from "./pages/Navbar";

function App() {
  const [page, setPage] = useState("guide");

  const renderPage = () => {
    switch (page) {
      case "guide":
        return <YealthGuide />;
      case "calendar":
        return <YealthCalendar />;
      case "symptoms":
        return <YealthSymptoms />;
      default:
        return <YealthGuide />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F0F4F8",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ⭐ Navbar always visible */}
      <Navbar page={page} setPage={setPage} />

      {/* Page content */}
      <div style={{ width: "100%", maxWidth: "900px", marginTop: "6rem" }}>
        {renderPage()}
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "3rem",
          padding: "1rem",
          color: "#1B4965",
          fontSize: "0.9rem",
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Yale Nurse — Built to support student wellness.
      </footer>
    </div>
  );
}

export default App;