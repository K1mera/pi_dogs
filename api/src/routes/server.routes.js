import { Router } from 'express'
import { getDogs, getDogByIdBreed, createDog, getDogByBreedName } from '../controllers/dogs.controller.js'
import { getTemps } from '../controllers/temps.controller.js'

const router = Router()

router.get('/dogs', getDogs)
router.get("/dogs/:id", getDogByIdBreed);
router.get("/dogs/name", getDogByBreedName);
router.post('/dogs', createDog)

router.get("/temperaments", getTemps);
// router.get("/dog-temperaments/:id", getDogTemps);



export default router