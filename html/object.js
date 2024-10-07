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
console.log(Reflect.has(user,'addr'));          //true    
const key_value =Object.entries(user);

console.log('-------------위 아래 동일------------');
function entriesWithSymbol(obj){
    if(!obj || typeof obj !=='object') return [];
    const entries = Object.entries(obj);
    const onlySymbolKeys = Object.getOwnPropertySymbols(obj);
    for(const sym of onlySymbolKeys){
        entries.push([sym, obj[sym]]);
    }
    return entries;
}    
console.log("🚀 entriesWithSymbol:", entriesWithSymbol(user))
Object.defineProperty(user, 'addr',{
    value: 45,
    writable:true, 
    enumerable: false, 
    configurable:true});
console.log(Object.getOwnPropertyDescriptor(user,'addr'));
const u4 = Object.create(user);
Object.getPrototypeOf(u4) ;




//1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
i=0;
var arr = [100, 200, 300, 400, 500, 600, 700];
function ex1(){
    let results = [];
    for(const key in arr){
        results.push(key);
    }
    return results;
    
}
console.log(ex1());


/*for-in 을 사용하는 이유.
for-of는 iterable 해야한다. 하나를 다 처리할때까지 next를 돌지 않음.  */

////2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
function ex2(){
    let results = [];
    for(const key in arr){
        results.push(arr[key]);
    }
    return results;
    
}
console.log(ex2());




//inclass
/* 객체는 iterable 하지 않음. */

const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false }
//3. for-in문을 사용하여 프로퍼티 이름(키)들을 출력하시오.
for(const key in obj) {
    console.log(key);
}


//4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for(const key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(obj[key]);
    }
}


//5. for-of문을 사용하여 프로퍼티 값을 출력하시오. -> value값을 받아야함
for(const key of Reflect.ownKeys(obj)){
    console.log(obj[key]);
}

//6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
Object.defineProperty(obj, 'level', {enumerable: false});
console.log(obj);

//7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty */
Object.freeze(obj, 'role');
console.log(Object.getOwnPropertyDescriptors(obj));



console.log('----p.135-------------------------------------');
function ex3(){
    const data =[
        ['A', 10, 20],
        ['B', 30, 40],
        ['C', 50, 60, 70]
    ];

    function makeObjectFromArray(array){
        const arrayToObj = {}
        for(const [key,...vals] of array){  //key(A), ...vals: 10,20(나머지 값)
            arrayToObj[key] = vals;
            //arrayToObj [a[0]] = [a[1],a[2]];
        }
        return arrayToObj;
    }
    const dataObj = makeObjectFromArray(data);
    console.log(dataObj);




    function makeArrayFromObject(obj) {
        const results = [];
        for(const key in obj){
            results.push([key, obj[key]]);
        }
        return results;
    }
    const dataArray = makeArrayFromObject(dataObj);
    console.log(dataArray);
}
ex3();






//p.136
/*  id, name 은 프리미티브라 값을 전달하지만 addr은 주소값을 전달 -> call by reference -> 재귀함수 */
function sallowCopy(obj){
    const kim = {nid: 3, nm: 'Kim', addr: {city: 'Pusan'}};
    const newkim = {};
    for(const k in kim){
        newkim[k] = kim[k]
    }
    newkim.addr = 'daejeon'
    newkim.age = 29
    console.log(newkim, 'kim>>',kim)
    /* kim과 newKim은 힙의 다른 주소값을 가진다. */
}
sallowCopy()





function isObject(obj){
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
 


    