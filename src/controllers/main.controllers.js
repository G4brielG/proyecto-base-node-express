const controller = {}

controller.holaMundo = (req, res) => {
    res.json({ msg: 'Hola' });
}

module.exports = controller;