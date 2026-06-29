import { checker } from './service.js'
import { validate } from './validation.js'
import { mostrarFormulario, añadirAlHistorial } from './rendering.js'

export function handleCalcular() {
    const input = document.getElementById('dni-input')
    const boton = document.getElementById('calcular')
    const valor = input.value

    if (!validate(valor)) {
        añadirAlHistorial('El dato introducido es incorrecto')
    } else {
        const letra = checker(Number(valor))
        añadirAlHistorial(`${valor.padStart(8, '0')} → ${letra}`)
    }

    input.value = ''
    boton.disabled = true
    setTimeout(() => { boton.disabled = false }, 1000)
}

export function handleIniciar() {
    mostrarFormulario()
    document.getElementById('calcular').addEventListener('click', handleCalcular)
    document.getElementById('dni-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleCalcular()
    })
}
