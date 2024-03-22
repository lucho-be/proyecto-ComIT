/* FUNCIÓN jeringoso - VERSION CON BUCLE FOR */

function jeringoso() {
  let palabra = document.getElementById("palabra").value.toLowerCase();
  let cadenaFinal = [];
  let letras = palabra.split("");
  for (let i = 0; i < letras.length; i++) {
    if (
      letras[i] == "a" ||
      letras[i] == "e" ||
      letras[i] == "i" ||
      letras[i] == "o" ||
      letras[i] == "u"
    ) {
      cadenaFinal.push(`${letras[i]}p${letras[i]}`);
    } else {
      cadenaFinal.push(letras[i]);
    }
  }

  document.getElementById("resultado").innerHTML = cadenaFinal.join("").toUpperCase();
}

function limpiar() {
  document.getElementById("resultado").innerHTML = "<p>Verás el resultado acá</p>";
  document.getElementById("palabra").value = "";
}
