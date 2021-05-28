function getSecondHighest(arr) {
    let highest = -Infinity, secondHighest = -Infinity;

    for (let num of arr) {
        if (num > highest) {
            if (highest > secondHighest) secondHighest = highest;
            highest = num;
            continue;
        }
        if (num > secondHighest) {
            secondHighest = num;
        }
    }

    return secondHighest === -Infinity ? null : secondHighest;
}

const arr = [-1, -Infinity];

console.log(getSecondHighest(arr));
