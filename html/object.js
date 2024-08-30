//const assert = require('assert');
const user = {                  
    ''      : 1,        
    ' '     : 1,       
    123     : 1,       
    [12345n]: 2,  
    true    : 1,      
    id      : 2,          
    [`name`]: 'Hong',
    [Symbol()]: 'Hong',
    [Symbol()]: 'HongHong',
    [`${new Date()}`]: 365,     
    'my-friends': ['Han', 'Kim'],
    id      : 3,
    getInfo: () => `${this.id}-${this.name}`,           // OK! But, this is not user!
    getInfo() { return `${this.id}-${this.name}`; },    // OK! getInfo의 최종 <f.o>
}    
console.log(user);
const keys = Reflect.ownKeys(user);
console.log(keys);
console.log(user[keys[keys.length-1]]);     //Hong
console.log(user.getInfo());
    //return `${this.id}-${this.name}` 이 객체의 id-name key의 값을 반환해줌 


//-----------------------------------------
let symbolKeys;
for(let i = 0; i < keys.length; i++){
    const typ = typeof keys[i];
    console.log(keys[i], '==>',typ)

    if(typ === 'symbol') {
        symbolKeys = keys[i];
    }
}
console.log(user[symbolKeys]);              //Hong
user.addr = 'seoul';
console.log(user);
//delete user.addr;                           //addr먼저 지우고 여기에 있는 모든 user를 출력할 때, addr은 없음.
console.log('addr' in user);                    //true
console.log(user.hasOwnProperty('addr'));       //true    
console.log(Reflect.has(user,'addr'));       //true    






//1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
i=0;
var arr = [100, 200, 300, 400, 500, 600, 700];
function ex1(){

    let results = [];
    for (const idx in arr) {//in: 객체를    
        //console.log(idx/* +":"+ arr[key] */); // 속성과 해당 값 출력
        results.push(arr[key]);
    }
    return results;
    
}


/*for-in 을 사용하는 이유.
for-of는 iterable 해야한다. 하나를 다 처리할때까지 next를 돌지 않음.  */

////2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
for (const value of arr) {
    console.log(value);
}
//solution during the class
//let solKeys = assert.deepStrictEqual(forInKeys(arr),Object.keys(arr));
//let solValue = assert.deepStrictEqual(forInvalues(arr),Object.values(arr));
//console.log("🚀 ~ solKeys:", solKeys);
//console.log("🚀 ~ solValue:", solValue);




const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }

//inclass
/* 객체는 iterable 하지 않음. */
for(const x in obj) {
    console.log(x);
}

//3. for-in문을 사용하여 프로퍼티 이름(키)들을 출력하시오.
for(const key in obj){
    console.log(key);
}


//4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
/* for(const value of obj){
    console.log(value);
} */
for (const key in obj) {
    if (obj.hasOwnProperty(key)) { // 고유 프로퍼티인가?
        console.log(obj[key]); // 프로퍼티 값 출력
    }
}

//5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (const k of Reflect.ownKeys(obj)) {
    console.log(k, obj[k]);
    //rets.push([[k, obj[k]]]);
}


console.log('=============6. in class===============');
//6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
Object.defineProperty(obj, 'level', {enumerable: false});
console.log(obj);

//7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty */
Object.freeze(obj, 'role');
console.log(Object.getOwnPropertyDescriptors(obj));





function ex3(){
    const data =[
        ['A', 10, 20],
        ['B', 30, 40],
        ['C', 50, 60, 70]
    ];

    function makeObjectFromArray(array){
        const  retObj = {};
        for(const [key, ...vals] of array){     //key(A), ...vals: 10,20(나머지 값)
            retObj[key] = vals;
            //retObj [a[0]] = [a[1],a[2]];
        }
        return retObj;
    }
    const dataObj = makeObjectFromArray(data);
    console.log(dataObj);


    function makeArrayFromObject(obj){
        const result =[];
        for(const key in obj){
            results.push([key,...obj[key]]);            /* ...obj[key]]얘를 ...을 이용해 펼쳐서 하나의 일차원배열로 만듦 */
        }
        return results;
    }
    console.log("🚀 ~ makeArrayFromObject ~ makeArrayFromObject:", makeArrayFromObject)
    
    assert.deepStrictEqual(makeArrayFromObject(dataObj), data, 'data vs makeArray');

}



//p.136
/*  id, name 은 프리미티브라 값을 전달하지만 addr은 주소값을 전달 -> call by reference -> 재귀함수 */
function sallowCopy(obj){
    const kim = {nid: 3, nm: 'Kim', addr: {city: 'Pusan'}};
    const newKim = {};
    for(const k in kim) {   //객체는 for 쓰는거 아니야.
        newKim[k] = kim[k];
    }
    newKim.addr = 'Daegu';
    console.log('sallow>>', kim.addr!==newKim.addr);    //true면 통과
    console.log('kim newkim', kim, newKim);
    /* kim과 newKim은 힙의 다른 주소값을 가진다. */
}



/* function isObject(obj){
    return !obj || typeof obj !== 'object';
}


const jeong = {nid: 3, nm: 'Kim', addr: {city: 'Pusan'}};
function copyObject(obj){      //decopy 함수
    for(const k in Reflect.ownKeys(obj)){
        newer[k] = copyObject(obj);
    }
    if(!isObject(obj))return obj;

    const newer = {};
    for(const k in obj) {
        newer[k] = copyObject(obj[k]);
    } 

    const symbols = Object.getOwnPropertySymbols(obj);
    return newer;
}
const newKim = copyObject(jeong);
assert.deepStrictEqual(jeong.newKim);
newKim.addr.city = 'Daegu';
    assert.notdeepStrictEqual(jeong.newKim);
  */


    