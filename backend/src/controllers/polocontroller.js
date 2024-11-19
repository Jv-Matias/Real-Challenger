const express = require('express');
const router = express.Router();
const db = require('./database'); // Conexão ao banco de dados

// Rota para buscar dados do aluno pelo RA
router.get('/buscar-aluno/:ra', async (req, res) => {
    const { ra } = req.params;
    try {
        const [aluno] = await db.query('SELECT * FROM alunos WHERE ra = ?', [ra]);
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }
        res.json(aluno);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar aluno' });
    }
});

// Rota para atualizar os dados do aluno
router.put('/atualizar-aluno/:ra', async (req, res) => {
    const { ra } = req.params;
    const { titulo, data, horario, local, sala, vagas } = req.body;

    try {
        const result = await db.query(
            'UPDATE alunos SET titulo = ?, data = ?, horario = ?, local = ?, sala = ?, vagas = ? WHERE ra = ?',
            [titulo, data, horario, local, sala, vagas, ra]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }

        res.json({ message: 'Dados atualizados com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar dados do aluno' });
    }
});

module.exports = router; // Exportando o router no final
