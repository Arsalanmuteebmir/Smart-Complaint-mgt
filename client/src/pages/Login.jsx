import { useState } from "react";
import API from "../api/axios";

export default function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    try {
      const res = await API.post("/auth/login", { email, password });
  
      localStorage.setItem("user", res.data.name);
      setUser(res.data.name);
      setPage("home");
  
    } catch (err) {
      // If backend sends error for wrong password/email
      alert(
        err.response?.data?.message ||
        "Incorrect email or password"
      );
    }
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
        `,
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          padding: "35px",
          borderRadius: "16px",
          width: "340px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow =
            "0 25px 60px rgba(0,0,0,0.5)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 20px 50px rgba(0,0,0,0.4)";
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "22px",
            color: "#1f2937"
          }}
        >
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "14px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            outline: "none",
            transition: "all 0.2s ease"
          }}
          onFocus={e =>
            (e.target.style.boxShadow =
              "0 0 0 2px rgba(37,99,235,0.3)")
          }
          onBlur={e => (e.target.style.boxShadow = "none")}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            outline: "none",
            transition: "all 0.2s ease"
          }}
          onFocus={e =>
            (e.target.style.boxShadow =
              "0 0 0 2px rgba(37,99,235,0.3)")
          }
          onBlur={e => (e.target.style.boxShadow = "none")}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={e => {
            e.target.style.background = "#1d4ed8";
            e.target.style.transform = "scale(1.02)";
          }}
          onMouseLeave={e => {
            e.target.style.background = "#2563eb";
            e.target.style.transform = "scale(1)";
          }}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "18px",
            color: "#1f2937"
          }}
        >
          New user?{" "}
          <button
            onClick={() => setPage("register")}
            style={{
              background: "none",
              border: "none",
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={e => (e.target.style.color = "#1d4ed8")}
            onMouseLeave={e => (e.target.style.color = "#2563eb")}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}