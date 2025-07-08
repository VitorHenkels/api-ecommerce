"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
exports.ProdutoController = {
    async listar(req, res) {
        try {
            const produtos = await ProdutoService_1.ProdutoService.listar();
            res.json(produtos);
        }
        catch {
            res.status(500).json({ erro: "Erro ao criar o recurso" });
        }
    },
    criar: async (req, res) => {
        try {
            const produto = await ProdutoService_1.ProdutoService.criar(req.body);
            res.status(201).json(produto);
        }
        catch {
            res.status(500).json({ erro: "Erro ao criar o recurso" });
        }
    },
    async buscar(req, res) {
        res.status(200).json({ status: "Sucesso" });
    },
    async atualizar(req, res) {
        res.status(200).json({ status: "Sucesso" });
    },
    async deletar(req, res) {
        res.status(200).json({ status: "Sucesso" });
    },
};
