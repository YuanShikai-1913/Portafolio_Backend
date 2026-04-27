require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const experienciasRouter = require('./routes/experiencias');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(express.json());
app.use('/api/experiencias', experienciasRouter);

app.get('/', (req, res) => {
    res.json({ mensaje: '✅ API de Experiencias funcionando' });
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ Conectado a MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ Error conectando a MongoDB:', error.message);
    });