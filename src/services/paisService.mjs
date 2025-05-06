import paisesRepository from "../repositories/paisesRepository.mjs";

export async function obtenerPaisIdServicio(id) {
    return await paisesRepository.obtenerPaisIdRepository(id);
}

export async function obtenerTodosLosPaisesServices() { 
    return await paisesRepository.obtenerTodosLosPaisesRepository();
} 

export async function agregarPaisServicio(agregarPaisAll) {
    return await paisesRepository.agregarPaisRepository(agregarPaisAll);
}

export async function modificarPaisService(id, updatePais){
    return await paisesRepository.updatePaisRepository(id, updatePais);
}

export async function eliminarPaisIdServicio(id) {
    return await paisesRepository.eliminarPaisIdRepository(id);
}