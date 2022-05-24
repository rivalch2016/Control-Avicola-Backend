import { Router } from 'express'
import {getGallinero,
    getGallineros,
    createGallinero,
    updatedGallinero,
    deleteGallinero
    } from '../controllers/gallinero.controllers'

const router = Router()

router.get('/gallineros', getGallineros)

router.get('/gallineros/:id', getGallinero)

router.post('/gallineros/:id_User', createGallinero)

router.put('/gallineros/:id', updatedGallinero)

router.delete('/gallineros/:id', deleteGallinero)

export default router;