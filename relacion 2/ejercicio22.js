var numero = prompt("Escribe un número");
numero = parseInt(numero);
for (i = 1; i <= 5; i++) {
    let line = "*".repeat(i) + "<br>";
    document.write(line);
  }