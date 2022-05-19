const express = require('express');
const app = express();
const cors = require('cors');

// middlewares, hace referencia a algunas funciones que se ejecutan antes de que lleguen a las rutas
app.use(express.json());
app.use(express.urlencoded({extends:false}));
app.use(cors());

//definicion de las rutas
app.use(require('./src/apiServices/stimulus/routes'));
app.use(require('./src/apiServices/users/routes'));
app.use(require('./src/apiServices/functionary/routes'));
app.use(require('./src/apiServices/roles/routes'));
app.use(require('./src/apiServices/periods/routes'));
app.use(require('./src/apiServices/evalutions/alta-direccion-publica/routes'));
app.use(require('./src/apiServices/agreement/routes'));
app.use(require('./src/apiServices/goal/routes'));
app.use('/auth/',require('./controllers/routes'));
app.listen(3000);
console.log("Serve on port 3000");