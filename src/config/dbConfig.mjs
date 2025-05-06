// ==============================
// IMPORTACIÓN DE MONGOOSE
// ==============================

// Importa la librería Mongoose, que permite interactuar con MongoDB usando modelos orientados a objetos
import mongoose from 'mongoose';

// ==============================
// FUNCIÓN PARA CONECTAR A MONGODB
// ==============================

/**
 * Función asincrónica que establece la conexión con la base de datos MongoDB
 * Utiliza la URL de conexión al cluster de MongoDB Atlas
 */


export async function connectDB(){
    try{
         // Intenta establecer la conexión usando Mongoose con la URL del cluster remoto
        await mongoose.connect('mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js');
        // Muestra un mensaje en consola si la conexión fue exitosa
        console.log('✅ Conexión exitosa a MongoDB');
    } catch (error){
        // Muestra un mensaje de error en consola con una ❌ si la conexión falla
        console.error('❌ Error al conectar a MongoDB:', error);
        
        // Finaliza el proceso con código de error (1 = fallo)
        process.exit(1);
    }
}
