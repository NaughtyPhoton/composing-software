const stack = (...items) => ({
    push: item => stack(...items, item),
    pop: () => {
        // create an item list
        const newItems = [...items];

        // remove the last item from the list and assign it to a variable
        const [item] = newItems.splice(-1);

        // return the pair
        return [item, stack(...newItems)];
    },

    // So we can compare stacks in our assert function
    toString: () => `stack(${items.join(',')})`
});

const push = (item, stack) => stack.push(item);
const pop = stack => stack.pop();


const assert = ({given, should, actual, expected}) => {
    const stringify = value => Array.isArray(value) ?
        `[${value.map(stringify).join(',')}]` :
        `${value}`;

    const actualString = stringify(actual);
    const expectedString = stringify(expected);

    if (actualString === expectedString) {
        console.log(`OK:
        given: ${given}
        should: ${should}
        actual: ${actualString}
        expected: ${expectedString}
        `);
    } else {
        throw new Error(`NOT OK:
        given ${given}
        should ${should}
        actual: ${actualString}
        expected: ${expectedString}
        `);
    }
};

const a = 'a';
const b = 'b';

assert({
    given: 'push `a` to the stack and immediately pop from the stack',
    should: 'return a pair of `a` and `stack()`',
    actual: pop(push(a, stack())),
    expected: [a, stack()]
});
assert({
    given: 'push `a` to the stack, then push `b` to the stack, then pop from the stack',
    should: 'return a pair of `b` and `stack(a)`.',
    actual: pop(push(b, push(a, stack()))),
    expected: [b, stack(a)]
});
assert({
    given: 'pop from an empty stack',
    should: 'return a pair of undefined, stack()',
    actual: pop(stack()),
    expected: [undefined, stack()]
});
