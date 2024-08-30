const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/rutas');

app.use('/', indexRouter);

app.listen(4000, () => {
    console.log("Servidor corriendo en http://localhost:4000");
});