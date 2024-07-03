import mongoose from "mongoose";
import validator from "validator";
const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at Least 3 Characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at Least 3 Characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "please provide a valid email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone Number must contain Exact 10 digits!"],
        // maxLength: [11, "Phone Number must contain Exact 10 digits!"]
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message must contain at least 10 characters!"]
    }
}); 

export const Message = mongoose.model("Message", messageSchema);