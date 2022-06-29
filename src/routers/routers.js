//configurar los endpoints (nombres de los servicios que ofrece mi api)
//activar el controlador

const { Router} = require("express");
const router = Router();
const trabajo= '/api';
const notaControlador= require('../controllers/controllers')

//router.get(trabajo+'/nota',notaControlador.getAll)
router.post(trabajo+'/nota',notaControlador.create)

 

module.exports = router;