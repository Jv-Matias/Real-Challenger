// Dados para popular a tabela
const dadosTabela = [
    { periodo: "1º Semestre", disciplina: "IA", mdl: 7.5, pratica: 8.0, a2: 6.5, a3: 7.0, mediaFinal: 7.2, falta: "5%" },
    { periodo: "1º Semestre", disciplina: "Mobile", mdl: 8.0, pratica: 8.5, a2: 7.0, a3: 7.5, mediaFinal: 7.8, falta: "3%" },
    { periodo: "2º Semestre", disciplina: "Front-End", mdl: 6.0, pratica: 7.0, a2: 5.5, a3: 6.0, mediaFinal: 6.1, falta: "8%" },
    { periodo: "2º Semestre", disciplina: "Back-End", mdl: 7.0, pratica: 7.5, a2: 6.5, a3: 7.0, mediaFinal: 7.0, falta: "2%" },
  ];
  
  // Função para preencher a tabela
  function preencherTabela(filtro = "todas") {
    const tabela = document.getElementById("tabelaDisciplinas");
    tabela.innerHTML = ""; // Limpa o conteúdo existente
  
    // Filtrar dados com base no valor do select
    const dadosFiltrados = filtro === "todas" ? dadosTabela : dadosTabela.filter((linha) => linha.disciplina.toLowerCase() === filtro);
  
    // Preencher tabela com os dados filtrados
    dadosFiltrados.forEach((linha) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${linha.disciplina}</td>
        <td>${linha.mdl}</td>
        <td>${linha.pratica}</td>
        <td>${linha.a2}</td>
        <td>${linha.a3}</td>
        <td>${linha.mediaFinal}</td>
        <td>${linha.falta}</td>
      `;
      tabela.appendChild(tr);
    });
  }
  
  // Adicionar evento ao dropdown
  document.getElementById("disciplinaSelect").addEventListener("change", (event) => {
    const filtro = event.target.value; // Obter o valor selecionado
    preencherTabela(filtro); // Atualizar tabela com o filtro
  });
  
  // Chama a função para preencher a tabela ao carregar a página
  document.addEventListener("DOMContentLoaded", () => preencherTabela());
  