const https = require("https");
const apiUrl = "https://mindicador.cl/api/";

const today = new Date();
const day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
const month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
const year = today.getFullYear();
const formattedDate = `${day}-${month}-${year}`;
const englishDateFormat = `${month}-${day}-${year}`;
const baseDate = new Date(`${englishDateFormat}`);

const apiCall = (indicadorEconomico, cantidadDePesosACambiar, formattedDate = "03-09-2020", baseDate = `${new Date("09-03-2020")}`) => {
	return new Promise((resolve) => {
		try {
			https.get(`${apiUrl}${indicadorEconomico}/${formattedDate}`, (resp) => {
				resp.on("data", (data) => {
					const res = JSON.parse(data);
					const { serie } = res;
					const [{ valor }] = serie;
					const resultadoCambio = `$${(cantidadDePesosACambiar / valor).toFixed(2)}`;
					resolve({ resultadoCambio, baseDate });
				});
			});
		} catch (error) {
			console.log(error);
		}
	});
};
module.exports = {
	apiCall,
};
