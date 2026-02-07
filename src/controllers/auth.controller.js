const User = require("../models/user.model");
const OTP = require("../models/otp.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const sendMail = require("../utils/sendMails");

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ msg: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashed
    });

    const otp = generateOTP();

    await OTP.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000)
    });

    await sendMail(email, otp);

    res.json({ msg: "OTP sent to email" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await OTP.findOne({ email, otp });
    if (!record) return res.status(400).json({ msg: "Invalid OTP" });

    if (record.expiresAt < new Date())
      return res.status(400).json({ msg: "OTP expired" });

    await User.updateOne({ email }, { isVerified: true });
    await OTP.deleteMany({ email });

    res.json({ msg: "Email verified" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    if (!user.isVerified)
      return res.status(400).json({ msg: "Verify email first" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      msg: "Login success",
      token,
      user: user.email
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
