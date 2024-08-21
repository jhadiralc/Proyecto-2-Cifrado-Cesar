function encriptar() {
    let texto = document.getElementById("ingresar-texto").value;
  
    let textoCifrado = texto
        .replace(/A/g, "65")
        .replace(/B/g, "66")
        .replace(/C/g, "67")
        .replace(/D/g, "68")
        .replace(/E/g, "69")
        .replace(/F/g, "70")
        .replace(/G/g, "71")
        .replace(/H/g, "72")
        .replace(/I/g, "73")
        .replace(/J/g, "74")
        .replace(/K/g, "75")
        .replace(/L/g, "76")
        .replace(/M/g, "77")
        .replace(/N/g, "78")
        .replace(/O/g, "79")
        .replace(/P/g, "80")
        .replace(/Q/g, "81")
        .replace(/R/g, "82")
        .replace(/S/g, "83")
        .replace(/T/g, "84")
        .replace(/U/g, "85")
        .replace(/V/g, "86")   
        .replace(/W/g, "87")
        .replace(/X/g, "88")
        .replace(/Y/g, "89")
        .replace(/Z/g, "90")
        .replace(/Ñ/g, "165")
  
    if (texto.length !== 0) {
        document.getElementById("resultado-texto").value = textoCifrado;
    } else {
        alert("Debes ingresar algún texto para encriptar");
    }
  }
  
  function desencriptar() {
    let textoCifrado = document.getElementById("ingresar-texto").value;
  
    let textoOriginal = textoCifrado
        .replace(/65/g, "A")
        .replace(/66/g, "B")
        .replace(/67/g, "C")
        .replace(/68/g, "D")
        .replace(/69/g, "E")
        .replace(/70/g, "F")
        .replace(/71/g, "G")
        .replace(/72/g, "H")
        .replace(/73/g, "I")
        .replace(/74/g, "J")
        .replace(/75/g, "K")
        .replace(/76/g, "L")
        .replace(/77/g, "M")
        .replace(/78/g, "N")
        .replace(/79/g, "O")
        .replace(/80/g, "P")
        .replace(/81/g, "Q")
        .replace(/82/g, "R")
        .replace(/83/g, "S")
        .replace(/84/g, "T")
        .replace(/85/g, "U")
        .replace(/86/g, "V")
        .replace(/87/g, "W")
        .replace(/88/g, "X")
        .replace(/89/g, "Y")
        .replace(/90/g, "Z")
        .replace(/165/g, "Ñ")
  
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
      setTimeout(() => {
        getSelection().removeAllRanges();
        button.innerText = "Copiar";
      }, 1800);
    } catch (error) {
      alert(error);
    }
  });
  
  document.getElementById("btn-encriptar").addEventListener("click", function() {
    encriptar();
  })
  document.getElementById("btn-desencriptar").addEventListener("click", function() {
    desencriptar();
  })
  document.getElementById("btn-eliminar").addEventListener("click", function() {
    document.getElementById("ingresar-texto").value = "";
    document.getElementById("resultado-texto").value = "";
  });
