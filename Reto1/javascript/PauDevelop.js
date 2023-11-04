function patronMensajes(mensaje) {
    const patron = {}
    mensaje.split(' ').forEach(element => {
        patron[element] = (patron[element] || 0) + 1
    })

    const result = JSON.stringify(patron).replaceAll('"', '').replaceAll(':', '').replaceAll(',', '').replace('{', '').replace('}', '')

    return result
}