const input = {
    1: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 18 }, geode: { ore: 4, obsidian: 9 } },
    2: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 10 }, geode: { ore: 2, obsidian: 7 } },
    3: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 4, clay: 15 }, geode: { ore: 3, obsidian: 12 } },
    4: { ore: { ore: 3 }, clay: { ore: 4 }, obsidian: { ore: 3, clay: 10 }, geode: { ore: 2, obsidian: 7 } },
    5: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 2, clay: 13 }, geode: { ore: 2, obsidian: 10 } },
    6: { ore: { ore: 3 }, clay: { ore: 3 }, obsidian: { ore: 3, clay: 9 }, geode: { ore: 2, obsidian: 10 } },
    7: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 2, clay: 11 }, geode: { ore: 2, obsidian: 7 } },
    8: { ore: { ore: 2 }, clay: { ore: 3 }, obsidian: { ore: 3, clay: 18 }, geode: { ore: 2, obsidian: 19 } },
    9: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 2, clay: 5 }, geode: { ore: 2, obsidian: 10 } },
    10: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 3, clay: 11 }, geode: { ore: 4, obsidian: 7 } },
    11: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 8 }, geode: { ore: 2, obsidian: 15 } },
    12: { ore: { ore: 3 }, clay: { ore: 4 }, obsidian: { ore: 3, clay: 16 }, geode: { ore: 3, obsidian: 14 } },
    13: { ore: { ore: 2 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 11 }, geode: { ore: 3, obsidian: 8 } },
    14: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 2, clay: 14 }, geode: { ore: 3, obsidian: 17 } },
    15: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 8 }, geode: { ore: 4, obsidian: 14 } },
    16: { ore: { ore: 3 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 8 }, geode: { ore: 2, obsidian: 10 } },
    17: { ore: { ore: 3 }, clay: { ore: 3 }, obsidian: { ore: 2, clay: 15 }, geode: { ore: 3, obsidian: 9 } },
    18: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 4, clay: 18 }, geode: { ore: 3, obsidian: 13 } },
    19: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 3, clay: 7 }, geode: { ore: 4, obsidian: 11 } },
    20: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 3, clay: 20 }, geode: { ore: 2, obsidian: 10 } },
    21: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 4, clay: 8 }, geode: { ore: 3, obsidian: 7 } },
    22: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 7 }, geode: { ore: 2, obsidian: 16 } },
    23: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 4, clay: 5 }, geode: { ore: 3, obsidian: 10 } },
    24: { ore: { ore: 3 }, clay: { ore: 4 }, obsidian: { ore: 4, clay: 19 }, geode: { ore: 4, obsidian: 11 } },
    25: { ore: { ore: 3 }, clay: { ore: 3 }, obsidian: { ore: 3, clay: 15 }, geode: { ore: 2, obsidian: 8 } },
    26: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 2, clay: 18 }, geode: { ore: 4, obsidian: 20 } },
    27: { ore: { ore: 4 }, clay: { ore: 4 }, obsidian: { ore: 3, clay: 14 }, geode: { ore: 4, obsidian: 8 } },
    28: { ore: { ore: 4 }, clay: { ore: 3 }, obsidian: { ore: 2, clay: 14 }, geode: { ore: 2, obsidian: 7 } },
    29: { ore: { ore: 2 }, clay: { ore: 3 }, obsidian: { ore: 3, clay: 13 }, geode: { ore: 3, obsidian: 15 } },
    30: { ore: { ore: 3 }, clay: { ore: 3 }, obsidian: { ore: 2, clay: 16 }, geode: { ore: 2, obsidian: 18 } }
};

// const input = {
//     1: {
//         ore: { ore: 4 },
//         clay: {ore: 2 },
//         obsidian: { ore: 3, clay: 14 },
//         geode: { ore: 2, obsidian: 7 },
//     },
//     2: {
//         ore: { ore: 2 },
//         clay: { ore: 3 },
//         obsidian: { ore: 3, clay: 8 },
//         geode: { ore: 3, obsidian: 12 },
//     }
// };

const greedyOrder = {
    geode: 4,
    obsidian: 3,
    clay: 2,
    ore: 1,
};

const getMaxes = (blueprint) => {
    const result = {ore: -1, clay: -1, obsidian: -1, geode: -1};
    for (const v of Object.values(blueprint)){
        for (const [type, need] of Object.entries(v)){
            if (need > result[type]) result[type] = need;
        }
    }
    return result;
};

const minutesNeeded = (state, blueprint, maxes) => {
    const results = {ore : -1, clay: -1, obsidian: -1, geode: -1};

    for (const key of Object.keys(results)){
        const needs = blueprint[key];
        let minutesNeeded = -Infinity;
        let canBuild = (maxes[key] === -1 || state[key] < maxes[key]);
        for (const [k,need] of Object.entries(needs)){
            if (state[k] === 0 || !canBuild || (state.minutes === 1 && key !== 'geode')) {
                canBuild = false;
                break;
            }
            const mins = (state.materials[k] >= need) ? 0 : Math.ceil((need - state.materials[k])/state[k]);
            minutesNeeded = Math.max(minutesNeeded, mins);
        }
        if (canBuild) results[key] = minutesNeeded;
    }
    return results;
};

const buildRobot = (robot, state, blueprint) => {
    const needs = blueprint[robot];
    for (const [k,v] of Object.entries(needs)){
        state.materials[k] -= v;
    }
    state[robot]++;
};

const addMaterials = (state, minutes) => {
    for (const [key,value] of Object.entries(state)){
        if (key !== 'materials' && key !== 'minutes'){
            state.materials[key] += value*minutes;
        }
    }
};

const cloneState = (state) => {
    const newState = {};
    for (const [key,value] of Object.entries(state)) {
        if (key !== 'materials'){
            newState[key] = value;
        } else {
            newState.materials = {};
            for (const [k,v] of Object.entries(value)){
                newState.materials[k] = v;
            }
        }
    }
    return newState;
}

const makeHash = (state) => {
    let hash = '';
    for (const [key,value] of Object.entries(state)) {
        if (key !== 'materials' && key !== 'minutes'){
            hash += `${value},`;
        }
    }
    for (const value of Object.values(state.materials)){
        hash += `${value},`;
    }
    return hash;
};

const simulate = (blueprint, startMinutes) => {
    let mostGeodes = 0;
    const stack = [
        {
            minutes: startMinutes,
            ore: 1,
            clay: 0,
            obsidian: 0,
            geode: 0,
            materials: {
                ore: 0,
                clay: 0,
                obsidian: 0,
                geode: 0,
            }
        }
    ];

    const seen = {};
    const mostGeodesMinute = {};
    const maxes = getMaxes(blueprint);

    while (stack.length){
        const state = stack.shift();
        // console.log(stack.length);
        if (state.materials.geode > mostGeodes) mostGeodes = state.materials.geode;
        if (state.materials.geode+2 < mostGeodesMinute[state.minutes]) continue; // trying this on for size
        if (state.minutes === 0) continue;

        // you can do any of 1) build ore, 2) build clay, 3) build obsidian, 4) build geode, or 5) do nothing
        const minutes = minutesNeeded(state, blueprint, maxes);

        // special case for an immediately buildable geode
        if (minutes.geode === 0){
            const newState = cloneState(state);
            addMaterials(newState, 1);
            buildRobot('geode', newState, blueprint);
            newState.minutes--;
            const newHash = makeHash(newState);
            if (!seen[newHash]) stack.push(newState);
            seen[newHash] = 1;
            if (!mostGeodesMinute[newState.minutes] || mostGeodesMinute[newState.minutes] < newState.materials.geode) mostGeodesMinute[newState.minutes] = newState.materials.geode;
        } else {
            // build everything you can in new states
            for (const [robot, minute] of Object.entries(minutes)){
                if (minute > -1 && state.minutes - (minute + 1) > 0){ // not worth building if we only have 0 minutes left
                    const newState = cloneState(state);
                    addMaterials(newState, minute+1); // simulate required minutes before build
                    buildRobot(robot, newState, blueprint);
                    newState.minutes -= minute + 1;
                    const newHash = makeHash(newState);
                    if (!seen[newHash]) stack.push(newState);
                    seen[newHash] = 1;
                    if (!mostGeodesMinute[newState.minutes] || mostGeodesMinute[newState.minutes] < newState.materials.geode) mostGeodesMinute[newState.minutes] = newState.materials.geode;
                }
            }
        }
        // our "nothing" state is just 1 minute without building
        addMaterials(state, 1);
        state.minutes--;
        const hash = makeHash(state);
        if (!seen[hash]) stack.push(state);
        seen[hash] = 1;
        if (!mostGeodesMinute[state.minutes] || mostGeodesMinute[state.minutes] < state.materials.geode) mostGeodesMinute[state.minutes] = state.materials.geode;
    }
    return mostGeodes;
};

let qualitySum = 0;
for (let i=1;i<=30;i++) {
    const sim = simulate(input[i],24);
    qualitySum += (sim * i);
    console.log(sim);
}

console.log(qualitySum);