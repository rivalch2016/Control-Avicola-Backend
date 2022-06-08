import Gallinero from '../models/gallinero.model'
import Produccion from '../models/produccion.model'
import User from '../models/user.model'

export const getAllProduccion = async (req, res) => {
    try {
        const produccion = await Produccion.find();

        if (!produccion) return res.status(404).json({message: 'Does not exists'})

        res.json(produccion)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getProduccion = async (req, res) => {
    try {
        const produccion = await Produccion.find({id_Gallinero : req.params.id});

        if (!produccion) return res.status(404).json({message: 'Does not exists'})

        res.json(produccion)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getOneProduccion= async (req, res) => {
    try {
        const produccion = await Produccion.findById(req.params.id)
    
        if (!produccion) return res.status(404).json({message: 'Does not exists'})

        return res.json(produccion)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const createProduccion = async (req, res) => {
    try {
        const {id_Gallinero} = req.params;
    
        const gallinero = await Gallinero.findById(req.params.id_Gallinero)

        if (gallinero){

            const {postura, peso} = req.body;
            const produccion = (postura * 100) / gallinero.cantidad
        
            const produccion2 = new Produccion({
                id_Gallinero,
                postura,
                produccion,
                peso
            })

            await produccion2.save()

            return res.json('received');

        } 
        
        return res.status(404).json({message: 'Gallinero does not exists'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const updatedProducccion = async (req, res) => {
    try {
        const produccionUpdated = await Produccion.findByIdAndUpdate(req.params.id,req.body, { new: true})
    
        if (!produccionUpdated) return res.status(404).json({message: 'Does not exists'})
    
        return res.json(produccionUpdated);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteProduccion = async (req, res) => {

    try {
        const produccion = await produccion.findByIdAndDelete(req.params.id)
    
        if (!produccion) return res.status(404).json({message: 'Does not exists'})
    
        return res.send(produccion)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}