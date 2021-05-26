const { default: axios } = require("axios")

async function fetchTemperature(city) {

    const config = {
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=011f9ade363009c9133ac05f4226b4f7`
    }

    try {
        let res = await axios(config);
        // console.log(res.data.main.temp);
        return res.data.main.temp;
    } catch (e) {
        console.log("The was an error \n", e);
    }
}

const temperature = fetchTemperature("Durban");

temperature
    .then(
        (result) => {
            console.log("Temperature: " + result);
        })
    .catch(
        (err) => {
            console.log("There was an error.", err)
        }
    )