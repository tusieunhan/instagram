
const { User } = require('../Model/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userControllers = {   
    register: async (req, res) => {
        try {
        const name = await User.findOne({ username: req.body.username });
        if (name) {
            res.json({ message: "Accout exits!" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newUser = new User({
            username: req.body.username,
            password: hashed,
            name: req.body.name,
            });
            const saveUser = await newUser.save();
            res.json({
            saveUser,
            message: "Created account successfully",
            });
        }
        } catch (error) {
        res.json({ message: "Can not create account" });
        }
    },
    login: async (req, res) => {
        try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.json("Account not exist !");
        } else {
            const validPass = await bcrypt.compare(
            req.body.password,
            user.password
            );
            if (!validPass) {
            return res.json("Password faill");
            }
            if (validPass && user) {
            const accsess_Token = jwt.sign(
                {
                username: user.username,
                },
                process.env.SECRET_KEY
            );
            res.json({ user, accsess_Token });
            }
        }
        } catch (error) {
        res.status(500).json("Can not login account");
        }
    }

}

module.exports = userControllers;