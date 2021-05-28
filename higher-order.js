const reduce = (reducer, initial, arr) => {
    let acc = initial;
    for (let i = 0, {length} = arr; i < length; i++) {
        acc = reducer(acc, arr[i]);
    }
    return acc;
};
// console.log(reduce((acc, curr) => acc + curr, 0, [1, 2, 3]));//6

const filter = (
    fn, arr
) => reduce((acc, curr) => fn(curr) ?
    acc.concat([curr]) :
    acc, [], arr
);

const censor = words => filter(word => word.length !== 4, words);

const startsWithS = words => filter(word => word.startsWith('s'), words);

const addAndIncrement = a => {
    let inc = 0;
    return b => a + b + inc++;
};

const addTo2 = addAndIncrement(2);

console.log(addTo2(2));
console.log(addTo2(10));
console.log(addTo2(20));
console.log(addTo2(20));
console.log(addTo2(20));
