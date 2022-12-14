let input = [[2,1],[1,0],[1,0],[1,0],[2,5],[2,5],[1,0],[1,0],[2,9],[2,-5],[2,1],[2,4],[1,0],[1,0],[1,0],[2,6],[2,-1],[1,0],[2,5],[2,-2],[2,7],[1,0],[2,3],[2,-2],[2,-38],[1,0],[1,0],[2,32],[2,-22],[1,0],[2,2],[2,3],[1,0],[2,2],[2,-2],[2,7],[2,-2],[1,0],[2,3],[2,2],[2,5],[2,2],[2,-5],[2,10],[1,0],[2,3],[1,0],[2,-38],[2,1],[2,27],[1,0],[2,-20],[1,0],[2,2],[2,27],[1,0],[2,-22],[1,0],[1,0],[1,0],[1,0],[2,3],[2,5],[2,2],[2,-11],[2,16],[2,-2],[2,-17],[2,24],[1,0],[1,0],[2,1],[2,-38],[2,15],[2,10],[2,-15],[1,0],[2,2],[2,26],[1,0],[2,-21],[2,19],[2,-33],[2,19],[1,0],[2,-6],[2,9],[2,3],[2,4],[2,-21],[2,4],[2,20],[1,0],[2,3],[2,-38],[2,28],[2,-21],[2,9],[2,-8],[2,2],[2,5],[2,2],[2,-9],[2,14],[2,-2],[2,-5],[2,12],[2,3],[2,-2],[2,2],[2,7],[1,0],[1,0],[2,-27],[2,28],[2,-36],[1,0],[2,1],[2,5],[2,-1],[1,0],[2,6],[2,-1],[2,5],[2,5],[1,0],[1,0],[2,-2],[2,20],[2,-10],[2,-3],[2,1],[2,3],[2,2],[2,4],[2,3],[1,0],[2,-30],[1,0]];

// let input = [[2,15],[2,-11],[2,6],[2,-3],[2,5],[2,-1],[2,-8],[2,13],[2,4],[1,0],[2,-1],[2,5],[2,-1],[2,5],[2,-1],[2,5],[2,-1],[2,5],[2,-1],[2,-35],[2,1],[2,24],[2,-19],[2,1],[2,16],[2,-11],[1,0],[1,0],[2,21],[2,-15],[1,0],[1,0],[2,-3],[2,9],[2,1],[2,-3],[2,8],[2,1],[2,5],[1,0],[1,0],[1,0],[1,0],[1,0],[2,-36],[1,0],[2,1],[2,7],[1,0],[1,0],[1,0],[2,2],[2,6],[1,0],[1,0],[1,0],[1,0],[1,0],[2,1],[1,0],[1,0],[2,7],[2,1],[1,0],[2,-13],[2,13],[2,7],[1,0],[2,1],[2,-33],[1,0],[1,0],[1,0],[2,2],[1,0],[1,0],[1,0],[2,8],[1,0],[2,-1],[2,2],[2,1],[1,0],[2,17],[2,-9],[2,1],[2,1],[2,-3],[2,11],[1,0],[1,0],[2,1],[1,0],[2,1],[1,0],[1,0],[2,-13],[2,-19],[2,1],[2,3],[2,26],[2,-30],[2,12],[2,-1],[2,3],[2,1],[1,0],[1,0],[1,0],[2,-9],[2,18],[2,1],[2,2],[1,0],[1,0],[2,9],[1,0],[1,0],[1,0],[2,-1],[2,2],[2,-37],[2,1],[2,3],[1,0],[2,15],[2,-21],[2,22],[2,-6],[2,1],[1,0],[2,2],[2,1],[1,0],[2,-10],[1,0],[1,0],[2,20],[2,1],[2,2],[2,2],[2,-6],[2,-11],[1,0],[1,0],[1,0]];

let getCurInst = () => {
    return input.splice(0,1)[0];
};

let x = 1;
let cycle = 0;

// initial instruction
let curInst = getCurInst();
let waiting = curInst[0];
let add = curInst[1];
let lines = [];

let drawLines = () => {
    for (const line of lines){
        console.log(line.join(''));
    }    
};


while (input.length || waiting){
    const col = cycle%40;
    const row = Math.floor((cycle%240)/40);
    if (!lines[row]) lines[row] = [];
    if (!lines[row][col]) lines[row][col] = '.';
    if (Math.abs(col - x) <= 1){
        lines[row][col] = '#';
    }
    waiting--;
    if (waiting === 0){
        x += add;
        curInst = getCurInst();
        if (!curInst) break;
        waiting = curInst[0];
        add = curInst[1];
    }
    cycle++;
}

drawLines();

