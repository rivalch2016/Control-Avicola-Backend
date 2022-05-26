import mongoose from "mongoose";

const ventas_gallineroSchema = mongoose.Schema({
    id_Gallinero: {
        type: String,
        required: true,
        trin: true,
    },
    tipo: {
        type: String,
        required: true,
        trin: true,
    },
    monto: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        default: 0
    },
},  {
    timestamps: true
    
})

export default mongoose.model('Ventas_Gallinero', ventas_gallineroSchema)