(r = function (n = 3) {
    console.log(n);
})();
r(4);

const t = (function () {
    return function( num = 3) {
        console.log(num);
    }
})();

t(65456);

const sum = (function () {
    return function (...array) {
        return array.reduce((a, b) => a + b, 0);
    }
})();

console.log(sum(1, 2, 2,  3, 4, 5, 783));

function add(...arr) {
    const e = 4;
    console.log(arr.reduce((a, b) => a + b, 0));
}

add(1, 2, 3, 4);

const fg = exe => `i am ${exe}`;

console.log(fg('lokesh'));


let h = {
    x: 100,
    y: 11,
    z: 2
};

const hall = (function () {
    return function hall({x: a, y}) {
        return (a + y);
    }
})();

console.log(hall(h));


const e = (s, r) => ({s, r});
console.log(e(1, 2));

const yh = {
    x: 1,
    y: 2,
    z: 3,
    move(x, y, z) {
        this.x += x;
        this.y += y;
        this.z += z;
    }
}

console.log(yh);
yh.move(1, 1, 1);
console.log(yh)

console.log((3));


let make  = function(x) {
    this.x = x;
}

let c = new make(1);
console.log(c);


class lok {
    constructor(x) {
        this.x = x;
    }
    work(g) {
        this.x += g
    }
}
p = new lok(10);
p.work(2);
k = new lok(16);
console.log(p.x, k);


function makeclass() {
    class hockey {
        constructor(player){
            this._player = player;
        }
        get player(){
            return this._player;
        }
        set player(p){
            this._player = p;
        }
    }
    return hockey
}

const hockey = makeclass();
const example = new hockey('loki');
console.log(example);
example.player = 'ty';
console.log(example);
