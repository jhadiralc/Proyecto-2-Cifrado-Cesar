function cifrarCesar(texto, desplazamiento) {
  let resultado = "";
  desplazamiento = desplazamiento % 26;

  for (let i = 0; i < texto.length; i++) {
      let char = texto[i];

      if (char >= "A" && char <= "Z") {
          let nuevoCodigo = (char.charCodeAt(0) - 65 + desplazamiento) % 26 + 65;
          resultado += String.fromCharCode(nuevoCodigo);
      } else {
          resultado += char;
      }
  }
  return resultado;
}
function desencriptarCesar(texto, desplazamiento) {
  return cifrarCesar(texto, -desplazamiento);
}

function encriptar() {
  let texto = document.getElementById("ingresar-texto").value;
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value, 10);

  if (isNaN(desplazamiento)) {
      alert("Por favor, ingresa un número válido para el desplazamiento.");
      return;
  }

  let textoCifrado = cifrarCesar(texto, desplazamiento);

  if (texto.length !== 0) {
      document.getElementById("resultado-texto").value = textoCifrado;
  } else {
      alert("Debes ingresar algún texto para encriptar");
  }
}

function desencriptar() {
  let textoCifrado = document.getElementById("ingresar-texto").value;
  let desplazamiento = parseInt(document.getElementById("desplazamiento").value, 10);

  if (isNaN(desplazamiento)) {
      alert("Por favor, ingresa un número válido para el desplazamiento.");
      return;
  }

  let textoOriginal = desencriptarCesar(textoCifrado, desplazamiento);

  if (textoCifrado.length !== 0) {
      document.getElementById("resultado-texto").value = textoOriginal;
  } else {
      alert("Debes ingresar algún texto para desencriptar");
  }
}

const textarea = document.getElementById("resultado-texto");
const button = document.getElementById("btn-copiar");

button.addEventListener("click", async () => {
  try {
      textarea.select();
      await navigator.clipboard.writeText(textarea.value);
      button.innerText = "Copiado";
  } catch (error) {
      alert("Error al copiar: " + error);
  }
});

document.getElementById("btn-encriptar").addEventListener("click", encriptar);
document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
document.getElementById("btn-eliminar").addEventListener("click", function() {
  document.getElementById("ingresar-texto").value = "";
  document.getElementById("resultado-texto").value = "";
});
