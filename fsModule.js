const fs = require("fs");

const creacionArchivo = (nombreArchivo, extensionArchivo, indicadorEconomico, cantidadDePesosACambiar, response) => {
	const templateString = `
	A la fecha: ${response.baseDate}
	Fue realizada cotización con los siguientes datos:
	Cantidad de pesos a convertir: ${cantidadDePesosACambiar} pesos
	Convertido a "${indicadorEconomico}" da un total de: 
	${response.resultadoCambio}`;

	fs.writeFile(`${nombreArchivo}.${extensionArchivo}`, `${templateString}`, "utf-8", () => {
		console.log(`${nombreArchivo}.${extensionArchivo} creado con éxito.`);
		console.log(`Su contenido es: ${templateString}`);
	});
};

module.exports = {
	creacionArchivo,
};
