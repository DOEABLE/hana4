"use strict";
const myName = 'dohee';
console.log("hello", `${myName}`);
const myAge = 33;
console.log(`${myAge} years old!`);
/* globalThis(전역에 name이 있다.) */
let x;
x = 1;
console.log("🚀  x:", x);
x = 'abc';
console.log("🚀 ~ x:", x);
const len = x.length; //length가 number기 때문에 x.length는 number type으로 추론됨.(함수로 불릴 수 없음.)
//---------------------------
let y; //undefined 도 type임. undefined주고 싶으면 |타입선언 해줘야함.(Annotation)
console.log("🚀 ~ y:", y); //undefined로 초기화 됨.
//---------------------------
let john = {
    firstName: "John",
    lastName: "ahn"
}; //이 심볼들도 다 객체타입까지 적어서 등록해놓는다.
let hong; //User type 
const something = ({ id, name, age, address, }) => {
    // Do something...
    hong = {
        id,
        name,
        age,
        address,
    };
    /* 위의 hong은 any type이었는데 console 찍으면 type check 가 되어있음 */
    console.log(hong);
};
