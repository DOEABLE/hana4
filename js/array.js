
const assert = require('assert')
const hong = {id:1, name:'Hongi'}
const kim = {id:1, name:'kim'}
const lee = {id:1, name:'lee'}
const park = {id:1, name:'park'}

const users = [hong,kim,lee,park];
const idxkim = users.indexOf(kim);      //1 출력
console.log(idxkim);


const find3 = a => a.id === 3;
const idxId2= users.findIndex(find3);
console.log(idxId2);

/* findIndex */
//const idxkim2 = users.findIndex((a, i) => a.id === 3);      //a에는 이름이 차례대로 들어옴.//id가 3인 경우 ture출력
//console.log(idxkim2);


const idxId3 = users.findLastIndex(a=> a.id===3)
const idxId1 = users.findLastIndex(find3);
console.log(idxId1);

/* 특정id를 주면 그 id를 가지고 찾는 것 */


const findId = (id) => a => a.id === id; //curring
    //id를 받아서 
const idxId11 = users.findLastIndex(findId(1)); //1이 id 로 들어감.
console.log(idxId11);
/*  function object 는 (a => a.id === id) */






console.log('---------------------');
users.forEach(a => console.log(a.id,a.name))//괄호 안에 function object 를 받음
/* forEach 각각을 for 할  것이다. */

/* call back function:
a => console.log(a.id,a.name) */

const isOdd = (n) => n%2 !== 0; //화살표 함수
/* for(const val of arr){
    console.log(isOdd(val));
    } */
   // for문 안돌리고 밑에처럼
   const ret = users.forEach(a=>console.log(isOdd(a)))
   console.log(ret);
   
   
console.log('--------check prime number-------------');
const arr1 = [1,2,3,4,5,6]
// 소수판별
const isPrime = (n) => {/* //for
    if(n<=1) return false;
    for (let i = 2; i<=Math.sqrt(n); i++){
        if(n % i ===0) return false;
    }
    return true; */
}







//1) 소수를 가지고 있는지 isPrime이 하나라도 true가 있으면 
const hasPrime =(arr) => arr.some(isPrime);
const getPrimeNumbers = (arr) => arr.filter(isPrime);

// 특정배열의 원소 중 소수만 추출하는 함수 작성
const primes = getPrimeNumbers(arr1)
console.log(primes);



///* ex.4 복원 */
//const ex4 = arr2.splice(1,0,...ex3);
//console.log(ex4,arr2);
//
///* ex7 복원 */
//const ex7 = arr2.splice(2,Infinity,'X','Y','Z',4,5); //끝부분을 많이 줘버리면 맨뒤까지 다 지우잖아 100말고 Infinity주기
//console.log(ex7);





//배열의 객체를 하나의 객체로 합치는 방법
const objs = [
    { id: 1 },
    { name: 'Hong' },
    { addr: 'Seoul', id: 5 }
];

const mergedObj = objs.reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});

console.log(mergedObj);
// 결과: { id: 5, name: 'Hong', addr: 'Seoul' }
/* reduce: 배열의 각 요소에 대해 누적결과를 계산. 
acc : 누적된 결과를 저장하는 객체
curr: 현재 처리중인 객체
이전결과 acc와 현재결과 curr를 병함해 새로운 객체 생성
초기 값을 따로 할당 안하면 첫번째 객체가 들어감.
*/





//p.180 연습문제
















