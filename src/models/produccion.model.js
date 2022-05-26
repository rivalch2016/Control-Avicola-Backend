import mongoose from "mongoose";

const produccionSchema = mongoose.Schema({
    id_Gallinero: {
        type: String,
        required: true,
        trin: true,
    },
    postura: {
        type: Number,
        required: true
    },
    produccion: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        default: 0
    }
},  {
    timestamps: true
    
})

export default mongoose.model('Produccion', produccionSchema)