const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());



app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});
