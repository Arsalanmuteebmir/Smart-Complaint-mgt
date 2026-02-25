import express from "express";

const router = express.Router();

// TEMP fake database
const users = [];

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = { name, email, password };
  users.push(user);

  res.json({ name });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ name: user.name });
});

export default router;