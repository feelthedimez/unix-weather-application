#!/usr/bin/node

const dateAndTemp = require('./app')

const temperature = dateAndTemp.fetchTemperature("Johannesburg");

temperature
    .then(
    (result) => {
        console.log("Today's Temperature is: " + result + "°C");
    })
    .catch(
        (err) => {
            console.log("There was an error.\n", err.response.data.message);
        }
    )