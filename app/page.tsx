import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        padding: "0 12px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
          fontWeight: "bold",
          marginBottom: "36px",
          textAlign: "center",
          fontFamily: "'Montserrat', Arial, sans-serif",
          lineHeight: 1.1,
        }}
      >
        Z prezentami jestem jak Claire, więc…
      </h1>
      <Link
        href="/users"
        style={{
          fontFamily: "'Montserrat', Arial, sans-serif",
          display: "inline-block",
          padding: "clamp(12px, 4vw, 20px) clamp(24px, 8vw, 40px)",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "clamp(1.1rem, 4vw, 2rem)",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginBottom: "24px",
          transition: "background 0.2s",
        }}
      >
        Click me
      </Link>
      <Image
        src="/claire.png"
        alt="Claire"
        width={600}
        height={400}
        style={{
          width: "100%",
          maxWidth: "600px",
          marginTop: "16px",
          height: "auto",
        }}
        priority
      />
    </main>
  );
}