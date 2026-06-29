

export function checker(dni) {

    const letraRaw = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    let resto = dni % 23
    let letra = letraRaw[resto]
    return letra
}