import Gallinero from '../models/gallinero.model'
import User from '../models/user.model'

export const getGallineros = async (req, res) => {
    const gallineros = await Gallinero.find();
    res.json(gallineros)
};

export const getGallinero = async (req, res) => {
    const gallinero = await Gallinero.findById(req.params.id)
    
    if (!gallinero) return res.status(404).json({message: 'Gallinero does not exists'})

    return res.json(gallinero)
};

export const createGallinero = async (req, res) => {
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
};

export const updatedGallinero = async (req, res) => {
    const gallineroUpdated = await Gallinero.findByIdAndUpdate(req.params.id,req.body, { new: true})

    if (!gallineroUpdated) return res.status(404).json({message: 'Gallinero does not exists'})

    return res.json(gallineroUpdated);
};

export const deleteGallinero = async (req, res) => {

    const gallinero = await Gallinero.findByIdAndDelete(req.params.id)

    if (!gallinero) return res.status(404).json({message: 'Gallinero does not exists'})

    return res.send(gallinero)
}