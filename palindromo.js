function ehPalindromo(palavra) {
  const formatada = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');
  const invertida = formatada.split('').reverse().join('');
  return formatada === invertida;
}

const palavra = "Radar";
console.log(`A palavra "${palavra}" é palíndromo? ${ehPalindromo(palavra) ? 'Sim' : 'Não'}`);
