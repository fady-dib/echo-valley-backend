const User = require("../models/userModel")
const jwt = require("jsonwebtoken");


exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    console.log(email)

    if (!user) return res.status(404).json({ message: "Invalid Credentials" });

    const isMatched = user.matchPassword(password);
    if (!isMatched) return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY);

    res.json({ token })

}