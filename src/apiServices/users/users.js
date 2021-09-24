//const {Router} = require('express');

const express = require('@awaitjs/express');
const controller = require('./controller');
const router = Router();

const {getUsers, createUser, getUserById, deleteUserById, updateUserById} = require('./usersController');

router.get('/users',getUsers);
router.post('/users',createUser);
router.get('/users/:id',getUserById);
router.delete('/users/:id',deleteUserById);
router.put('/users/:id',updateUserById);

module.exports = router;
//aGREGANDO un comentario
//aGREGANDO un comentario
//aGREGANDO un comentario