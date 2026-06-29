// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { handleIniciar } from './controller.js'

describe('handleIniciar', () => {
    beforeEach(() => {
        document.body.innerHTML = '<button id="iniciar">Iniciar</button>'
        vi.stubGlobal('alert', vi.fn())
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('el botón desaparece al hacer click en iniciar', () => {
        vi.stubGlobal('prompt', vi.fn().mockReturnValue(null))
        handleIniciar()
        expect(document.getElementById('iniciar')).toBeNull()
    })

    it('termina cuando el usuario pulsa cancelar', () => {
        const mockPrompt = vi.fn().mockReturnValue(null)
        vi.stubGlobal('prompt', mockPrompt)
        handleIniciar()
        expect(mockPrompt).toHaveBeenCalledTimes(1)
        expect(alert).not.toHaveBeenCalled()
    })

    it('repite el proceso hasta que el usuario cancela', () => {
        const mockPrompt = vi.fn()
            .mockReturnValueOnce('12345678')
            .mockReturnValueOnce('0')
            .mockReturnValueOnce(null)
        vi.stubGlobal('prompt', mockPrompt)
        handleIniciar()
        expect(mockPrompt).toHaveBeenCalledTimes(3)
        expect(alert).toHaveBeenCalledTimes(2)
    })

    it('muestra error para dato no numérico', () => {
        vi.stubGlobal('prompt', vi.fn()
            .mockReturnValueOnce('abc')
            .mockReturnValueOnce(null))
        handleIniciar()
        expect(alert).toHaveBeenCalledWith('El dato introducido es incorrecto')
    })

    it('muestra error para número mayor que 99999999', () => {
        vi.stubGlobal('prompt', vi.fn()
            .mockReturnValueOnce('100000000')
            .mockReturnValueOnce(null))
        handleIniciar()
        expect(alert).toHaveBeenCalledWith('El dato introducido es incorrecto')
    })

    it('muestra error para número menor que 0', () => {
        vi.stubGlobal('prompt', vi.fn()
            .mockReturnValueOnce('-1')
            .mockReturnValueOnce(null))
        handleIniciar()
        expect(alert).toHaveBeenCalledWith('El dato introducido es incorrecto')
    })

    it('muestra la letra correcta para un DNI válido', () => {
        vi.stubGlobal('prompt', vi.fn()
            .mockReturnValueOnce('12345678')
            .mockReturnValueOnce(null))
        handleIniciar()
        expect(alert).toHaveBeenCalledWith('La letra de tu DNI es: Z')
    })
})
