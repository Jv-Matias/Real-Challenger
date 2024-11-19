document.getElementById('buscar').addEventListener('click', async () => {
    const ra = document.getElementById('alunoID').value;

    if (!ra) {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Por favor, preencha o RA do aluno antes de buscar.',
        });
        return;
    }

    try {
        const response = await fetch(`/buscar-aluno/${ra}`);
        if (!response.ok) {
            throw new Error('Aluno não encontrado.');
        }

        const aluno = await response.json();

        // Preencher os campos do formulário com os dados do aluno
        document.getElementById('tituloIA').value = aluno.titulo || '';
        document.getElementById('dataIA').value = aluno.data || '';
        document.getElementById('horarioIA').value = aluno.horario || '';
        document.getElementById('localIA').value = aluno.local || '';
        document.getElementById('sala').value = aluno.sala || '';
        document.getElementById('vagas').value = aluno.vagas || '0';

        Swal.fire({
            icon: 'success',
            title: 'Dados carregados com sucesso!',
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro ao buscar aluno',
            text: error.message,
        });
    }
});

document.getElementById('salvar').addEventListener('click', async () => {
    const ra = document.getElementById('alunoID').value;

    if (!ra) {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Por favor, preencha o RA antes de salvar.',
        });
        return;
    }

    const dadosAtualizados = {
        titulo: document.getElementById('tituloIA').value,
        data: document.getElementById('dataIA').value,
        horario: document.getElementById('horarioIA').value,
        local: document.getElementById('localIA').value,
        sala: document.getElementById('sala').value,
        vagas: document.getElementById('vagas').value,
    };

    try {
        const response = await fetch(`/atualizar-aluno/${ra}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosAtualizados),
        });

        if (!response.ok) {
            throw new Error('Erro ao salvar as alterações.');
        }

        const result = await response.json();

        Swal.fire({
            icon: 'success',
            title: result.message,
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro ao salvar dados',
            text: error.message,
        });
    }
});
