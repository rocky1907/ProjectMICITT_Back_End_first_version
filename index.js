const express = require('express');
const app = express();
const cors = require('cors');
const multer = require("multer");
const path = require('path')

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

const stor = multer.diskStorage({
    filename: function (res, file, cb) {
      //const ext = file.originalname.split(".").pop(); mantener extencion por si se cambia nombre
      //const fileName = Date.now(); cambiar nombre
      cb(null, `${file.originalname}`);
    },
    destination: function (res, file, cb) {
      cb(null, `./src/files/`);
    },
});
const upload = multer({storage:stor});
//upload.destination.cb(null, `./src/files/` + this.single('periodo'));
app.post("/upload", upload.single('myfile'), (req,res) => {
    res.send({data: 'OK'})
})

app.post("/download/manual",function(req,res,next){
  filepath =path.join(__dirname,'./src/files/')+req.body.filename;
  console.log(filepath);
  res.sendFile(filepath);
})

app.post("/download/evaluation",function(req,res,next){
  filepath =path.join(__dirname,'./src/files/')+req.body.filename;
  console.log(filepath);
  res.sendFile(filepath);
})

app.listen(3000);
console.log("Serve on port 3000");

