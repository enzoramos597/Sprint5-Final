//Establece una interfaz para métodos CRUD estándar.
//Contrato para que las clases en esta interfaz cuenten con dichos métodos.

class IRepository {
    obtenerPorId(id) {
        throw new Error("Método 'obtenerPorId()' no implementado");
    }
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtributo()' no implementado")
    }
    obtenerMayoresDe30() {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado")
    }
}

export default IRepository;