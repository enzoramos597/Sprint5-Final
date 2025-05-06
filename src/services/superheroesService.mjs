//Implementa la lógica de negocio, con los métodos de repositorio
//Para búsqueda, recuperción y filtrado de datos.

import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerPaisIdServicio(id) {
    return await SuperHeroRepository.obtenerPaisIdRepository(id);
}


export async function obtenerTodosLosSuperheroes() { 
    return await SuperHeroRepository.obtenerTodos();
} 

export async function obtenerTodosLosPaisesServices() { 
    return await SuperHeroRepository.obtenerTodosLosPaisesRepository();
} 

export async function updateService(id) {
    return await SuperHeroRepository.updateRepository(id);
}
export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor)
}

export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}

export async function agregarNuevoSuperHeroe(agregarNuevoSP) {
    return await SuperHeroRepository.agregarNuevoSuperHeroeEnzo(agregarNuevoSP);
}

export async function agregarPaisServicio(agregarPaisAll) {
    return await SuperHeroRepository.agregarPaisRepository(agregarPaisAll);
}



export async function modificarSuperHeroeporEdad(id, atributo, valor) {
    return await SuperHeroRepository.modificarSuperHeroeporEdad(id, atributo, valor);
}

export async function modificarSuperHeroeService(id, updateSP){
    return await SuperHeroRepository.updateRepositorySuperHereo(id, updateSP);
}

export async function modificarPaisService(id, updatePais){
    return await SuperHeroRepository.updatePaisRepository(id, updatePais);
}

export async function eliminarSuperHereoPorId(id) {
    return await SuperHeroRepository.eliminarPorId(id);
}

export async function eliminarSuperHeroeNombre(nombre) {
    return await SuperHeroRepository.eliminarSuperHeroeNombre(nombre);
}

export async function eliminarPaisIdServicio(id) {
    return await SuperHeroRepository.eliminarPaisIdRepository(id);
}