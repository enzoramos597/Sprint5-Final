
//Repositorio centralizado que implementa los métodos definidos en la interfáz,
//realizando operaciones de datos uniformes y controladas con MongoDB

import { set } from 'mongoose';
import superHero from '../models/SuperHero.mjs';
import Paises from '../models/paisHispano.mjs';
import IRepository from '../repositories/IRepository.mjs';

/*const nuevoSuperHeroe = {
    nombreSuperHeroe: "Black Widow",
    nombreReal: "Natasha Romanoff",
    edad: 33,
    planetaOrigen: "Tierra",
    debilidad: "Ninguna conocida",
    poderes: ["Maestría en combate2", "Espionaje2"],
    aliados: "Hawkeye",
    enemigos: "Taskmaster",
    creador: "Enzocreador2",
};*/

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {;  //Funciona
        return await superHero.findById(id)
    }
    //Obtener Paises por ID
    async obtenerPaisIdRepository(id) {;  //Funciona
        return await Paises.findById(id)
    }

    async obtenerTodos() {  //Funciona
        return await superHero.find();
    }

    async obtenerTodosLosPaisesRepository(){
        return await Paises.find({ creador: "Enzo Ramos"});
    }

    async agregarNuevoSuperHeroeEnzo(agregarNuevoSP) {
        const {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador, createdAt} = agregarNuevoSP;
        const newSuperHeroe = new superHero({
            nombreSuperHeroe, 
            nombreReal, 
            edad, 
            planetaOrigen, 
            debilidad, 
            poderes, 
            aliados, 
            enemigos, 
            creador, 
            createdAt
        });
        
        const guardarSuperHeroe = await newSuperHeroe.save();
        return guardarSuperHeroe;
    };

    async agregarPaisRepository(agregarPaisAll) {        
        const {name: {nativeName: { spa: { official: nombreOficial }}}, capital, borders, area, population, timezones,creador} = agregarPaisAll;
        const newPais = new Paises({
            name: {nativeName: { spa: { official: nombreOficial } }}, 
            capital, 
            borders, 
            area, 
            population, 
            timezones,
            creador
        });
        
        const guardarPais = await newPais.save();
        return guardarPais;
    };
    
    
    async updateRepository (nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador){
        //const {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador, createdAt} = updateSP;
        //console.log('Traigo SP en Repository', updateSP);
        const updateSuperHeroe = new superHero({
            nombreSuperHeroe, 
            nombreReal, 
            edad, 
            planetaOrigen, 
            debilidad, 
            poderes, 
            aliados, 
            enemigos, 
            creador, 
            createdAt
        });
        console.log('Ver Modificar Heroe', updateSuperHeroe);
        const modificarSuperHeroe = await updateSuperHeroe.updateOne();
        console.log('Ver Modificar Heroe2', updateSuperHeroe);
        return modificarSuperHeroe;
    };
    
    async updateRepository1SuperHereo(id, datosActualizados) {
        const updateSuperHeroe = await superHero.findByIdAndUpdate(
          id,
          datosActualizados,
          { new: true }
        );
        console.log('Ver Update Super Heroe', updateSuperHeroe);
        return updateSuperHeroe;
      }

    /*async updateRepositorySuperHereo(id, nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador) {
        
        const updateSuperHeroe = await superHero.findByIdAndUpdate(id, nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador, {new:true});
        console('Ver Update Super Heroe', updateSuperHeroe);
        if (!updateSuperHeroe) return res.status(404).json({ message: "Superhero No Encontrado" });
        return updateSuperHeroe;   
    }*/
        async updateRepositorySuperHereo(id, updateSP) {
            const updateSuperHeroe = await superHero.findByIdAndUpdate(
                id,
                { $set: updateSP },
                { new: true }
            );
            console.log('Ver Update Super Heroe', updateSuperHeroe);
            return updateSuperHeroe;
        }
    
    //Update Pais
    async updatePaisRepository(id, updatePais) {
        const updatePais1 = await Paises.findByIdAndUpdate(
            id,
            { $set: updatePais },
            { new: true }
        );
        console.log('Ver Update Pais', updatePais1);
            return updatePais1;
    }    
        
    async modificarSuperHeroeporEdad (id, atributo, valor){
        return await superHero.updateOne(
            { _id: id},
            { $set : { [atributo]: valor}}
        );       
    }

    async eliminarPorId(id) {
        console.log('ver el Repository id', id);
        return await superHero.findByIdAndDelete(id);
    }
    
    //Eliminar Pais 
    async eliminarPaisIdRepository(id){
        return await Paises.findByIdAndDelete(id);
    }

    async eliminarPorNombre(nombre) {
        const eliminarSuperHeroeNombre = await superHero.findOneAndDelete({ nombreSuperHeroe: nombre });
        if (!eliminarSuperHeroeNombre) return res.status(404).json({ message: "Super Hereo no encontrado" });
        //console.log('Capa de Repository',nombredelSuperHeroe);
        return eliminarSuperHeroeNombre;
    }

    async eliminarSuperHeroeNombre(nombre) 
    {
        const eliminarSuperHeroeNombre2 = await superHero.findOneAndDelete({ nombreSuperHeroe: nombre });
        if (!eliminarSuperHeroeNombre2) return res.status(404).json({ message: "Super Hereo no encontrado" });
        //console.log('Capa de Repository',nombredelSuperHeroe);
        return eliminarSuperHeroeNombre2;
    }
    async buscarPorAtributo(atributo, valor) {
        return await superHero.find({
            [ atributo ]: valor
        });
    }

    async obtenerMayoresDe30() {
        return await superHero.find({
            edad: { $gt: 30 },
            planetaOrigen: "Tierra",
            poderes: { $exists: true, $not: { $size: 1 } }
        });
    }
};

export default new SuperHeroRepository();