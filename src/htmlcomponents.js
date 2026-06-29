export function createButton() {
    const button = document.createElement('button')
    button.id = 'iniciar'
    button.textContent = 'Iniciar'
    return button
}

export function createForm() {
    const container = document.createElement('div')

    const label = document.createElement('label')
    label.textContent = 'Introduce tu DNI'
    label.htmlFor = 'dni-input'

    const input = document.createElement('input')
    input.id = 'dni-input'
    input.type = 'text'
    input.placeholder = 'DNI'

    const button = document.createElement('button')
    button.id = 'calcular'
    button.textContent = 'Calcular'

    const historial = document.createElement('ul')
    historial.id = 'historial'

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(button)
    container.appendChild(historial)

    return container
}