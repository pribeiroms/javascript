function inverterPalavras(frase) {
  return frase
    .split(' ')
    .map(palavra => palavra.split('').reverse().join(''))
    .join(' ');
}

const frase = "vai na fé";
const resultado = inverterPalavras(frase);

console.log(`Frase original: ${frase}`);
console.log(`Frase invertida: ${resultado}`);
