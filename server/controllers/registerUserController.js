import { UserModel } from "../models/Users.js";
import bcrypt from 'bcrypt';

export const registerUserController = async (req, res) => {
    const values = req.body;

    const user = await UserModel.findOne({email: values.email});

    if (user) {
        res.status(404).json({ error: 'User already exists' });
        return;
    }

    const hashedPwd = await bcrypt.hash(values.password, 10)
    const newUser = UserModel({firstName: values.firstName, lastName: values.lastName, email: values.email, password : hashedPwd})
    await newUser.save()

    res.json({message: 'User registered successfully', responseStatus: 201})
    
};
