const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://netflix-login-jashwanth.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true,
}));

// Dummy login credentials
const email = "0987654321";
const pass = "123";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Login route
app.post("/loginpage", (req, res) => {
  try {
    const { email: inputEmail, password } = req.body;
    console.log("Login attempt from Email:", inputEmail);

    if (inputEmail === email && password === pass) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(`Error in Login - ${err.message}`);
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
      success: false,
    });
  }
});

// Start server
app.listen(3000, () => {
  console.log("✅ Server started on http://localhost:3000");
});
