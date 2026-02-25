import { useState } from "react";
import API from "../api/axios";

export default function Register({ setUser, setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await API.post("/auth/register", {
      name,
      email,
      password
    });

    localStorage.setItem("user", res.data.name);
    setUser(res.data.name);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <p>
        Already registered?{" "}
        <button onClick={() => setPage("login")}>
          Login
        </button>
      </p>
    </div>
  );
}