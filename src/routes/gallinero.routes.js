import { Router } from 'express'
import {getGallinero,
    getGallineros,
    getAllGallineros,
    createGallinero,
    updatedGallinero,
    deleteGallinero
    } from '../controllers/gallinero.controllers'

const router = Router()

router.get('/allgallineros', getAllGallineros)

router.get('/gallineros/:id',getGallineros)

router.get('/onegallineros/:id', getGallinero)

router.post('/gallineros/:id_User', createGallinero)

router.put('/gallineros/:id', updatedGallinero)

router.delete('/gallineros/:id', deleteGallinero)

export default router;