import React from "react";
import { PhoneCall } from "lucide-react";

function StickyCTA() {
  return (
    <>
      <a
        href="https://wa.me/message/AORIBIAVKSD7A1"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta-btn"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
          color: "#fff",
          padding: "0.9rem 1.5rem",
          fontWeight: 800,
          fontSize: "1rem",
          fontFamily: "var(--font-arabic)",
          textDecoration: "none",
          boxShadow: "0 -4px 20px rgba(156,0,240,0.25), 0 -1px 6px rgba(0,0,0,0.1)",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          minHeight: "var(--sticky-cta-height, 68px)",
          letterSpacing: "-0.01em",
        }}
      >
        <PhoneCall size={18} />
        احجز مكالمة تعارف مجانية
      </a>

      <style>{`
        /* Only show sticky CTA bar on mobile */
        .sticky-cta-btn {
          display: none !important;
        }
        @media (max-width: 768px) {
          .sticky-cta-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

export default StickyCTA;