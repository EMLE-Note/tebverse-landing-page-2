import React from "react";

function StickyCTA() {
  return (
    <a
      href="#"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        background: "var(--primary)",
        color: "#fff",
        padding: "14px 20px",
        borderRadius: "999px",
        fontWeight: "bold",
        textDecoration: "none",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        zIndex: 999,
      }}
    >
      احجز مكالمة 📞
    </a>
  );
}

export default StickyCTA;