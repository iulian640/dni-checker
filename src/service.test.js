import { describe, it, expect } from 'vitest'
import { checker } from './service.js'

describe('checker', () => {
    it('devuelve la letra correcta para un DNI válido', () => {
        expect(checker(12345678)).toBe('Z')
    })
})