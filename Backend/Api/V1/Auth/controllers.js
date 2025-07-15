const { userModel } = require('../../../Models/user_schema');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegisterController = async (req, res) => {
    const data = req.body;

    if (!data.email || !data.password) {
        return res.status(400).json({
            isSuccess: false,
            message: "Email and Password are required"
        });
    }

    try {
        const newuser = await userModel.create(data);
        const { password, ...rest } = newuser._doc;

        console.log("User created:", rest);

        res.status(200).json({
            isSuccess: true,
            message: "User created successfully",
            user: rest
        });
    } catch (err) {
        console.error("Error creating user:", err.message);
        res.status(500).json({
            isSuccess: false,
            message: "Internal server error"
        });
    }
};

const userLoginController = async (req, res) => {
    const data = req.body;

    if (!data.email || !data.password) {
        return res.status(400).json({
            isSuccess: false,
            message: "Email and Password are required",
            data: {},
        });
    }
    try{
    const user = await userModel.findOne({ email: data.email }); 
    // find --> queryselectorAll and findOne --> queryselector
    if (!user) {
        return res.status(400).json({
            isSuccess: false,
            message: "User not found"
        });
    }

    const hashedPassword = user.password;
    const isPasswordMatch = await bcrypt.compare(data.password, hashedPassword);
    if (!isPasswordMatch) {
        return res.status(400).json({
            isSuccess: false,
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email,
    }, process.env.JWT_SECRET);

    res.cookie("authorization", token,{
        maxAge: 3600000,
    });
    res.status(200).json({
        isSuccess: true,
        message: "User logged in successfully",
        data: {},
    });
}
catch{
    res.status(500).json({
        isSuccess: false,
        message: "Internal server error"
    })
}

}

module.exports = {
    userRegisterController,
    userLoginController
};
