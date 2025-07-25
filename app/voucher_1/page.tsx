"use client";
import { useState } from "react";

export default function Voucher1() {
  const [used, setUsed] = useState(false);

  return (
    <main
      style={{
        minHeight: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: used ? "#fde2e1" : "#fff",
        padding: "0 16px",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "32px",
          textAlign: "center",
          fontFamily: "'Montserrat', Arial, sans-serif",
        }}
      >
        Przytulenie
      </h1>
      <p
        style={{
          fontSize: "1.3rem",
          color: "#444",
          textAlign: "center",
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontWeight: "bold",
        }}
      >
        Typ: po filmie Titanic, na otarcie łez
      </p>
      <img
        src="/tytanic.png"
        alt="Titanic"
        style={{
          width: "100%",
          maxWidth: "400px",
          marginTop: "32px",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          height: "auto",
        }}
      />
      <button
        onClick={() => setUsed(true)}
        disabled={used}
        style={{
          marginTop: "32px",
          padding: "18px 48px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "10px",
          background: used ? "#ef4444" : "#22c55e",
          color: "#fff",
          cursor: used ? "default" : "pointer",
          transition: "background 0.2s",
        }}
      >
        {used ? "Zrealizowano" : "Zrealizuj"}
      </button>
      {used && (
        <span
          style={{
            color: "#ef4444",
            fontSize: "0.8rem",
            marginTop: "40px",
            textAlign: "center",
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontWeight: "bold",
            fontStyle: "italic",
            position: "absolute",
            bottom: "24px",
            left: 0,
            right: 0,
          }}
        >
          ... ja płakałam, czytając "Pies, który jeździł koleją". Oboje jesteśmy pussies.
        </span>
      )}
    </main>
  );
}