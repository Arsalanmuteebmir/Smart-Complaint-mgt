import { useState } from "react";
import API from "../api/axios";

export default function Login({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await API.post("/auth/login", { email, password });

    localStorage.setItem("user", res.data.name);
    setUser(res.data.name);
    setPage("home")
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        New user?{" "}
        <button onClick={() => setPage("register")}>
          Register
        </button>
      </p>
    </div>
  );
}