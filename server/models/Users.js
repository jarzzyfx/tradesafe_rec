import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {type: String, requied: true},
    lastName: {type: String, require: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export const UserModel = mongoose.model('users', UserSchema)