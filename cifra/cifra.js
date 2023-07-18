const mensagemSecreta = 'Matheus';

console.log(mensagemSecreta);

function cifrarMensagem(offset, mensagem) {
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let codLetraAscii = mensagem.charCodeAt(i);
    if (codLetraAscii >= 65 && codLetraAscii <= 90) {
      let calculoOffset = ((codLetraAscii - 65 + offset) % 26) + 65;
      resultado += String.fromCharCode(calculoOffset);
    } else if (codLetraAscii >= 97 && codLetraAscii <= 122) { 
      let calculoOffset = ((codLetraAscii - 97 + offset) % 26) + 97;
      resultado += String.fromCharCode(calculoOffset);
    } else {
      resultado += String.fromCharCode(codLetraAscii); 
    }
  }
  return resultado;
}

function decifrarMensagem(offset, mensagem) {
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    let codLetraAscii = mensagem.charCodeAt(i);
    if (codLetraAscii >= 65 && codLetraAscii <= 90) {
      let calculoOffset = ((codLetraAscii - 90 - offset) % 26) + 90;
      resultado += String.fromCharCode(calculoOffset);
    } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
      let calculoOffset = ((codLetraAscii - 122 - offset) % 26) + 122;
      resultado += String.fromCharCode(calculoOffset);
    } else {
      resultado += String.fromCharCode(codLetraAscii);
    }

  }
  return resultado;
}

const mensagemCifrada = cifrarMensagem(2, mensagemSecreta);
const mensagemDecifrada = decifrarMensagem(2, mensagemCifrada);

console.log(mensagemCifrada);
console.log(mensagemDecifrada);