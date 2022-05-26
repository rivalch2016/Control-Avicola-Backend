import { Router } from 'express'
import { getVentas_Gallineros,
    getVenta_Gallinero,
    getVentas_Gallinero,
    createVenta_Gallinero,
    updatedVentas_Gallinero,
    deleteVentas_Gallinero
    } from '../controllers/ventas_gallinero.controllers'

const router = Router()

router.get('/ventas_gallinero', getVentas_Gallineros)

router.get('/ventas_gallinero/:id', getVentas_Gallinero)

router.get('/venta_gallinero/:id', getVenta_Gallinero)

router.post('/venta_gallinero/:id_Gallinero', createVenta_Gallinero)

router.put('/venta_gallinero/:id', updatedVentas_Gallinero)

router.delete('/venta_gallinero/:id', deleteVentas_Gallinero)

export default router;