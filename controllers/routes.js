const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');
const express = require('@awaitjs/express');
const router = express.Router();
const controller = require('../controllers/auth');

//Login de usuario 
router.post('/login',[
    check('user_name','El usuario es obligatorio').not().isEmpty(),
    check('password','La contraseña no tiene la longitud necesaria.').isLength({min:11}),
    validarCampos
],controller.loginUsuario); 

//Validar token 
//router.get('/renew',validarJWT, validarToken); 

module.exports= router;