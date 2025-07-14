const { userModel } = require('../../../Models/user_schema');

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

}

module.exports = {
    userRegisterController,
    userLoginController
};
