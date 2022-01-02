const { exec } = require("child_process");

// cambiar los parametros abajo para interactuar facilmente con el resultado de la aplicación.
const params = {
	nombreArchivo: "cotizacion",
	extensionArchivo: "txt",
	indicadorEconomico: "dolar",
	cantidadDePesosACambiar: 250000,
};
const archivoMain = `index.js`;
console.clear();
const execute = (archivo) => {
	return new Promise((resolve) => {
		exec(`node ${archivo}`, (err, result) => {
			resolve(result);
		});
	});
};

execute(`${archivoMain} ${params.nombreArchivo} ${params.extensionArchivo} ${params.indicadorEconomico} ${params.cantidadDePesosACambiar} `).then((response) => {
	console.log(`Archivo: ${archivoMain} con los parametros: ${params.nombreArchivo} ${params.extensionArchivo} ${params.indicadorEconomico} ${params.cantidadDePesosACambiar}, fue ejecutado con éxito`);
	console.log(response);
});
