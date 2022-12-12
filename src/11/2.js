let input = [
    {
        items: [65, 78],
        operation: (old) => old * 3,
        test: (item) => (item % 5 === 0) ? 2 : 3,
        divisor: 5,
    },
    {
        items: [54, 78, 86, 79, 73, 64, 85, 88],
        operation: (old) => old + 8,
        test: (item) => (item % 11 === 0) ? 4 : 7,
        divisor: 11,
    },
    {
        items: [69, 97, 77, 88, 87],
        operation: (old) => old + 2,
        test: (item) => (item % 2 === 0) ? 5 : 3,
        divisor: 2,
    },
    {
        items: [99],
        operation: (old) => old + 4,
        test: (item) => (item % 13 === 0) ? 1 : 5,
        divisor: 13,
    },
    {
        items: [60, 57, 52],
        operation: (old) => old * 19,
        test: (item) => (item % 7 === 0) ? 7 : 6,
        divisor: 7,
    },
    {
        items: [91, 82, 85, 73, 84, 53],
        operation: (old) => old + 5,
        test: (item) => (item % 3 === 0) ? 4 : 1,
        divisor: 3,
    },
    {
        items: [88, 74, 68, 56],
        operation: (old) => old * old,
        test: (item) => (item % 17 === 0) ? 0 : 2,
        divisor: 17,
    },
    {
        items: [54, 82, 72, 71, 53, 99, 67],
        operation: (old) => old + 1,
        test: (item) => (item % 19 === 0) ? 6 : 0,
        divisor: 19,
    }
];

// let input = [
//     {
//         items: [79, 98],
//         operation: (old) => old * 19,
//         test: (item) => (item % 23 === 0) ? 2 : 3,
//         divisor: 23,
//     },
//     {
//         items: [54, 65, 75, 74],
//         operation: (old) => old + 6,
//         test: (item) => (item % 19 === 0) ? 2 : 0,
//         divisor: 19,
//     },
//     {
//         items: [79, 60, 97],
//         operation: (old) => old * old,
//         test: (item) => (item % 13 === 0) ? 1 : 3,
//         divisor: 13,
//     },
//     {
//         items: [74],
//         operation: (old) => old + 3,
//         test: (item) => (item % 17 === 0) ? 0 : 1,
//         divisor: 17,
//     }
// ];

let monkeys = [];
let LCMM;

class Monkey {
    constructor(items, operation, test, divisor){
        this.items = [...items];
        this.operation = operation;
        this.test = test;
        this.inspected = 0;
        this.divisor = divisor;
    }

    runRound(){
        while (this.items.length){
            this.inspected++;
            let worry = this.items.shift();
            worry = this.operation(worry);
            worry %= LCMM; // mod all monkeronis by the LCM of their test divisors
            const destination = this.test(worry);
            monkeys[destination].items.push(worry);
        }
    }
}

for (const m of input){
    monkeys.push(new Monkey(m.items,m.operation,m.test, m.divisor));
}

// least-common monkey multiple
LCMM = monkeys.reduce((acc, m) => acc *= m.divisor, 1);

for (let round=1;round<=10000;round++){
    for (const m of monkeys) m.runRound();
}

monkeys.sort((a,b) => b.inspected-a.inspected);

console.log(monkeys[0].inspected * monkeys[1].inspected);