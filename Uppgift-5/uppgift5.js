const numbers = [1, 2, 3, 4, 5];

function findNumber(numbers, searchNum) {
    const returnNum = numbers.find((element) => element > searchNum);

    return returnNum
}