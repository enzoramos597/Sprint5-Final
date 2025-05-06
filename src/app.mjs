// Importa Express, el framework web que permite crear el servidor HTTP
import express from 'express';

// Importa la función para conectar a la base de datos MongoDB
import { connectDB } from './config/dbConfig.mjs';

// Importa el archivo de rutas que manejará las peticiones relacionadas con los países
import router from './routes/paisesRoutes.mjs';

// Importa el módulo 'path' de Node.js para manejar rutas del sistema de archivos
import path from 'path';

// Importa el middleware 'express-ejs-layouts' para permitir el uso de layouts en las vistas EJS
import expressLayouts from 'express-ejs-layouts';


// ==============================
// CONFIGURACIÓN BÁSICA DEL SERVIDOR
// ==============================

// Crea una instancia de la aplicación Express
const app = express();

// Define el puerto en el que se ejecutará el servidor, usando una variable de entorno o el valor por defecto 3000
const PORT = process.env.PORT || 3000;


// Middleware para parsear datos en formato JSON del cuerpo de las peticiones
app.use(express.json());

// Ejecuta la función para conectar a MongoDB al iniciar la aplicación
connectDB();

// ==============================
// CONFIGURACIÓN DEL MOTOR DE PLANTILLAS EJS
// ==============================

// Define el directorio donde se encuentran las vistas
app.set('views', './views');

// Establece EJS como motor de vistas para renderizar HTML dinámico
app.set('view engine', 'ejs');

// Asegura que la ruta de vistas esté resuelta correctamente como una ruta absoluta
app.set('views', path.resolve('./views'));

// Middleware para parsear datos enviados desde formularios HTML (application/x-www-form-urlencoded)
app.use(express.urlencoded({extended:true}));

// Habilita el uso de layouts con EJS
app.use(expressLayouts);
// Define el archivo base de layout (por ejemplo: layout.ejs)
app.set('layout', 'layout'); //Archivo base de layout

// Sirve archivos estáticos como CSS, JS e imágenes desde la carpeta 'public'
app.use(express.static(path.resolve('./public')));

// Ruta principal del sitio web: renderiza la vista 'index.ejs'
app.get('/', (req, res) =>{
    res.render('index', {title: 'Pagina Principal'});
});

// Ruta para la página "Acerca de": renderiza 'about.ejs'
app.get('/about', (req, res) =>{
    res.render('about', {title: 'Acerca de Nosotros' });
});

// Ruta para la página de contacto: renderiza 'contact.ejs'
app.get('/contact', (req, res) =>{
    res.render('contact', {title: 'Contáctanos' });
});

// Ruta para renderizar el formulario de agregar país: vista 'agregarPais.ejs'
app.get('/agregarPais', (req, res) => {
    res.render('agregarPais', {title: 'Agregar País'});
});

//Configuración de rutas
app.use('/', router);


// Middleware que captura todas las rutas no definidas y retorna un mensaje de error 404
app.use((req, res) => {
    res.status(404).send({mensaje: "Ruta no encontrada" });
});

// ==============================
// INICIO DEL SERVIDOR
// ==============================

// Inicia el servidor y lo pone a escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
})