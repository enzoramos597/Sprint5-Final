import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import router from './routes/superHeroRoutes.mjs';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import { title } from 'process';

//superHeroRoutes(app)
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para parsear JSON
app.use(express.json());

//Conexión a MongoDB
connectDB();

//Configurar EJS como Motor
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({extended:true}));

app.use(expressLayouts);
app.set('layout', 'layout'); //Archivo base de layout

//Servidor archivos estaticos
app.use(express.static(path.resolve('./public')));

// Ruta principal
app.get('/', (req, res) =>{
    res.render('index', {title: 'Pagina Principal'});
});

//Ruta para la pagina Acerca de
app.get('/about', (req, res) =>{
    res.render('about', {title: 'Acerca de Nosotros' });
});

//Ruta para la pagina Contacto
app.get('/contact', (req, res) =>{
    res.render('contact', {title: 'Contáctanos' });
});

//Ruta para agregar Super Heroe
app.get('/agregarSuperHeroe', (req, res) => {
    res.render('agregarSuperHeroe', {title: 'Agregar Super Heroe'});
});

//Configuración de rutas
app.use('/', router);
/*app.get('/', (req, res) =>{
    res.render('dashboard')
});*/

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({mensaje: "Ruta no encontrada" });
});

//Iniciar el Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})