const myName: string = 'dohee';
console.log("hello", `${myName}`)
const myAge: number = 33;
console.log(`${myAge} years old!`);
/* globalThis(전역에 name이 있다.) */

let x :number | string ;  
x = 1;
console.log("🚀  x:", x)
x= 'abc';
console.log("🚀 ~ x:", x)


const len = x.length;       //length가 number기 때문에 x.length는 number type으로 추론됨.(함수로 불릴 수 없음.)

//---------------------------
let y: number | undefined;          //undefined 도 type임. undefined주고 싶으면 |타입선언 해줘야함.(Annotation)
console.log("🚀 ~ y:", y)           //undefined로 초기화 됨.


//---------------------------
let john = {
    firstName : "John",
    lastName : "ahn"
 };//이 심볼들도 다 객체타입까지 적어서 등록해놓는다.
 /* error john.middleName; middleName은 선언되지 않았어.*/



//User는 type일 뿐, 하지만 js에는 이런 문법이 없다! -> typescript compile시에만 쓰고 js변환시엔 없어지는 구문.(hello.js에서는 사라져 있다.)
type User = {
    id: number;
    name: string;
    age: number;
    address: string;
}
//아래처럼 interface로도 바꿀 수 있어. 
/* interface User {
    id: number;
    name: string;
    age: number;
    address: string;
interface는 class와 동급, class는 js에서 생성자 '함수'
} */

 let hong: User;    //User type(type alias 즉, type에 이름 부여 type이 복사되어 User에 박히는 개념) 

 //호출할때 type check해야함.(User부여)
 const something = ({ id, name, age, address}: User) => {
    hong = {
        id, 
        name, 
        age, 
        address, 
    };
    /* 위의 hong은 any type이었는데 console 찍으면 type check 가 되어있음 */
    console.log(hong);   
 };
 


 //P.----------------------------
 const sltr = 'LITERAL';// strltr은 "A literal type"
 const nltr = 100;
 let literal: 'LITERAL';
 literal = sltr;
 /* literal = 'bbb'//안됨 A만들어갈 수 있음. */
 let str: string;
 /* string: string, stringTempliate, stringMap */
 str = 'xxxx'
 str = sltr;

 let grade: 'S'|'A'|'B'|'C';    //string literal union type
 grade = 'C'


 //P.----------------------------
 type Member = {
    id: string,
    name: string,
    addr: string,
    discountRate: number;  //?: 필수값은 아님.
 };
 type Guest = {
    id: number,
    name: string,
    age: number,
 };
 
 type Customer= Member | Guest; //UNION
 let customer : Customer;
 type MG= Member & Guest;       //INTERSECTION(MG는 M,G내의 모든 속성을 .으로 부를 수 있어)
 let mg : MG;
 let mem : Member;
 let g:Guest;
 
 customer = {
     id: '111',
     name: '홍길동',
     addr: '용산구',
     discountRate: 0.1,
    };
 
 customer = {
     id: 222,
     name: '홍길동',
     age: 26,
    };
 //let xx : Guest | Member = { //강제로 type을 주기(다음줄과 비교)
 let xx = {           //mem은 guest age때문에 안되고 g는 addr때문에 안됨.
    id: 123,
    name: '홍길동',
    age: 26,
    addr: '용산구',
    discountRate: 1,
    };
    g=xx;               //guest로 인정받은 듯 하다.(guest 속성은 모두 갖고 있으니까.) Member로 하기엔 discountRate가 없음.-> discountRate?로 바꾸면 member로
    //customer.name; customer를 찍으면 Member와 Guest의 공통된 속성만 부를 수 있음!!

 
if('age' in xx) g = xx; // 만약 age가 xx 안에 있다면 Guest에 넣고,
else if ('addr' in xx && 'discountRate' in xx) mem = xx;//아니라면 Member에 넣어라.

if ('age' in xx ) g  = xx; 
else if('addr' in xx && 'discountRate' in xx ) mem = xx; //만약 addr이 xx 안에 있다면 mem변수에 xx객체 할당. -> error -> addr만으로는 너의 type을 알 수 없어!


 /* if('discountRate' in xx)m = xx; optional은 체크할 수 없어! */
 //if('name' in xx) mem = xx; -> name은 공통되었기 떄문에 위처럼 판별할 수 없다.

/* typeof는 literal 비교시에만 사용할 수 있다. */
if(typeof xx.id === 'number' && 'age' in xx) g = xx; 
 //if(typeof xx.id === 'string') mem = xx; //=> id의 type만 검사하고 xx가 무슨 type인지까지는 안올라감 그래서 xx가 무슨 타입인지 알 수 없기 때문에 오류
//if(typeof xx.id === 'string' && 'addr' in xx) mem = xx;


 xx.id = 10;

 /* type 내로잉 -> 하는 이유 guest인지 Member 인지 판단하기 위해 */
 //if(typeof xx.id === 'string' && 'discountRate' in xx) mem  = xx;
 //if(xx.hasOwnProperty('discountRate')) mem = xx;        //위 아래 같음
 //hasOwnProperty는 실행을 해봐야 알 수 있는 함수기 때문에 함수를 실행하지 않는 ts에서는x
 //불규칙 허용(Array, isArray)

 let ss: string;
 let nn: number;
 let yy: string | number = 1;
 yy = 'abc';

 if(typeof yy === 'string') {
    ss = yy;
 } else {
    nn = yy;
    console.log(nn);
 }
/* 내로잉2 */
/*  if(yy ==='abc'){
    ss = yy;
 } else {
    nn = yy;                //이때 nn은 error가 나는데 'abc'가 number인지 알 수 없기 때문.(다른 타입일 수도 있다.)
    console.log(nn);
 } */





let xxx = {           //mem은 guest age때문에 안되고 g는 addr때문에안됨.
    id: 123,
    name: '홍길동',
    age: 26,
    addr: '용산구',
    discountRate: 1,
    };

if('age' in xxx) g = xxx;       //xxx객체의 symbol이 더 크면(최소한 guest의 symbol에 모두 부합하면) 들어갈 수 있음.
else if('addr' in xxx) mem = xxx;    //xxx.id가 string이 아니어서 부합x(else if를 쓰면 윗줄의 조건까지 포함하기때문에 error 없어짐.)



//--------------------------------
let gildong = Math.random() > 0.5 && 'HongGilDong';     // let gilding: false | string      => let이니까 hongGilDong literal type일 수 없음.(const일 때만)   /true는 존재할 수 없는 것이 true라면 무조건 HongGilDong으로 넘어가면서 string이 되니까

if (gildong) {
   gildong.toUpperCase(); // string
} else {
   gildong; // type:"false | string" => 빈 문자열인지 false인지 알 수 없음. 잠재적 string('')일 가능성이 있음.
}



//--------------------------------
let a: string | undefined;
a = Math.random() > 5? 'a':undefined   //tsconfig.json 에서 "strictNullChecks"나 "strict"를 false로 하면 원래 string type이라  undefined를 할당받을 수 없었던 a의 에러가 풀림.(false로 하면 undefied과 nullcheck에 관대해짐.)
if(typeof a === 'string')a?.slice(1);


