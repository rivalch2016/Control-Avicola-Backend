import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send('Control Avicola');
})

router.post("/user/create", (req, res) =>{
    res.send('Creado')
})

export default router;

