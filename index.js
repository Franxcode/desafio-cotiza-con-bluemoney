const { creacionArchivo } = require("./fsModule");
const { apiCall } = require("./httpsModule");

const [, , nombreArchivo, extensionArchivo, indicadorEconomico, cantidadDePesosACambiar] = process.argv;

console.clear();
apiCall(indicadorEconomico, cantidadDePesosACambiar).then((response) => {
	creacionArchivo(nombreArchivo, extensionArchivo, indicadorEconomico, cantidadDePesosACambiar, response);
});
