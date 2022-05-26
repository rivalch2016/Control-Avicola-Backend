import { Router } from 'express'
import { getAllProduccion,
    getOneProduccion,
    getProduccion,
    createProduccion,
    updatedProducccion,
    deleteProduccion
    } from '../controllers/produccion.controllers'

const router = Router()

router.get('/allproduccion', getAllProduccion)

router.get('/produccion/:id',getProduccion)

router.get('/oneproduccion/:id', getOneProduccion)

router.post('/produccion/:id_Gallinero', createProduccion)

router.put('/produccion/:id', updatedProducccion)

router.delete('/produccion/:id', deleteProduccion)

export default router;