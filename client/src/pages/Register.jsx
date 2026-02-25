import { useState } from "react";

export default function Register({ setUser }) {
  const [name, setName] = useState("");

  const handleRegister = () => {
    if (!name) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(name);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("user", name);
    setUser(name);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      <input
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}