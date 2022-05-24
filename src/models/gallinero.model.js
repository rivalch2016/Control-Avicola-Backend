import mongoose from "mongoose";

const gallineroSchema = mongoose.Schema({
    id_User: {
        type: String,
        required: true,
        unique: true,
        trin: true,
    },
    cantidad: {
        type: Number,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    almacen_alimento: {
        type: Number,
        default: 0
    },
    peso_postura: {
        type: Number,
        default: 0
    },
    gasto_gallinero: {
        type: Number,
        default: 0
    },
    ingresos_gallinero: {
        type: Number,
        default: 0
    },
    fecha_vitamina: {
        type: Date,
        default: 0
    }
},  {
    timestamps: true
    
})

export default mongoose.model('Gallinero', gallineroSchema)