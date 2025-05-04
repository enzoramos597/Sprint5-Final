//Define el modelo de datos para
//Importo Mongoose
import mongoose from "mongoose";

const paisSchema = new mongoose.Schema({
    name: Object,
    independent: Boolean,
    status: String,
    unMember: Boolean,
    currencies: Object,
    capital: [String],
    region: String,
    subregion: String,
    languages: Object,
    latlng: [Number],
    landlocked: Boolean,
    borders: [String],
    area: Number,
    flag: String,
    maps: Object,
    population: Number,
    gini: Object,
    fifa: String,
    timezones: [String],
    continents: [String],
    flags: Object,
    startOfWeek: String,
    capitalInfo: Object,
    creador: { type: String, required: true }
});

const Paises = mongoose.model('Paises', paisSchema, 'Grupo-04');
export default Paises