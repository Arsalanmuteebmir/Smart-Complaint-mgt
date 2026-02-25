import { useState } from "react";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const [user, setUser] = useState(localStorage.getItem("user"));
  const [showLogin, setShowLogin] = useState(null); 
  // null = show Start page

  if (user) {
    return <Home user={user} setUser={setUser} />;
  }

  if (showLogin === null) {
    return <Start setShowLogin={setShowLogin} />;
  }

  return showLogin
    ? <Login setUser={setUser} />
    : <Register setUser={setUser} />;
}

export default App;