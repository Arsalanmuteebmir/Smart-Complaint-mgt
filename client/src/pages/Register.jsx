import { useState } from "react";
import API from "../api/axios";

export default function Register({ setUser, setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // ✅ Name validation
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    // ✅ Password validation (8+ digits)
    const passwordRegex = /^\d{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 digits");
      return;
    }

    const res = await API.post("/auth/register", {
      name,
      email,
      password
    });

    localStorage.setItem("user", res.data.name);
    setUser(res.data.name);
    setPage("home");
  };

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
        `
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          padding: "35px",
          borderRadius: "16px",
          width: "340px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "22px", color: "#1f2937" }}>
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password (8+ digits)"
          onChange={e => setPassword(e.target.value)}
          style={{ ...inputStyle, marginBottom: "18px" }}
        />

        <button
          onClick={handleRegister}
          style={buttonStyle}
        >
          Register
        </button>

        <p style={{ textAlign: "center", marginTop: "18px", color: "#1f2937" }}>
          Already registered?{" "}
          <button
            onClick={() => setPage("login")}
            style={linkButtonStyle}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

const linkButtonStyle = {
  background: "none",
  border: "none",
  color: "#2563eb",
  cursor: "pointer",
  fontWeight: "bold"
};