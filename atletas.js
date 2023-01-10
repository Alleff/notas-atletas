let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMedia(atletas) {
  for (let atleta of atletas) {
    let notas = atleta.notas;
    let soma = 0;
    let menorNota = notas[0];
    let maiorNota = notas[0];
    
    // Calcular a soma das notas e encontrar a menor e maior nota
    for (let nota of notas) {
      soma += nota;
      if (nota < menorNota) menorNota = nota;
      if (nota > maiorNota) maiorNota = nota;
    }

    // Calcular a média das notas, excluindo a menor e maior nota
    let media = (soma - menorNota - maiorNota) / 3 /*(notas.length - 2)*/;

    // Apresentar os resultados
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas: ${notas.join(', ')}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log();
  }
}

calcularMedia(atletas);
