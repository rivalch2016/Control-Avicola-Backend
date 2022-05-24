import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        type: Number,
        default: 0

    },
    ingreso_total: {
        type: Number,
        default: 0
    },
},  {
    timestamps: true
    
})

export default mongoose.model('User', userSchema)