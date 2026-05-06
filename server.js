//console.log('Servidor funcionando');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Servidorr listo en http://localhost:3000");
});