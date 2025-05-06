//Define el modelo de datos para
//Importo Mongoose
import mongoose from "mongoose";

const paisSchema = new mongoose.Schema({
    /*name: Object,
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
    creador: { type: String, required: true }*/
    //const PaisSchema = new mongoose.Schema({
        name: {
          common: { type: String, default: "" },
          official: { type: String, default: "" },
          nativeName: {
            grn: {
              official: { type: String, default: "" },
              common: { type: String, default: "" },
            },
            spa: {
              official: { type: String, default: "" },
              common: { type: String, default: "" },
            }
          }
        },
        independent: { type: Boolean, default: false },
        status: { type: String, default: "" },
        unMember: { type: Boolean, default: false },
        currencies: {
          ARS: {
            name: { type: String, default: "" },
            symbol: { type: String, default: "" }
          }
        },
        capital: { type: [String], default: [] },
        region: { type: String, default: "" },
        subregion: { type: String, default: "" },
        languages: {
          grn: { type: String, default: "" },
          spa: { type: String, default: "Spanish" }
        },
        latlng: { type: [Number], default: [] },
        landlocked: { type: Boolean, default: false },
        borders: { type: [String], default: [] },
        area: { type: Number, default: 0 },
        flag: { type: String, default: "" },
        maps: {
          googleMaps: { type: String, default: "" },
          openStreetMaps: { type: String, default: "" }
        },
        population: { type: Number, default: 0 },
        gini: {
          "2019": { type: Number, default: 0 }
        },
        fifa: { type: String, default: "" },
        timezones: { type: [String], default: [] },
        continents: { type: [String], default: [] },
        flags: {
          png: { type: String, default: "" },
          svg: { type: String, default: "" },
          alt: { type: String, default: "" }
        },
        startOfWeek: { type: String, default: "monday" },
        capitalInfo: {
          latlng: { type: [Number], default: [] }
        },
        creador: { type: String, required: true }      
});

const Paises = mongoose.model('Paises', paisSchema, 'Grupo-04');
export default Paises