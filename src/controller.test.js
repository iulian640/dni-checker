// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { handleIniciar, handleCalcular } from './controller.js'

describe('handleIniciar', () => {
    beforeEach(() => {
        document.body.innerHTML = '<button id="iniciar">Iniciar</button>'
    })

    it('el botón iniciar desaparece', () => {
        handleIniciar()
        expect(document.getElementById('iniciar')).toBeNull()
    })

    it('aparece el input de DNI', () => {
        handleIniciar()
        expect(document.getElementById('dni-input')).not.toBeNull()
    })

    it('aparece el botón calcular', () => {
        handleIniciar()
        expect(document.getElementById('calcular')).not.toBeNull()
    })
})

describe('handleCalcular', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input id="dni-input" />
            <button id="calcular">Calcular</button>
            <ul id="historial"></ul>
        `
    })

    it('muestra la letra correcta para un DNI válido', () => {
        document.getElementById('dni-input').value = '12345678'
        handleCalcular()
        expect(document.getElementById('historial').textContent).toContain('12345678 → Z')
    })

    it('muestra error para dato no numérico', () => {
        document.getElementById('dni-input').value = 'abc'
        handleCalcular()
        expect(document.getElementById('historial').textContent).toContain('El dato introducido es incorrecto')
    })

    it('muestra error para número mayor que 99999999', () => {
        document.getElementById('dni-input').value = '100000000'
        handleCalcular()
        expect(document.getElementById('historial').textContent).toContain('El dato introducido es incorrecto')
    })

    it('muestra error para número menor que 0', () => {
        document.getElementById('dni-input').value = '-1'
        handleCalcular()
        expect(document.getElementById('historial').textContent).toContain('El dato introducido es incorrecto')
    })

    it('vacía el input después de calcular', () => {
        document.getElementById('dni-input').value = '12345678'
        handleCalcular()
        expect(document.getElementById('dni-input').value).toBe('')
    })

    it('deshabilita el botón después de calcular', () => {
        document.getElementById('dni-input').value = '12345678'
        handleCalcular()
        expect(document.getElementById('calcular').disabled).toBe(true)
    })

    it('acumula varios resultados en el historial', () => {
        document.getElementById('dni-input').value = '12345678'
        handleCalcular()
        document.getElementById('calcular').disabled = false
        document.getElementById('dni-input').value = '0'
        handleCalcular()
        expect(document.getElementById('historial').children.length).toBe(2)
    })
})
