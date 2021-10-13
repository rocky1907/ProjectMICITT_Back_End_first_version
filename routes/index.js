const express = require('express');
const app = express();
const cors = require('cors');

// middlewares, hace referencia a algunas funciones que se ejecutan antes de que lleguen a las rutas
app.use(express.json());
app.use(express.urlencoded({extends:false}));
app.use(cors());

//definicion de las rutas
app.use(require('./routes/roles'));
app.use(require('./routes/users'));


app.listen(3000);
console.log("Serve on port 3000");