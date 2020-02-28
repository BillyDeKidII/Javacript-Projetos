export function soma(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mult(a, b) {
    return a * b;
}

export function centuryFromYear(year) {
    const century = 100;
    var division = year / century;
    var rest = year % century;
    if (rest == 0) {
        return division;
    } else {
        var integer = parseInt(division);
        return integer + 1;
    }
}