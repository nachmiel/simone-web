"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const UsersPage = () => {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // oddziela górę od dołu
        alignItems: "center",
        padding: "0",
        background: "#fff",
      }}
    >
      {/* Przyciski na górze */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "10px",
          marginTop: "40px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            style={{
              width: "100%",
              padding: "20px 0",
              fontSize: "1.2rem",
              borderRadius: "10px",
              border: "none",
              background: "#ef4444",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(239,68,68,0.08)",
              transition: "background 0.2s",
            }}
            onClick={() => router.push(`/voucher_${num}`)}
          >
            Voucher {num}
          </button>
        ))}
      </div>

      {/* Obrazek Phil na dole, bez nachodzenia */}
      <div style={{ paddingBottom: "32px", marginTop: "40px" }}>
        <Image
          src="/phil.png"
          alt="Phil"
          width={520}
          height={320}
          style={{
            width: "520px",
            height: "auto",
            borderRadius: "16px",
          }}
          priority
        />
      </div>
    </div>
  );
};

export default UsersPage;
