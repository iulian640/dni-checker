import { createButton, createForm } from './htmlcomponents.js'

const boton = createButton()
document.body.appendChild(boton)

export function mostrarFormulario() {
    document.getElementById('iniciar').remove()
    document.body.appendChild(createForm())
}

export function añadirAlHistorial(texto) {
    const li = document.createElement('li')
    li.textContent = texto
    document.getElementById('historial').appendChild(li)
}
