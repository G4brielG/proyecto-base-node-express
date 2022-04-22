const route = require('express').Router();
const { holaMundo } = require('../controllers/main.controllers')

/*route.get('/', (req, res) => {
  res.json({ msg: 'Hola' });
});*/

route.get('/', holaMundo)

module.exports = route;