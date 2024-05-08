const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const User = require("../models/User");
const { JWT_SECRET } = process.env;

// Signup
router.post("/signup", async (req, res) => {
  try {
    // const { username, password } = req.body;
    // const existingUser = await User.findOne({ username });

    // if (existingUser) {
    //   return res.status(400).json({ message: "User already exists" });
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);
    // const newUser = new User({ username, password: hashedPassword });
    // await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/userlogin", async (req, res) => {
  try {
    // const { membership, password } = req.body;
    // const user = await User.findOne({ membership });

    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    // const passwordMatch = await bcrypt.compare(password, user.password);

    // if (!passwordMatch) {
    //   return res.status(401).json({ message: "Invalid credentials" });
    // }

    // const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
    //   expiresIn: "1h",
    // });

    // res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/adminlogin", async (req, res) => {
  try {
    // const { username, password } = req.body;
    // const user = await User.findOne({ username });
    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }
    // const passwordMatch = await bcrypt.compare(password, user.password);
    // if (!passwordMatch) {
    //   return res.status(401).json({ message: "Invalid credentials" });
    // }
    // const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
    //   expiresIn: "1h",
    // });
    // res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
