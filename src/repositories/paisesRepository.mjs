import Paises from '../models/paisHispano.mjs';
import IRepository from '../repositories/IRepository.mjs';

class SuperHeroRepository extends IRepository {
  //Obtener Paises por ID
  async obtenerPaisIdRepository(id) {
    //Funciona
    return await Paises.findById(id);
  }
  //Obtener todos los Paise con restriccion Creador y Languages
  async obtenerTodosLosPaisesRepository() {
    return await Paises.find({
      creador: "Enzo Ramos",
      "languages.spa": "Spanish",
    });
  }

  //Agregar Pais Repository
  async agregarPaisRepository(agregarPaisAll) {
    const {
      name: {
        nativeName: {
          spa: { official: nombreOficial },
        },
      },
      capital,
      borders,
      area,
      population,
      timezones,
      creador,
    } = agregarPaisAll;
    const newPais = new Paises({
      name: { nativeName: { spa: { official: nombreOficial } } },
      capital,
      borders,
      area,
      population,
      timezones,
      creador,
    });

    const guardarPais = await newPais.save();
    return guardarPais;
  }
  //Update Pais
  async updatePaisRepository(id, updatePais) {
    const updatePais1 = await Paises.findByIdAndUpdate(
      id,
      { $set: updatePais },
      { new: true }
    );
    console.log("Ver Update Pais", updatePais1);
    return updatePais1;
  }
  
  //Eliminar Pais 
  async eliminarPaisIdRepository(id){
    return await Paises.findByIdAndDelete(id);
  }

};

export default new SuperHeroRepository();