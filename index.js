// index.js
require('dotenv').config()
const express = require('express')

const peliculasRouter = require('./src/routes/peliculas')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware global
app.use(express.json())

// Rutas
app.use('/api/peliculas', peliculasRouter)

// Ruta de estadísticas (no pertenece a peliculasRouter, pero podrías moverla también)
app.get('/api/estadisticas', require('./src/controllers/peliculasController').obtenerEstadisticas)

// 404 global
app.use((req, res) => {
  res.status(404).json({ error: `Ruta ${req.method} ${req.url} no encontrada` })
})

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`)
})