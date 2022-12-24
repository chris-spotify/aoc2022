const input = [['#', '.', '#', '#', '#', '#', '#', '#'], ['#', '>', '>', '.', '<', '^', '<', '#'], ['#', '.', '<', '.', '.', '<', '<', '#'], ['#', '>', 'v', '.', '>', '<', '>', '#'], ['#', '<', '^', 'v', '^', '^', '>', '#'], ['#', '#', '#', '#', '#', '#', '.', '#']];

let startX = input[0].findIndex(e => e === '.');
let startY = 0;
let goalX = input[input.length - 1].findIndex(e => e === '.');
let goalY = input.length - 1;

const buildMap = () => {
    const map = {};
    const blizzards = [];
    const blizzardObjects = ['^', 'v', '>', '<'];
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            const c = input[y][x];
            if (blizzardObjects.includes(c)) {
                map[`${x},${y}`] = c;
                blizzards.push({
                    x,
                    y,
                    type: c
                });
            }
            if (c === '#') map[`${x},${y}`] = c;
        }
    }
    return {
        map,
        blizzards
    };
};

const eligibleMoves = (state) => {
    const { x, y, map } = state;
    const eligible = [];
    if (x > 1 && !map[`${x - 1},${y}`]) eligible.push([x - 1, y]);
    if (x < input[0].length - 2 && !map[`${x + 1},${y}`]) eligible.push([x + 1, y]);
    if ((y > 1 || (y === 1 && x === startX)) && !map[`${x},${y - 1}`]) eligible.push([x, y - 1]);
    if ((y < input.length - 2 || (y === input.length - 2 && x === goalX)) && !map[`${x},${y + 1}`]) eligible.push([x, y + 1]);
    return eligible;
};

const cloneState = (state) => {
    const newState = {
        x: state.x,
        y: state.y,
        moves: state.moves,
        map: { ...state.map },
        blizzards: [...blizzards],
    };
    return newState;
};

const drawMap = (state) => {
    const { x: pX, y: pY, map } = state;
    const lines = [];
    for (let y = 0; y < input.length; y++) {
        let line = '';
        for (let x = 0; x < input[y].length; x++) {
            if (pX === x && pY === y) {
                line += 'X';
            } else {
                line += (map[`${x},${y}`]) ? map[`${x},${y}`] : '.';
            }
        }
        lines.push(line);
    }
    console.log('\n\n');
    for (const line of lines) console.log(line);
};

const moveBlizzards = (state) => {
    const { map, blizzards } = state;

    // clear existing blizzards
    const blizzardObjects = ['^', 'v', '<', '>'];
    for (const [k, v] of Object.entries(map)) {
        if (blizzardObjects.includes(v)) delete map[k];
    }

    // iterate over blizzards
    for (const b of blizzards) {
        const { x, y, type } = b;
        if (type === '^') {
            if ((y > 1) || (y === 1 && x === startX)) {
                b.y--;
                map[`${x},${b.y}`] = type;
            } else {
                b.y = (x === goalX) ? input.length - 1 : input.length - 2;
                map[`${x},${b.y}`] = type;
            }
        } else if (type === 'v') {
            if ((y < input.length - 2) || (y === input.length - 2 && x === goalX)) {
                b.y++;
                map[`${x},${b.y}`] = type;
            } else {
                b.y = (x === startX) ? 0 : 1;
                map[`${x},${b.y}`] = type;
            }
        } else if (type === '<') {
            if (x > 1) {
                b.x--;
                map[`${b.x},${y}`] = type;
            } else {
                b.x = input[0].length - 2;
                map[`${b.x},${y}`] = type;
            }
        } else {
            if (x < input[0].length - 2) {
                b.x++;
                map[`${b.x},${y}`] = type;
            } else {
                b.x = 1;
                map[`${b.x},${y}`] = type;
            }
        }
    }
};

const leastMoves = (map, blizzards) => {
    const stack = [
        {
            x: startX,
            y: startY,
            moves: 0,
            map: { ...map },
            blizzards: [...blizzards],
        }
    ];
    let bestMinutes = Infinity;
    while (stack.length) {
        // console.log(stack.length);
        const state = stack.shift();
        if (state.x === goalX && state.y === goalY && state.moves < bestMinutes) {
            drawMap(state);
            bestMinutes = state.moves;
            continue;
        }
        if (state.moves > bestMinutes) continue;
        moveBlizzards(state);
        const eligible = eligibleMoves(state);
        for (const m of eligible) {
            const newState = cloneState(state);
            newState.moves++;
            newState.x = m[0];
            newState.y = m[1];
            stack.push(newState);
        }
        // wait state
        state.moves++;
        stack.push(state);
    }
    return bestMinutes;
};

const { map, blizzards } = buildMap();
console.log(leastMoves(map, blizzards));
