const input = [['a','b','a','a','a','a','a','c','a','a','a','a','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a'],['a','b','a','a','a','a','a','c','a','a','a','a','c','c','c','c','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a'],['a','b','a','a','a','c','c','c','a','a','a','a','c','c','c','c','a','a','a','a','a','a','a','a','a','a','a','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a'],['a','b','a','a','a','a','c','c','c','a','a','c','c','c','c','c','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a'],['a','b','a','c','a','a','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a'],['a','b','c','c','c','a','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a','a','c','c','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','l','l','l','c','c','c','c','c','a','c','c','c','c','c','c','c','c','c','c','c','a','a','c'],['a','b','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','l','l','l','l','l','l','l','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c'],['a','b','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','k','k','l','l','l','l','l','l','l','c','c','c','c','c','c','c','c','c','a','a','c','c','c','c','c','c'],['a','b','a','a','a','c','c','c','c','c','c','c','c','c','c','c','a','c','c','c','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','k','k','k','l','p','p','p','l','l','l','l','c','c','d','d','a','a','a','c','a','a','c','c','c','c','c','c'],['a','b','a','a','a','c','c','c','a','a','a','c','c','c','c','c','a','a','c','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','k','k','k','k','p','p','p','p','p','l','l','l','l','c','d','d','d','d','a','a','a','a','c','c','c','c','c','c'],['a','b','a','a','c','c','c','a','a','a','a','c','c','c','c','c','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','k','k','k','k','p','p','p','p','p','p','p','l','l','m','m','d','d','d','d','d','d','a','a','a','a','c','c','c','c'],['a','b','a','a','a','c','c','a','a','a','a','c','c','c','c','c','c','a','a','a','a','a','a','c','a','a','a','c','c','c','c','c','c','c','c','c','c','k','k','k','k','p','p','p','u','u','u','p','p','p','l','m','m','m','m','d','d','d','d','d','a','a','a','c','c','c','c'],['a','b','a','a','a','c','c','c','a','a','a','c','c','c','c','a','a','a','a','a','a','a','a','c','a','a','a','a','c','c','c','c','c','c','c','k','k','k','k','k','o','p','p','u','u','u','u','u','p','p','q','m','m','m','m','m','m','d','d','d','d','d','a','c','c','c','c'],['a','b','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a','a','a','c','a','a','a','a','c','c','c','c','c','j','k','k','k','k','k','o','o','p','p','u','u','u','u','u','u','q','q','q','m','m','m','m','m','m','m','d','d','d','d','c','c','c','c'],['a','b','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','c','c','c','c','a','a','a','c','c','c','c','j','j','j','j','k','o','o','o','o','o','o','u','u','u','x','u','u','u','q','q','q','q','q','q','m','m','m','m','m','d','d','e','c','c','c','c'],['a','b','a','c','a','a','c','c','c','c','c','c','c','c','c','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','j','j','j','j','o','o','o','o','o','o','u','u','u','x','x','x','u','v','v','q','q','q','q','q','q','q','m','m','m','e','e','e','c','c','c','c'],['a','b','a','a','a','a','c','c','c','c','c','c','c','a','c','c','c','a','c','c','c','c','c','c','c','c','c','c','c','c','j','j','j','j','o','o','o','t','u','u','u','u','u','u','x','x','x','y','v','v','v','v','v','q','q','q','q','m','m','m','e','e','e','c','c','c','c'],['a','b','a','a','a','a','a','c','c','c','c','c','a','a','a','c','a','a','a','c','c','c','c','c','c','c','c','c','c','c','j','j','j','o','o','o','o','t','t','u','u','u','u','u','x','x','y','y','v','v','v','v','v','v','v','q','q','m','n','n','e','e','e','c','c','c','c'],['a','b','a','a','a','a','a','c','c','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','a','c','c','j','j','j','o','o','o','t','t','t','t','x','x','x','x','x','x','y','y','y','y','y','y','v','v','v','q','q','n','n','n','e','e','e','c','c','c','c'],['a','b','a','a','a','c','c','c','c','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','a','a','c','c','j','j','j','o','o','o','t','t','t','x','x','x','x','x','x','x','y','y','y','y','y','y','v','v','q','q','q','n','n','n','e','e','e','c','c','c','c'],['S','b','c','a','a','c','c','c','c','a','a','a','a','a','a','a','a','a','a','c','c','c','c','a','a','a','a','a','c','a','j','j','j','n','n','n','t','t','t','x','x','x','x','E','z','z','z','y','y','y','y','v','v','v','r','r','q','n','n','n','e','e','c','c','c','c','c'],['a','b','c','c','c','c','c','c','c','a','a','a','a','a','a','a','a','a','a','a','c','c','c','a','a','a','a','a','a','a','a','j','j','j','n','n','n','t','t','t','x','x','x','x','y','y','y','y','y','v','v','v','v','r','r','r','n','n','n','e','e','e','c','c','c','c','c'],['a','b','c','c','c','c','c','c','c','a','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','a','a','a','a','c','c','j','j','j','n','n','n','n','t','t','t','t','x','x','y','y','y','y','y','w','v','v','r','r','r','n','n','n','e','e','e','c','c','c','c','c','c'],['a','b','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a','c','c','a','c','c','c','c','a','a','a','a','a','c','c','c','i','i','i','n','n','n','n','t','t','x','x','y','y','y','y','y','y','y','w','w','r','r','n','n','n','n','e','e','e','c','c','c','c','c','c'],['a','b','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','c','c','c','c','c','c','c','a','a','c','a','a','a','c','c','c','i','i','i','n','n','n','t','t','x','x','y','y','w','w','y','y','y','w','w','r','r','n','n','n','f','f','e','c','c','c','c','c','c','c'],['a','b','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','c','c','c','c','c','c','c','a','c','c','a','a','a','c','c','c','i','i','i','n','n','n','t','t','w','w','w','w','w','w','w','w','w','w','w','r','r','r','n','n','f','f','f','c','c','c','c','c','c','c'],['a','b','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','i','i','i','n','n','n','t','t','w','w','w','w','s','s','w','w','w','w','w','r','r','r','n','n','f','f','f','c','c','c','c','c','c','c'],['a','b','a','a','a','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','i','i','n','n','n','t','t','s','w','w','w','s','s','s','w','w','w','w','r','r','r','o','o','f','f','f','a','c','c','c','c','c','c'],['a','b','a','a','c','c','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','c','c','i','i','n','n','n','t','s','s','s','s','s','s','s','s','s','s','r','r','r','r','o','o','o','f','f','f','a','c','c','c','c','c','c'],['a','b','a','c','c','c','c','a','a','a','a','a','c','c','c','c','c','c','c','a','a','a','c','c','c','c','c','c','c','a','a','a','a','c','i','i','n','n','n','s','s','s','s','s','s','m','m','s','s','s','s','r','r','r','o','o','o','f','f','f','a','c','c','c','c','c','c'],['a','b','a','a','c','a','a','a','a','a','a','a','c','c','c','c','c','c','c','a','a','a','a','c','c','c','c','c','c','a','a','a','a','c','i','i','i','n','m','m','m','s','s','m','m','m','m','m','o','o','s','r','o','o','o','o','o','f','f','a','a','a','a','c','c','c','c'],['a','b','a','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','a','a','a','a','c','c','c','c','c','c','a','a','a','c','c','i','i','i','m','m','m','m','m','m','m','m','m','m','m','o','o','o','o','o','o','o','o','f','f','f','a','a','a','a','c','c','c','c'],['a','b','c','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','i','h','h','m','m','m','m','m','m','m','h','g','g','o','o','o','o','o','o','o','f','f','f','f','a','a','a','c','c','c','c','c'],['a','b','c','c','c','c','c','a','a','a','c','a','c','c','c','c','c','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','h','h','h','h','h','h','h','h','h','h','h','g','g','g','g','g','g','g','g','g','g','f','f','a','a','a','c','c','c','c','c','c'],['a','b','a','c','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','h','h','h','h','h','h','h','h','h','h','g','g','g','g','g','g','g','g','g','g','g','c','a','a','a','c','c','c','c','c','c'],['a','b','a','a','a','c','c','c','c','a','c','c','c','c','c','c','c','c','c','c','a','a','a','a','c','c','c','a','a','c','c','c','c','c','c','c','c','h','h','h','h','h','h','h','a','a','a','a','a','g','g','g','g','g','g','c','c','c','c','c','c','c','c','c','c','c','c'],['a','b','a','a','a','c','c','c','c','a','a','a','c','a','a','a','c','c','c','c','a','a','a','a','c','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','c'],['a','b','a','a','c','c','c','c','c','a','a','a','a','a','a','a','c','c','c','c','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a'],['a','b','a','a','a','c','c','c','c','a','a','a','a','a','a','c','c','c','c','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a'],['a','b','c','c','c','c','c','c','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a'],['a','b','c','c','c','c','c','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','c','a','a','a','a','a','a']];
// const input = [['S','a','b','q','p','o','n','m'],['a','b','c','r','y','x','x','l'],['a','c','c','s','z','E','x','k'],['a','c','c','t','u','v','w','j'],['a','b','d','e','f','g','h','i']];

let starts = []; // array of [x,y] this time...
let endX, endY;

// find start and end
for (let i=0;i<input.length;i++){
    for (let j=0;j<input[i].length;j++){
        const val = input[i][j];
        if (val === 'a' || val === 'S') {
            starts.push([i,j]);
        } else if (val ==='E'){
            endX = i;
            endY = j;
        }
        if (typeof startX !== 'undefined' && typeof endX !== 'undefined') break;
    }
}

const charVal = (input) => {
    let val = input;
    val = (val === 'S') ? 'a' : ((val === 'E') ? 'z' : val);
    val = val.charCodeAt(0);
    return val;
};

const findPath = () => {
    const toVisit = starts.map(s => ({ point: s, steps: 0})); // add all possible starts to toVisit this time
    const visited = {};
    while (toVisit.length){
        const cur = toVisit.shift();
        const [x,y] = cur.point;
        const steps = cur.steps;
        const val = charVal(input[x][y]);
        if (visited[`${x},${y}`]) continue;
        visited[`${x},${y}`] = 1;
        if (x === endX && y === endY) return steps;
        if (x > 0 && charVal(input[x-1][y]) <= val + 1) toVisit.push({ point: [x-1, y], steps: steps + 1 });
        if (x < input.length - 1 && charVal(input[x+1][y]) <= val + 1) toVisit.push({ point: [x+1, y], steps: steps + 1 });
        if (y > 0 && charVal(input[x][y-1]) <= val + 1) toVisit.push({ point: [x, y-1], steps: steps + 1 });
        if (y < input[0].length - 1 && charVal(input[x][y+1]) <= val + 1) toVisit.push({ point: [x, y+1], steps: steps + 1});
    }
};

console.log(findPath());