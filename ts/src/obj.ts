let xuser: {id: number, name: string};
xuser = {id: 1, name: 'xx'}; // OK
//xuser = {id: 1}; // Error (Property 'name' missing in type)
//xuser = {id: 1, name: 'xx', age: 30};   //바로는 못쓴다..(age error) freshness "on"
const tmp ={id: 1, name: 'xx', age: 30} //'할당'하면 freshness 꺼짐
xuser = tmp; // Error ({id, name, age} is not assignable to type {id,name} ) 위 tmp처럼 할당 해줘야함.
         //⇐ Freshness!
/* freshness 상태일때는 모든 속성이 정확하게 맞아야함. */


//------------------------------------------------
// 타입 별칭(type alias)
type TUser = {
  id: number;
  name: string;
};

let hong: TUser;
hong = {id: 1, name: 'Hong'}; // OK
//hong = {id: 1}; // Error (name property missing)
//hong = {id: 1, name: 'Hong', addr: 'Pusan'}; // Error(not assignable)  Freshness!
hong = {id: 1, name: 'Hong', addr: 'Pusan'}as TUser; // OK (turn-off Freshness!) TUser타입으로 등록


export{}






//--------------------------------------------
const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(oneToTen[400].toFixed(2));
/* "noUncheckedIndexedAccess": true, 하면 oneToTen error */





//함수p.56------------------------------
function f(cb: (input: string| number) => number) {return cb(1);}
//cb함수는 string이나 number를 받아서 number return.
function f1(input: string| number | boolean) {return 1;}
function f2(input: string| number) {return 1;}
function f3(input: string) {return 1;}

//f1-f3의 f로의 통과 시도.
f(f1);//f의 cb(1)이 input에 들어감.f1에는 number가 있으므로 통과.
f(f2);
//f(f3);// 1은 string에 전달 못해. 통과x


//-------------------------------------
type Emp = { id: number; name:string};
//arr은 'Emp type' 의 array다.
/* const arr: Emp[] = [{id: 1, name: 'Hong'}, {id: 2, addr: 'Seoul'}]
//addr error : id:1은 위에서 속성 id, name을 할당 했지만, addr은 할당되지 않았으므로! (아래처럼 해보자) */
const kim = {id: 2, name: 'Kim', addr: 'Seoul'};//할당해서 arr1에서는 error 안남.
const lee: Emp = {id: 1, name: 'Lee'};

const arr0: Emp[] = [{id: 1, name: 'Hong'}]     //exact match ok!
const arr1: Emp[] = [{id: 1, name: 'Hong'}, kim]
const arr2: Emp[] = [{id: 2, name: 'Kim', addr: 'Seoul'}, kim];   //'kim' 덕에 addr freshness 가 켜져있어도 seoul이 통과 될 수 있음.
//const arr3: Emp[] = [{id: 2, name:'Kim' addr: 'Seoul'},lee] //lee엔 addr이 없어서 addr 통과x
//const arr4: [Emp,Emp] = [{id: 2, name: 'Kim', addr: 'Seoul'}, kim];
//arr4 튜플 원소가 두개인 배열 -> 첫번째 자리에 {id: 2, name: 'Kim', addr: 'Seoul'}, 두번째 자리에 kim 즉, 두개의 원소의 연관성을 끊어버려서 arr2처럼 첫번째 원소가 kim의 덕을 볼 수 없게 됨.


//===================================
function logSong(song : string) : void {
  if(!song){
    return; // OK!  return undefined; 도 OK!
  }
  console.log(`${song}`);

  //return true;   // Error! - Type 'boolean' is not assignable to type 'void'.
}  
type LogSong = typeof logSong;  //위의 song과 type을 맞추고 싶다.



let songLogger : (song:number) => void;
//type SL = (song: string) => void;
type SL = typeof songLogger;      // song과 type을 맞춰주고 싶을 때


songLogger = (song) => {
    console.log(`${song}`);
    return true;  // OK
}





type VoidReturn = () => void;
const test2:VoidReturn = () => 11;  // OK!




export{}