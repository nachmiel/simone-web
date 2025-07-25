"use client";
import { useState } from "react";
import Image from "next/image";

export default function Voucher3() {
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
          marginBottom: "0.3rem",
        }}
      >
        Typ: bardzo delikatne, po porządnym jedzeniu
      </p>
      <p
        style={{
          fontSize: "1rem",
          color: "#888",
          textAlign: "center",
          fontFamily: "'Montserrat', Arial, sans-serif",
          marginTop: 0,
          marginBottom: "1rem",
        }}
      >
        (świnka style)
      </p>
      <Image
        src="/swinka.png"
        alt="Świnka"
        width={270}
        height={270}
        style={{
          width: "120%",
          maxWidth: "270px",
          marginTop: "24px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          height: "auto",
        }}
        priority
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
            fontSize: "0.9rem",
            marginTop: "32px",
            textAlign: "center",
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontWeight: "bold",
            fontStyle: "italic",
            display: "block",
            marginBottom: "24px",
          }}
        >
          You got some cheese I can eat?
        </span>
      )}
    </main>
  );
}