import { checker } from './service.js'
import { validate } from './validation.js'

export function handleIniciar() {
    document.getElementById('iniciar').remove()

    let continuar = true
    while (continuar) {
        const input = prompt('Introduce el número de tu DNI:')
        if (input === null) {
            continuar = false
            break
        }
        if (!validate(input)) {
            alert('El dato introducido es incorrecto')
        } else {
            const letra = checker(Number(input))
            alert(`La letra de tu DNI es: ${letra}`)
        }
    }
}
