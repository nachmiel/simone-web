"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Voucher4() {
  const [used, setUsed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minut = 300 sekund

  useEffect(() => {
    if (!used) return;
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [used, timeLeft]);

  // Formatowanie czasu mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

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
        Typ: jeszcze 5 min - czas trwania 5 min
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
        (wersja ogień)
      </p>
      <Image
        src="/sen.png"
        alt="Sen"
        width={400}
        height={400}
        style={{
          width: "100%",
          maxWidth: "400px",
          marginTop: "32px",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
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
            fontSize: "2rem",
            marginTop: "32px",
            textAlign: "center",
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontWeight: "bold",
            fontStyle: "italic",
            display: "block",
            marginBottom: "24px",
            letterSpacing: "2px",
          }}
        >
          {formatTime(timeLeft)}
        </span>
      )}
    </main>
  );
}