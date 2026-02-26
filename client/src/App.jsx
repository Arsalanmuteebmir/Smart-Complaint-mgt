import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Start from "./pages/Start";

export default function App() {
  const [page, setPage] = useState("start");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
      setPage("home");
    }
  }, []);

  console.log("CURRENT PAGE:", page);

  return (
    <div>
      {page === "start" && <Start setPage={setPage} />}
      {page === "login" && <Login setUser={setUser} setPage={setPage} />}
      {page === "register" && <Register setUser={setUser} setPage={setPage} />}
      {page === "home" && (
        <Home user={user} setUser={setUser} setPage={setPage} />
      )}
      <h3>Designed & Developed by:</h3>
      <h4>Arsalan & Nabeel</h4>
    </div>
  );
}