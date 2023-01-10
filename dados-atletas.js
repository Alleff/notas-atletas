class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    let notas = this.notas;
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
    return (soma - menorNota - maiorNota) / (notas.length - 2);
  }

  obtemNomeAtleta() {
    return this.nome;
  }
  
  obtemIdadeAtleta() {
    return this.idade;
  }
  
  obtemPesoAtleta() {
    return this.peso;
  }
  
  obtemNotasAtleta() {
    return this.notas;
  }
  
  obtemCategoria() {
    return this.calculaCategoria();
  }
  
  obtemIMC() {
    return this.calculaIMC();
  }
  
  obtemMediaValida() {
    return this.calculaMediaValida();
  }

}
