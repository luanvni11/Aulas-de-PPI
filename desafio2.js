//Questão 1
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const aprovados = alunos
  .map((aluno) => {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    const media = (soma / aluno.notas.length).toFixed(2) * 1;
    return { nome: aluno.nome, media: media };
  })
  .filter((aluno) => aluno.media >= 7)
  .sort((a, b) => b.media - a.media);

console.log(aprovados);

//Questão 2
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  return filmes
    .filter((f) => f.genero === genero)
    .toSorted((a, b) => {
      if (criterio === "ano") {
        return b.ano - a.ano;
      } else {
        if (a.titulo < b.titulo) {
          return -1;
        }
        if (a.titulo > b.titulo) {
          return 1;
        }
        return 0;
      }
    })
    .map((f) => `${f.titulo} (${f.ano}) - ${f.genero}`);
}

console.log(buscarFilmes("ficção", "ano"));
console.log(buscarFilmes("fantasia", "titulo"));