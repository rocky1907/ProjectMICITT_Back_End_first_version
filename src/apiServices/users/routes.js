//const {Router} = require('express');
const express = require('@awaitjs/express');
const userController = require('./Users');
const router = express.Router();

/*router.post('/users',controller.createUser);
router.put('/users/:id',controller.updateUserById);*/

router.get('/user',userController.getUsers);
/*router.post('/users',userController.addUserRole);
//router.delete('/user/:id',userController.deleteRoleByName);
*/
//gg
module.exports = router;