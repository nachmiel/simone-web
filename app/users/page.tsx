"use client";
import { useRouter } from "next/navigation";

const UsersPage = () => {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "103vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // przyciski u góry
        alignItems: "center",
        padding: "0",
        background: "#fff",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "10px",
          marginTop: "90px", // odstęp od góry
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
            onClick={() => {
              if (num === 1) {
                router.push("/voucher_1");
              } else if (num === 2) {
                router.push("/voucher_2");
              } else if (num === 3) {
                router.push("/voucher_3");
              } else if (num === 4) {
                router.push("/voucher_4");
              } else if (num === 5) {
                router.push("/voucher_5");
              } else if (num === 6) {
                router.push("/voucher_6");
              }
            }}
          >
            Voucher {num}
          </button>
        ))}
      </div>
      <img
        src="/phil.png"
        alt="Phil"
        style={{
          width: "1500px",
          height: "auto",
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "16px",
        }}
      />
    </div>
  );
};

export default UsersPage;