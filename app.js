const express = require('express');
const axios = require('axios');
const app = express();

app.get('/bitcoinRates', function(req, res) {
    let url = 'https://api.coindesk.com/v1/bpi/currentprice/eur.json';

    axios.get(url)
    .then(function(responce){
        let rate = responce.data.bpi.EUR.rate;
        let code = responce.data.bpi.EUR.code;
        let disclaimer = responce.data.disclaimer;
        // console.log(responce.data);

        res.write(`<p>${rate} ${code} </p>`);
        res.write(`<p>${disclaimer}</p>`);
        res.send();
    })
    .catch(function(error){
        console.log(error);
    });
});

app.listen(3000, function(){
    console.log('Server running on port 3000');
});