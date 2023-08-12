let a = 'abc';
let b = Boolean(a);
console.log(typeof(a) + "\t" + typeof(b));
console.log(a + "\t" + b);
console.log();

let c = '123';
let d = Boolean(c);
console.log(typeof(c) + "\t" + typeof(d));
console.log(c + "\t" + d);
console.log();

let e = '';
let f = Boolean(e);
console.log(typeof(e) + "\t" + typeof(f));
console.log(e + "\t" + f);
console.log();

let g = ' ';
let h = Boolean(g);
console.log(typeof(g) + "\t" + typeof(h));
console.log(g + "\t" + h);
console.log();

let i = 1;
let j = Boolean(i);
console.log(typeof(i) + "\t" + typeof(j));
console.log(i + "\t" + j);
console.log();

let k = 0;
let l = Boolean(k);
console.log(typeof(k) + "\t" + typeof(l));
console.log(k + "\t" + l);
console.log();

let m = null;
let n = Boolean(m);
console.log(typeof(m) + "\t" + typeof(n));
console.log(m + "\t" + n);
console.log();

let o = undefined;
let p = Boolean(o);
console.log(typeof(o) + "\t" + typeof(p));
console.log(o + "\t" + p);
console.log();

let q = NaN;
let r = Boolean(q);
console.log(typeof(q) + "\t" + typeof(r));
console.log(q + "\t" + r);
console.log();

let s = 56.78;
let t = Boolean(s);
console.log(typeof(s) + "\t" + typeof(t));
console.log(s + "\t" + t);
console.log();

let u = -5;
let v = Boolean(u);
console.log(typeof(u) + "\t" + typeof(v));
console.log(u + "\t" + v);
console.log()



let y = new Date();
let z = Boolean(y);
console.log(typeof(y) + "\t" + typeof(z));
console.log(y + "\t" + z);
console.log();


let x1 = Infinity;
let x2 = Boolean(x1);
console.log(typeof(x1) + "\t" + typeof(x2));
console.log(x1 + "\t" + x2);
console.log();

let x3 = -Infinity;
let x4 = Boolean(x3);
console.log(typeof(x3) + "\t" + typeof(x4));
console.log(x3 + "\t" + x4);
console.log();

let x5 = [];
let x6 = Boolean(x5);
console.log(typeof(x5) + "\t" + typeof(x6));
console.log(x5 + "\t" + x6);
console.log();

let x7 = [20];
let x8 = Boolean(x7);
console.log(typeof(x7) + "\t" + typeof(x8));
console.log(x7 + "\t" + x8);
console.log();

let x9 = [20, 30];
let x10 = Boolean(x9);
console.log(typeof(x9) + "\t" + typeof(x10));
console.log(x9 + "\t" + x10);
console.log();

let x11 = ["twenty"];
let x12 = Boolean(x11);
console.log(typeof(x11) + "\t" + typeof(x12));
console.log(x11 + "\t" + x12);
console.log();

let x13 = ["ten", "twenty"];
let x14 = Boolean(x13);
console.log(typeof(x13) + "\t" + typeof(x14));
console.log(x13 + "\t" + x14);
console.log();

let x15 = function(){};
let x16 = Boolean(x15);
console.log(typeof(x15) + "\t" + typeof(x16));
console.log(x15 + "\t" + x16);
console.log();

let x17 = {};
let x18 = Boolean(x17);
console.log(typeof(x17) + "\t" + typeof(x18));
console.log(x17 + "\t" + x18);
console.log();