const { default: axios } = require("axios")

const fetchTemperature = async (city) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=011f9ade363009c9133ac05f4226b4f7`);
        console.log(res.data.main.temp);
    } catch (e) {
        console.log("There was an error: \n", e);
    }
}

fetchTemperature("Johannesburg");
