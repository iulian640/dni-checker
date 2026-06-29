import { describe, it, expect } from 'vitest'
import { validate } from './validation.js'

describe('validate', () => {
    it('no permite número mayores de 99999999 ni menores de 0', () => {
        expect(validate(123456789)).toBe(false)
    })
    it('no permite caracteres que no sean númericos', () => {
        expect(validate("1234567A")).toBe(false)
    })
    it('El número es válido', () => {
        expect(validate(12345678)).toBe(true)
    })
})