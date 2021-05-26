const { default: axios } = require("axios")

fetchTemperature = async (city) => {

    const config = {
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=011f9ade363009c9133ac05f4226b4f7`
    }

    let res = await axios(config);
    return res.data.main.temp;
}

const temperature = fetchTemperature("zzzzzzzzzzzzzzzzzz");

temperature
    .then(
        (result) => {
            console.log("Temperature: " + result);
        })
    .catch(
        (err) => {
            console.log("There was an error. \n", err.response.data.message)
        }
    )