const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv({strict: false, validateSchema: false});

addFormats(ajv)

const raceSchema = require("./schemas/race_schema.json");
const rutineSchema = require("./schemas/gym_rutine_schema.json");

const booksRoutes = require('./routes/books')

app.use('/', booksRoutes)

app.post('/race', (req, res) => {
  const validateRace = ajv.compile(raceSchema);
  const isValid = validateRace(req.body);
  
  if (isValid) {
    res.status(200).send("Race JSON is valid");
  } else {
    console.log(validateRace.errors);
    res.status(400).send("Race JSON is invalid");
  }
});

app.post('/rutine', (req, res) => {
  const validateRutine = ajv.compile(rutineSchema);
  const isValid = validateRutine(req.body);
  
  if (isValid) {
    res.status(200).send("Rutine JSON is valid");
  } else {
    console.log(validateRutine.errors);
    res.status(400).send("Rutine JSON is invalid");
  }
});



app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
