const { default: axios } = require("axios")

fetchTemperature = async (city) => {
    /**
     * Fetching data from an API, then returning data from a JSON string.
     * @type {{method: string, url: OpenwetherAPI}}
     * @param city, the user's desired city.
     */

    const config = {
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=00000000000000000000000000000000`
    }
    let res = await axios(config);

    return res.data.main.temp;
}

getCurrentDateAndTime = async () => {
    /**
     * Using the date object to get current date and time.
     * @type {Date}
     */

    const dateNow = new Date();
    const today = new Date(dateNow);

    let getHours = today.getHours();
    let getMinutes = today.getMinutes();
    let currentTime = getHours + ':' + getMinutes;

    dateAndTime = {
        date: today.toDateString(),
        time: currentTime
    }

    return dateAndTime;
}

module.exports = {
    fetchTemperature,
    getCurrentDateAndTime
}