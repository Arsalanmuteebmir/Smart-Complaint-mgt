export default function Start({ setPage }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 20% 20%, rgba(0, 0, 120, 0.6), transparent 40%),
          radial-gradient(circle at 80% 80%, rgba(0, 0, 80, 0.6), transparent 40%),
          linear-gradient(135deg, #00003f, #020024, #090979)
        `,
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          padding: "50px 40px",
          borderRadius: "18px",
          width: "420px",
          textAlign: "center",
          boxShadow: "0 25px 70px rgba(0,0,0,0.5)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow =
            "0 30px 80px rgba(0,0,0,0.6)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 25px 70px rgba(0,0,0,0.5)";
        }}
      >
        <h1 style={{ marginBottom: "10px", color: "#111827" }}>
          Public Complaint Portal
        </h1>

        <h3 style={{ marginBottom: "30px", color: "#374151", fontWeight: 500 }}>
          Are you a new or existing user?
        </h3>

        <button
          onClick={() => setPage("register")}
          style={primaryBtn}
          onMouseEnter={e => {
            e.target.style.background = "#1d4ed8";
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseLeave={e => {
            e.target.style.background = "#2563eb";
            e.target.style.transform = "scale(1)";
          }}
        >
          New User
        </button>

        <button
          onClick={() => setPage("login")}
          style={secondaryBtn}
          onMouseEnter={e => {
            e.target.style.background = "#e5e7eb";
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseLeave={e => {
            e.target.style.background = "#f3f4f6";
            e.target.style.transform = "scale(1)";
          }}
        >
          Existing User
        </button>
      </div>
    </div>
  );
}

const primaryBtn = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.2s ease"
};

const secondaryBtn = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "#f3f4f6",
  color: "#111827",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.2s ease"
};