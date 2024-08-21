<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encriptador de mesajes secretos.</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <div class="titulo">
      <h1>ASCII secret message</h1>
    </div>  
    <div class="contenedor-todo">
        <div id="contenido-principal">  
          <form id="cifrador" autocomplete="off">
            <textarea id="ingresar-texto" name="contenido-ingresar" placeholder="Ingrese su texto aquí." type="text"></textarea>
        </form>
            <div class="botones-principales">
                <div id="btn-encriptar" class="btn-1">Encriptar</div>
                <div id="btn-desencriptar" class="btn-2">Desencriptar</div>
            </div>
            <div class="botones-secundarios">
                <div id="btn-eliminar">Eliminar</div>
                <div id="btn-copiar" class="btn-3">Copiar</div>
            </div>
            <textarea id="resultado-texto" name="contenido-resultado"></textarea>
        </div>
        <div id="btns-aside">
            <div class="icon"></div>
            <div id="btn-recomendacion" class="btn-4">Recomendaciones</div>
            <div class="icon"></div>
            <div id="btn-historia" class="btn-5">Historia</div>
            <div class="line"></div>
            <div class="icon" id="tercer-icon"></div>
            <input type="number" id="desplazamiento" min="0" max="25" value="0">
        </div>
        <div class="contenido-secundario">
            <dialog id="dialog-recomendacion">
                <button class="close" aria-label="Close" onclick="document.getElementById('dialog-recomendacion').close()"></button>
                <span id="x-1"></span>
                <span id="x-2"></span>
                <h2>Recomendaciones</h2>
                <img src="https://247tecno.com/wp-content/uploads/2018/01/Caracteres-especiales.jpg" alt="sim" class="img-sim" width="400px" height="150px">
                <hr>
                <ul>
                    <li>El mensaje debe estar escrito solo en mayúsculas.</li>
                    <li>Recuerda que no se deben ingresar símbolos especiales (@,-,"",/,*,etc.).</li>
                    <li>Para mayor seguridad elije un número de mayor traslado.</li>  
                </ul>
            </dialog>        
            <dialog id="dialog-historia">
                <button class="close" aria-label="Close" onclick="document.getElementById('dialog-historia').close()">
                </button>
                <span id="x-1"></span>
                <span id="x-2"></span>
                <h2>Historia</h2>
                <img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/8644579/ascii_text.gif?1478635874" alt="img-rascii" class="img-ascii"  width="200px" height="150px">
                <hr>
                <p>Una de las cosas más curiosas del código ASCII, o <b>American Standard Code for Information Interchange</b>, es su origen. Esta herramienta usada por casi todos los ordenadores del mundo actualmente, tiene sus raíces en la segunda guerra mundial.</p>
                <p>Allá por 1945 la telegrafía necesitaba de un código estándar para transmitir la información. La compañía <b>Bell</b> desarrolló su propio sistema para poder transmitir mensajes de una manera standard a través del telégrafo.</p>
                <p>Y menos de veinte años después, en 1963, el <b>Comité Estadounidense de Estándares</b> constituyó el código ASCII oficialmente. En un primer momento solo incluía letras mayúsculas y números; cuatro años más tarde se añadieron las letras minúsculas y algunos caracteres más, formando lo que conocemos como US-ASCII.</p>
            </dialog>
        </div>  
    </div> 
    <div id="footer">
      <p>© Copyright 2024 - Coders. All rights reserved.</p>
    </div>
    <script src="assets/js/script.js"></script>
    <script src="assets/js/ventana.js"></script>
  </body>
  </html>
