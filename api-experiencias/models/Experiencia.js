const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
    empresa: { type: String, required: true },
    cargo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaInicio: { type: String, required: true },
    fechaFin: { type: String, default: "Actualidad" },
    tecnologias: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Experiencia', experienciaSchema);