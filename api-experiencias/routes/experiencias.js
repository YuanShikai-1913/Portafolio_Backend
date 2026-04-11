const express = require('express');
const router = express.Router();
const Experiencia = require('../models/Experiencia');

// CREATE
router.post('/', async (req, res) => {
    try {
        const nueva = new Experiencia(req.body);
        const guardada = await nueva.save();
        res.status(201).json(guardada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear', error: error.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const experiencias = await Experiencia.find();
        res.status(200).json(experiencias);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener', error: error.message });
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const experiencia = await Experiencia.findById(req.params.id);
        if (!experiencia) return res.status(404).json({ mensaje: 'No encontrada' });
        res.status(200).json(experiencia);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener', error: error.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const actualizada = await Experiencia.findByIdAndUpdate(
            req.params.id, req.body, { new: true, runValidators: true }
        );
        if (!actualizada) return res.status(404).json({ mensaje: 'No encontrada' });
        res.status(200).json(actualizada);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar', error: error.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const eliminada = await Experiencia.findByIdAndDelete(req.params.id);
        if (!eliminada) return res.status(404).json({ mensaje: 'No encontrada' });
        res.status(200).json({ mensaje: 'Experiencia eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar', error: error.message });
    }
});

module.exports = router;