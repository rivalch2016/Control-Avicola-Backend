import Gallinero from '../models/gallinero.model'
import User from '../models/user.model'

export const getAllGallineros = async (req, res) => {
    try {
        const gallineros = await Gallinero.find();

        if (!gallineros) return res.status(404).json({message: 'Gallinero does not exists'})

        res.json(gallineros)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getGallineros = async (req, res) => {
    try {
        const gallineros = await Gallinero.find({id_User : req.params.id});

        if (!gallineros) return res.status(404).json({message: 'Gallinero does not exists'})

        res.json(gallineros)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getGallinero = async (req, res) => {
    try {
        const gallinero = await Gallinero.findById(req.params.id)
    
        if (!gallinero) return res.status(404).json({message: 'Gallinero does not exists'})

        return res.json(gallinero)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const createGallinero = async (req, res) => {
    try {
        const {id_User} = req.params;
    
        const user = await User.findById(req.params.id_User)

        if (user){

            const {cantidad, edad, almacen_alimento, fecha_vitamina} = req.body;
        
            const gallinero = new Gallinero({
                id_User,
                cantidad,
                edad,
                almacen_alimento,
                fecha_vitamina
            })

            await gallinero.save()

            return res.json('received');

        } 
    
    return res.status(404).json({message: 'User does not exists'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const updatedGallinero = async (req, res) => {
    try {
        const gallineroUpdated = await Gallinero.findByIdAndUpdate(req.params.id,req.body, { new: true})

        if (!gallineroUpdated) return res.status(404).json({message: 'Gallinero does not exists'})

        return res.json(gallineroUpdated);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteGallinero = async (req, res) => {
    try {
        const gallinero = await Gallinero.findByIdAndDelete(req.params.id)

        if (!gallinero) return res.status(404).json({message: 'Gallinero does not exists'})

        return res.send(gallinero)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}