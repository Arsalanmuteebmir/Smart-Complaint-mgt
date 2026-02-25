import { useState } from "react";

import Home from "./pages/Home";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const [user, setUser] = useState(localStorage.getItem("user"));
  const [page, setPage] = useState("start");

  // ✅ If logged in → show Home
  if (user) {
    return (
      <Home
        user={user}
        setUser={setUser}
        setPage={setPage}   // ⭐ VERY IMPORTANT
      />
    );
  }

  // ✅ Not logged in → show auth pages
  if (page === "start") return <Start setPage={setPage} />;
  if (page === "login") return <Login setUser={setUser} setPage={setPage} />;
  if (page === "register") return <Register setUser={setUser} setPage={setPage} />;
}

export default App;