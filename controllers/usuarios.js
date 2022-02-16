const { response } = require("express");

const usuariosGet = (req, res = response) => {
    const { q, nombre = "no name", apiKey } = req.query;
    res.json({
        "msg": "get API - controlador",
        q, nombre, apiKey
    });
}

const usuariosPost = (req, res) => {
    const body = req.body;
    const { nombre, edad } = body;
    res.status(201).json({
        "msg": "post API - controler",
        nombre,
        edad
    });
}

const usuariosPut = (req, res) => {
    const { id } = req.params;
    res.status(400).json({
        "msg": "put API - controler",
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        "msg": "patch API - controler"
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        "msg": "delete API - controler"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}