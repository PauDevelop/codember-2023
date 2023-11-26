function compilador(codigo) {
  let resultado = ""
  let valorActual = 0
  for (let i = 0; i < codigo.length; i++) {
    if (codigo[i] === "&") {
      resultado = resultado + `${valorActual}`
    } else if (codigo[i] === "#") {
      valorActual++
    } else if (codigo[i] === "@") {
      valorActual--
    } else {
      valorActual = valorActual * valorActual
    }
  }
  return resultado
}