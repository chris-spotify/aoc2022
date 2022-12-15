const input = [[[1384790, 3850432], [2674241, 4192888]], [[2825953, 288046], [2154954, -342775]], [[3553843, 2822363], [3444765, 2347460]], [[2495377, 3130491], [2761496, 2831113]], [[1329263, 1778185], [2729595, 2000000]], [[2882039, 2206085], [2729595, 2000000]], [[3903141, 2510440], [4006219, 3011198]], [[3403454, 3996578], [3754119, 4475047]], [[3630476, 1048796], [3444765, 2347460]], [[16252, 2089672], [-276514, 2995794]], [[428672, 1150723], [-281319, 668868]], [[2939101, 3624676], [2674241, 4192888]], [[3166958, 2890076], [2761496, 2831113]], [[3758241, 3546895], [4006219, 3011198]], [[218942, 3011070], [-276514, 2995794]], [[52656, 3484635], [-276514, 2995794]], [[2057106, 405314], [2154954, -342775]], [[1966905, 2495701], [2761496, 2831113]], [[511976, 2696731], [-276514, 2995794]], [[3094465, 2478570], [3444765, 2347460]], [[806671, 228252], [-281319, 668868]], [[3011731, 1976307], [2729595, 2000000]]];

// const input = [[[2, 18], [-2, 15]], [[9, 16], [10, 16]], [[13, 2], [15, 3]], [[12, 14], [10, 16]], [[10, 20], [10, 16]], [[14, 17], [10, 16]], [[8, 7], [2, 10]], [[2, 0], [2, 10]], [[0, 11], [2, 10]], [[20, 14], [25, 17]], [[17, 20], [21, 22]], [[16, 7], [15, 3]], [[14, 3], [15, 3]], [[20, 1], [15, 3]]];

const map = {};
const sensors = {};

const getDist = (x1, y1, x2, y2) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

const drawMap = () => {
    const lines = [];
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const coord of Object.keys(map)) {
        const c = coord.split(',').map(c => parseInt(c, 10));
        if (c[0] < minX) minX = c[0];
        if (c[0] > maxX) maxX = c[0];
        if (c[1] < minY) minY = c[1];
        if (c[1] > maxY) maxY = c[1];
    }

    for (let i = minX; i <= maxX; i++) {
        let line = '';
        for (let j = minY; j <= maxY; j++) {
            line += map[`${i},${j}`] ?? '.';
        }
        lines.push(line);
    }

    for (const line of lines) console.log(line);
};

// uncomment for full map draw (test input only)
// for (const pair of input) {
//     const sensor = pair[0];
//     const beacon = pair[1];
//     map[`${sensor[0]},${sensor[1]}`] = 'S';
//     map[`${beacon[0]},${beacon[1]}`] = 'B';
//     const distance = getDist(...sensor, ...beacon);
//     for (let i = 0; i <= distance; i++) {
//         const y1 = sensor[1] - i;
//         const y2 = sensor[1] + i;
//         for (let j = distance - i; j >= 0; j--) {
//             const x1 = sensor[0] - j;
//             const x2 = sensor[0] + j;
//             if (!map[`${x1},${y1}`]) map[`${x1},${y1}`] = '#';
//             if (!map[`${x2},${y2}`]) map[`${x2},${y2}`] = '#';
//             if (!map[`${x1},${y2}`]) map[`${x1},${y2}`] = '#';
//             if (!map[`${x2},${y1}`]) map[`${x2},${y1}`] = '#';
//         }
//     }
// }

for (const pair of input) {
    const sensor = pair[0];
    const beacon = pair[1];
    map[`${sensor[0]},${sensor[1]}`] = 'S';
    map[`${beacon[0]},${beacon[1]}`] = 'B';
    const distance = getDist(...sensor, ...beacon);
    sensors[`${sensor[0]},${sensor[1]}`] = distance;
}

const findX2 = (distance, x1, y1, y2) => {
    return (distance - Math.abs(y1 - y2)) + x1;
}

let cannotContain = {};
for (const [coords, dist] of Object.entries(sensors)) {
    const fixedY = 2000000;
    const c = coords.split(',').map(c => parseInt(c, 10));
    const x2 = findX2(dist, ...c, fixedY);
    if (getDist(...c, x2, fixedY) === dist) {
        const diff = x2 - c[0];
        if (diff > 0) {
            for (let i = 0; i < diff * 2 + 1; i++) {
                if (!map[`${x2 - i},${fixedY}`]) cannotContain[`${x2 - i},${fixedY}`] = 1;
            }
        } else {
            for (let i = 0; i > diff * 2 + 1; i--) {
                if (!map[`${x2 - i},${fixedY}`]) cannotContain[`${x2 - i},${fixedY}`] = 1;
            }
        }
    }
}


console.log(Object.keys(cannotContain).length);
// drawMap();
