let Student = {
    id: 1,
    name: "priya",
    age: 21
};
console.log(Student);

let givenName = prompt("enter your name");
console.log(givenName);

let age = 18;
if (age < 18) {
    console.log("not eligile");
} else {
    console.log("eligible");

}

for (let i = 1; i <= 10; i++) {
    console.log(i);

}
for (let i = 0; i < Number.length; i++) {
    const abs = Number[i];
    console.log(abs);

}
let addar;
if (addar < 12 || addar > 12) {
    console.log("addar shuld be 12 diditas");

}
function f(num1, num2) {
    let c = num1 + num2;
    return c;
}
let res = f(10, 20);
console.log(res);
for (let index = 1; index <= 5; index++) {

    console.log(index);

}

function colorchange() {
    let change=document.getElementById('change').value;
    document.body.style.backgroundColor=change;
    
}


