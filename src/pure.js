let x = 2
const x1 = () => {
  return x += 1
};
const x2 = () => (x *= 2);

x1();
x2();
console.log("first", x); // 6

let y = 2
const y1 = () => y += 1;
const y2 = () => y *= 2;
y2();
y1();
console.log("second",y); // 5

let xy = 2
const xy1 = x => x + 1
const xy2 = x => x * 2

console.log("pure third",xy1(xy2(xy))); // 5

xy1(xy);
xy2(xy);
console.log("pure fourth", xy1(xy2(xy))); // 5