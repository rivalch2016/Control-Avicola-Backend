import Ventas_Gallinero from '../models/ventas_gallinero.model'
import Gallinero from '../models/gallinero.model'

export const getVentas_Gallineros = async (req, res) => {
    const ventas_gallinero = await Ventas_Gallinero.find();
    res.json(ventas_gallinero)
};

export const getVenta_Gallinero = async (req, res) => {
    const venta_gallinero = await Ventas_Gallinero.findById(req.params.id)
    
    if (!venta_gallinero) return res.status(404).json({message: 'Venta does not exists'})

    return res.json(venta_gallinero)
};

export const getVentas_Gallinero = async (req, res) => {
    const venta_gallinero = await Ventas_Gallinero.find({id_Gallinero : req.params.id})
    
    if (!venta_gallinero) return res.status(404).json({message: 'Ventas does not exists'})

    return res.json(venta_gallinero)
};

export const createVenta_Gallinero = async (req, res) => {
    const {id_Gallinero} = req.params;
    
    const gallinero = await Gallinero.findById(req.params.id_Gallinero)

    if (gallinero){

        const {tipo, monto, cantidad} = req.body;
    
        const venta_gallinero = new Ventas_Gallinero({
            id_Gallinero,
            tipo,
            monto,
            cantidad
        })

        await venta_gallinero.save()

        return res.json('received');

    } 
    
    return res.status(404).json({message: 'Gallinero does not exists'})
};

export const updatedVentas_Gallinero = async (req, res) => {
    const venta_GallineroUpdated = await Ventas_Gallinero.findByIdAndUpdate(req.params.id,req.body, { new: true})

    if (!venta_GallineroUpdated) return res.status(404).json({message: 'Venta does not exists'})

    return res.json(venta_GallineroUpdated);
};

export const deleteVentas_Gallinero = async (req, res) => {

    const venta_gallinero = await Ventas_Gallinero.findByIdAndDelete(req.params.id)

    if (!venta_gallinero) return res.status(404).json({message: 'Venta does not exists'})

    return res.send(venta_gallinero)
}