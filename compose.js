
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

function pipe2(...fns) {
    return function(x) {
        return fns.reduce((accum, func) => func(accum), x);
    }
}

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

function compose2(...fns) {
    return function (x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

const trace = label => value => {
    console.log(`${label}: ${value}`);
    return value;
};

function trace2(label) {
    return function (value) {
        console.log(`${label}: ${value}`);
        return value;
    };
}

function g(n) {
    return n + 1;
}

function f(n) {
    return n * 2;
}

const h = pipe(
    g,
    trace('after g'),
    f,
    trace('after f'),
);

h(20);  // => 42

