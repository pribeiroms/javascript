const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const chute = Math.floor(Math.random() * 10) + 1;

console.log(`Número secreto: ${numeroSecreto}`);
console.log(`Seu chute: ${chute}`);

if (chute === numeroSecreto) {
  console.log("Parabéns! Você acertou 🎯");
} else {
  console.log("Errou! Tente novamente ❌");
}
