import { UserModel } from "../models/Users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const LoginUserController = async (req, res) => {
    const values = req.body;
    const user = await UserModel.findOne({email: values.email});
    const newUser = values
    
    if (!user) {
        res.status(404).json({ error: 'User does not exist' });
        return;
    }
const isPwdValid = await bcrypt.compare(values.password, user.password);

if(!isPwdValid){
    res.status(403).json({ error: 'Username or password is incorrect' });
    return
}
const token = jwt.sign({id: user._id}, "secret")
res.json({token, userID: user._id, newUser})
}
    