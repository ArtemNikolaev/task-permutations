function factorial(number) {
    let result = 1;

    while (number > 0) {
        result *= number--;
    }

    return result;
}

function findDenominator(word) {
    // todo: findDenominator
}

export function countWordPermutationsModule(word) {
    const numerator = factorial(word.length);
    const denominator = findDenominator(word);
    return numerator / denominator;
}