//Define las rutas para cada operación del controlador.

import express from 'express';

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    obtenerPaisesIdController,
    agregarSuperHeroesController,
    modificarPaisController,
    manejarTraerPaises,    
    modificarSuperHeroesController,
    eliminarSuperHeroesController,
    agregarPaisController,
    eliminarPaisController,
    obtenerTodosLosPaisesController,

    
} from '../controllers/superheroesController.mjs';

//Express-Validator
import { sHeroesValidationRules } from '../validaciones/superHeroesValidationRules.js';
import { paisValidationRules } from '../validaciones/paisValidationRules.js';
import { validationHandler } from '../validaciones/errorMiddleware.js'


const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/mostrarPaises', obtenerTodosLosPaisesController);
router.get('/traer', manejarTraerPaises);
router.get('/modificarPais-id/:id', obtenerPaisesIdController )
router.get('/heroes/modificar/:id', obtenerSuperheroePorIdController);
router.post('/heroes/nuevo/agregarheroes', sHeroesValidationRules(), validationHandler, agregarSuperHeroesController);
router.post('/agregarPais', paisValidationRules(), validationHandler, agregarPaisController);
router.put('/modificarPais/:id', modificarPaisController )
router.put('/heroes/modificar-id/:id',sHeroesValidationRules(), validationHandler, modificarSuperHeroesController);
router.delete('/heroes/eliminar/id/:id', eliminarSuperHeroesController);
router.delete('/eliminarPais/:id', eliminarPaisController);

export default router;

