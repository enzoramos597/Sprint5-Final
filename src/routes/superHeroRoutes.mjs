//Define las rutas para cada operación del controlador.

import express from 'express';

import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    
    agregarSuperHeroesController,
  
    manejarTraerPaises,    
    modificarSuperHeroesController,
    eliminarSuperHeroesController,
    eliminarPaisController,
    obtenerTodosLosPaisesController,

    
} from '../controllers/superheroesController.mjs';

//Express-Validator
import { sHeroesValidationRules } from '../validaciones/superHeroesValidationRules.js';
import { validationHandler } from '../validaciones/errorMiddleware.js'


const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/mostrarPaises', obtenerTodosLosPaisesController);
router.get('/traer', manejarTraerPaises);
router.get('/heroes/modificar/:id', obtenerSuperheroePorIdController);
router.post('/heroes/nuevo/agregarheroes', sHeroesValidationRules(), validationHandler, agregarSuperHeroesController);
router.put('/heroes/modificar-id/:id',sHeroesValidationRules(), validationHandler, modificarSuperHeroesController);
/*router.put('/heroes/modificar-id/:id', (req, res) => {
    res.render('modificarSuperHeroe', {title: "Modificar Super Heroe" }); // sin .ejs
});*/
router.delete('/heroes/eliminar/id/:id', eliminarSuperHeroesController);
router.delete('/eliminarPais/:id', eliminarPaisController);

export default router;

