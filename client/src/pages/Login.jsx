import { useState } from "react";

export default function Login({ setUser }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!users.includes(name)) {
      alert("User not registered");
      return;
    }

    localStorage.setItem("user", name);
    setUser(name);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}