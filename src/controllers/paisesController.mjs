// =======================================
// IMPORTACIÓN DE SERVICIOS Y DEPENDENCIAS
// =======================================

// Importa funciones de servicio para operaciones CRUD sobre los países
import {
  obtenerPaisIdServicio,
  modificarPaisService,
  agregarPaisServicio,
  eliminarPaisIdServicio,
  obtenerTodosLosPaisesServices,
} from "../services/paisService.mjs";

// Importa una función de vista que formatea los países antes de renderizarlos
import { renderizarListaPaises } from "../views/responseView.mjs";

// Importa el modelo de Mongoose para interactuar con la colección de países en MongoDB
import Paises from "../models/paisHispano.mjs";

// =======================================
// CONTROLADOR: OBTENER PAÍS POR ID
// =======================================
export async function obtenerPaisesIdController(req, res) {
  try {
    const { id } = req.params; // Extrae el ID de los parámetros de la URL
    console.log(`Traerme el ID del Pais:`, id);
    const paisSeleccionado = await obtenerPaisIdServicio(id); // Llama al servicio que busca el país por ID
    console.log("El Pais es: ", paisSeleccionado);
    // Si no se encuentra el país, se devuelve un error 404
    if (!paisSeleccionado) {
      return res.status(404).send({ mensaje: "Pais no encontrado" });
    }
    // Renderiza la vista para modificar el país
    res.render("modicarPais", {
      title: "Modificar País",
      paisSeleccionado, //  Pasamos el objeto superhéroe directamente
      navbarLinks: [
        { text: "Inicio", href: "/", icon: "/icons/home.svg" },
        { text: "Acerca de", href: "/about", icon: "/icons/info.svg" },
        { text: "Contacto", href: "/contact", icon: "/icons/contact.svg" },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      mensaje: "Error al obtener el País",
      error: error.message,
    });
  }
}

// =======================================
// CONTROLADOR: MODIFICAR PAÍS
// =======================================
export async function modificarPaisController(req, res) {
  try {
    const id = req.params.id; //ID del país a modificar
    const updatePais = req.body; // Nuevos datos del país
    console.log("El ID de Modificar es:", id);
    console.log("Entra en el Controller:", updatePais);

    const paisModificado = await modificarPaisService(id, updatePais); // Llamo al servicio para modificar
    if (!paisModificado) {
      return res.status(404).send({ mensaje: "No se pudo actualizar el País" });
    }

    console.log("Devuelve el valor de Return Repository", paisModificado);
    // Formatea el objeto para mostrarlo como respuesta
    const paisesFormateados = {
      id: paisModificado._id,
      name: {
        nativeName: {
          spa: {
            official: paisModificado.nombreOficial,
          },
        },
      },
      capital: paisModificado.capital,
      borders: paisModificado.borders,
      area: paisModificado.area,
      population: paisModificado.population,
      timezones: paisModificado.timezones,
      creador: paisModificado.creador,
    };
    // Envía respuesta con el país modificado
    return res.json({ result: "success", paisesFormateados });
  } catch (error) {
    return res.status(500).send({
      mensaje: "Error al actualizar el País",
      error: error.message,
    });
  }
}

// =======================================
// CONTROLADOR: OBTENER TODOS LOS PAÍSES
// =======================================
export async function obtenerTodosLosPaisesController(req, res) {
  try {
    const paises = await obtenerTodosLosPaisesServices(); //Llama al servicio que trae todos los países
    const paisesFormateados = renderizarListaPaises(paises); // Formatea la lista de países
    // Renderiza la vista con los países
    res.render("mostrarAllPaises", {
      title: "Lista de Paises",
      paisesFormateados,
      navbarLinks: [
        { text: "Inicio", href: "/", icon: "/icons/home.svg" },
        { text: "Acerca de", href: "/about", icon: "/icons/info.svg" },
        { text: "Contacto", href: "/contact", icon: "/icons/contact.svg" },
      ],
    });
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener los Paises",
      error: error.message,
    });
  }
}

// =======================================
// CONTROLADOR: AGREGAR NUEVO PAÍS
// =======================================
export async function agregarPaisController(req, res) {
  try {
    const agregarPaisAll = req.body;
    console.log("Ver el Pais: ", agregarPaisAll); // Obtiene los datos del país desde el formulario
    const paiscreado = await agregarPaisServicio(agregarPaisAll); // Llama al servicio para crear país
    console.log(paiscreado);
    if (paiscreado.length === 0) {
      return res.status(404).send({ mensaje: "No se creo el País" });
    }
    // Respuesta de éxito
    res.json({ result: "success" });
  } catch (error) {
    res
      .status(500)
      .send({ mensaje: "Error al crear el País", error: error.message });
  }
}

// =======================================
// CONTROLADOR: ELIMINAR PAÍS POR ID
// =======================================
export async function eliminarPaisController(req, res) {
  try {
    const id = req.params.id; // Extrae el ID del país a eliminar
    console.log("Ver el ID Pais a eliminar", id);
    const paisEliminado = await eliminarPaisIdServicio(id); // Llama al servicio que elimina el país
    if (paisEliminado.length === 0) {
      return res.status(404).send({ mensaje: "No se pudo Eliminar el País" });
    }
    res.json({ result: "success" });
  } catch (error) {
    res
      .status(500)
      .send({ mensaje: "Error al Eliminar el Pais", error: error.message });
  }
}

// =======================================
// CONTROLADOR: TRAER PAÍSES DE LA API EXTERNA
// =======================================
export async function traerPaisesHispanohablantes() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all"); // Consulta API REST Countries
    const data = await res.json();
    // Filtra países que tengan idioma español
    const paisesEspanol = data
      .filter((pais) => pais.languages?.spa)
      .map((pais) => {
        // Desestructuramos y omitimos las propiedades que NO queremos
        const {
          translations,
          tld,
          cca2,
          ccn3,
          cca3,
          cioc,
          idd,
          altSpellings,
          car,
          coatOfArms,
          postalCode,
          demonyms,
          ...resto
        } = pais;

        return {
          ...resto,
          // Agrega el campo de creador manualmente
          creador: "Enzo Ramos",
        };
      });

    return paisesEspanol; // Devuelve la lista filtrada
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return [];
  }
}

// =======================================
// CONTROLADOR: MANEJAR INSERCIÓN A MONGO
// =======================================

export async function manejarTraerPaises(req, res) {
  try {
    const paises = await traerPaisesHispanohablantes(); //Llama función que consulta API
    // Guardar en archivo .txt
    //fs.writeFileSync('paisesHispanohablantes.txt', JSON.stringify(paises, null, 2));
    console.log(paises);
    // (opcional) limpiar la colección antes de insertar
    //await Paises.deleteMany({});
    // Inserta países en la colección MongoDB
    const resultado = await Paises.insertMany(paises);
    res.json(paises); // envía JSON al navegador
  } catch (error) {
    res.status(500).json({ error: "Error al traer los países" });
  }
}
