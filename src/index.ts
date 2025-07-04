import express from "express";
import 'reflect-metadata';
import produtosRoute from './routes/produto.routes'
require('dotenv').config();
const app = express()
app.use(express.json())

app.use('/produtos', produtosRoute)

app.listen(process.env.API_PORT, () => {
    console.log('Servidor rodando na porta: ',process.env.API_PORT);

})