export function validate(valor) {
    if (isNaN(valor)) {
        return false
    }
    else if (valor >= 0 && valor <= 99999999) {
        return true
    }
    return false
}