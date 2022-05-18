import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trin: true,
    },
    password: {
        type: String,
        required: true,
        trin: true,
    },
    gastos_total: {
        type:String,
        trin: true,
    },
    ingreso_total: {
        type:String,
        trin: true,
    },
})

export default model('User', userSchema)