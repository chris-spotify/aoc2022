const input = { 'DJ': { rate:0, tunnels: ['ZH', 'AA'] }, 'LP': { rate:0, tunnels: ['AA', 'EE'] }, 'GT': { rate:0, tunnels: ['FJ', 'AW'] }, 'RO': { rate:5, tunnels: ['NO', 'FD', 'QV', 'BV'] }, 'PS': { rate:0, tunnels: ['FY', 'UV'] }, 'QV': { rate:0, tunnels: ['EB', 'RO'] }, 'MV': { rate:0, tunnels: ['FL', 'EB'] }, 'RN': { rate:0, tunnels: ['AW', 'LQ'] }, 'HF': { rate:0, tunnels: ['QN', 'HW'] }, 'PY': { rate:19, tunnels: ['SN'] }, 'AT': { rate:0, tunnels: ['YQ', 'UY'] }, 'UY': { rate:3, tunnels: ['KV', 'ID', 'AT', 'PB', 'PG'] }, 'YI': { rate:0, tunnels: ['FL', 'FD'] }, 'EB': { rate:8, tunnels: ['MV', 'GQ', 'QV'] }, 'ID': { rate:0, tunnels: ['NO', 'UY'] }, 'FY': { rate:15, tunnels: ['LQ', 'PS'] }, 'GQ': { rate:0, tunnels: ['EB', 'KM'] }, 'HW': { rate:0, tunnels: ['FJ', 'HF'] }, 'CQ': { rate:17, tunnels: ['KM', 'GO'] }, 'AW': { rate:20, tunnels: ['RN', 'GT', 'WH', 'MX'] }, 'BV': { rate:0, tunnels: ['RO', 'ZH'] }, 'PB': { rate:0, tunnels: ['UY', 'AA'] }, 'MX': { rate:0, tunnels: ['AW', 'YG'] }, 'DE': { rate:4, tunnels: ['MM', 'PZ', 'PG', 'DS', 'EP'] }, 'AA': { rate:0, tunnels: ['EP', 'PB', 'LP', 'JT', 'DJ'] }, 'QN': { rate:23, tunnels: ['SN', 'HF'] }, 'GO': { rate:0, tunnels: ['CQ', 'MK'] }, 'PZ': { rate:0, tunnels: ['IJ', 'DE'] }, 'PG': { rate:0, tunnels: ['UY', 'DE'] }, 'FL': { rate:18, tunnels: ['MV', 'YI'] }, 'DS': { rate:0, tunnels: ['DE', 'ZH'] }, 'ZH': { rate:11, tunnels: ['YQ', 'BV', 'DJ', 'DS', 'SB'] }, 'KV': { rate:0, tunnels: ['UY', 'IJ'] }, 'UV': { rate:9, tunnels: ['MM', 'PS', 'YG'] }, 'WH': { rate:0, tunnels: ['JT', 'AW'] }, 'FD': { rate:0, tunnels: ['YI', 'RO'] }, 'FJ': { rate:24, tunnels: ['HW', 'GT'] }, 'JT': { rate:0, tunnels: ['AA', 'WH'] }, 'SN': { rate:0, tunnels: ['PY', 'QN'] }, 'KM': { rate:0, tunnels: ['GQ', 'CQ'] }, 'LQ': { rate:0, tunnels: ['RN', 'FY'] }, 'NO': { rate:0, tunnels: ['ID', 'RO'] }, 'SB': { rate:0, tunnels: ['ZH', 'IJ'] }, 'MK': { rate:25, tunnels: ['GO'] }, 'YG': { rate:0, tunnels: ['MX', 'UV'] }, 'IJ': { rate:16, tunnels: ['EE', 'KV', 'PZ', 'SB'] }, 'EP': { rate:0, tunnels: ['AA', 'DE'] }, 'MM': { rate:0, tunnels: ['UV', 'DE'] }, 'YQ': { rate:0, tunnels: ['AT', 'ZH'] }, 'EE': { rate:0, tunnels: ['LP', 'IJ'] } };

// const input = {'AA': { rate: 0, tunnels: ['DD', 'II', 'BB'] },'BB': { rate: 13, tunnels: ['CC', 'AA'] },'CC': { rate: 2, tunnels: ['DD', 'BB'] },'DD': { rate: 20, tunnels: ['CC', 'AA', 'EE'] },'EE': { rate: 3, tunnels: ['FF', 'DD'] },'FF': { rate: 0, tunnels: ['EE', 'GG'] },'GG': { rate: 0, tunnels: ['FF', 'HH'] },'HH': { rate: 22, tunnels: ['GG'] },'II': { rate: 0, tunnels: ['AA', 'JJ'] },'JJ': { rate: 21, tunnels: ['II'] } };

const allKeys = {};
for (const valve of Object.keys(input)){
    allKeys[valve] = Infinity;
}

const distances = {};

// compute min distance from each point to all other points (BFS)
for (const [valve, attr] of Object.entries(input)){
    const stack = [
        {
            valve,
            attr,
            dist: 0,
        }
    ];
    distances[valve] = {...allKeys};
    delete distances[valve][valve]; // don't need to track to ourselves
    seen = {};
    while (stack.length){
        const cur = stack.pop();
        if (cur.valve !== valve){
            if (cur.dist < distances[valve][cur.valve]) distances[valve][cur.valve] = cur.dist;
        }
        for (const next of cur.attr.tunnels){
            if (!seen[next]){
                seen[next] = 1;
                stack.push({
                    valve: next,
                    attr: input[next],
                    dist: cur.dist + 1
                });
            }
        }
    }
}

console.log(distances);

// maximize rate by trying all possible destinations from each valve
let best = 0;
const stack = [
    {
        current: 'AA',
        seen: {},
        rate: 0,
        time: 30,
    },
];

while (stack.length) {
    const cur = stack.pop();
    let foundNext = false;
    for (const tunnel of Object.keys(distances[cur.current]).filter(d => input[d].rate > 0)){
        if (!cur.seen[tunnel] && cur.time - distances[cur.current][tunnel] - 1 >= 0){
            foundNext = true;
            const seenClone = {...cur.seen};
            seenClone[tunnel] = 1;
            const newTime = cur.time - distances[cur.current][tunnel] - 1;
            stack.push({
                current: tunnel,
                seen: seenClone,
                rate: cur.rate + (input[tunnel].rate * newTime),
                time: newTime,
            });
        }
    }
    if (!foundNext){
        if (cur.rate > best) best = cur.rate;
    }
}

console.log(best);