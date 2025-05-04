//Define las funciones de presentación de datos.
//Organiza la información de los superhéroes en un formato estructurado.

export function renderizarSuperheroe(superheroe) {
    return {
        id: superheroe._id,
        Nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos,
        "Creador": superheroe.creador
    };
}

export function renderizarListaSuperheroes(superheroes) {
    //console.log(superheroes);
    return superheroes.map((superheroe) => renderizarSuperheroe(superheroe));
}

export function renderizarPais(pais) {
    return {
        id: pais._id,
        Nombre: pais.name?.common,
        "Nombre Oficial": pais.name?.nativeName?.spa?.official,
       // "Nombre Oficial": pais.name?.official,
        Independiente: pais.independent,
        Estado: pais.status,
        "Miembro de la ONU": pais.unMember,
        Monedas: pais.currencies,
        Capital: pais.capital,
        Región: pais.region,
        Subregión: pais.subregion,
        Idiomas: pais.languages,
        Coordenadas: pais.latlng,
        "Sin salida al mar": pais.landlocked,
        Fronteras: pais.borders,
        Área: pais.area,
        Población: pais.population,
        ZonaHoraria: pais.timezones,
        Continentes: pais.continents,
        Bandera: pais.flag,
        "Link de mapas": pais.maps?.googleMaps,
        FIFA: pais.fifa,
        Gini: pais.gini,
        "Inicio de semana": pais.startOfWeek,
        "Capital Info": pais.capitalInfo,
        Creador: pais.creador
    };
}


/*export function renderizarListaPaises(paisesEspaniol) {
    return paisesEspaniol.map((pais) => renderizarPaises(paisesEspaniol));
}*/
export function renderizarListaPaises(paises) {
    return paises.map((pais) => renderizarPais(pais));
}
export function renderizarMensaje(mensaje) {
    // Envuelve un mensaje en formato JSON
    return JSON.stringify({ mensaje }, null, 2);
}