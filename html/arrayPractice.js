const assert = require('assert');
// function push(array, …args) {}
//const arr = [1, 2, 3, 4];


//const push = (arr, ...args) => [...arr, ...args];
//    //순수함수니까 arr 조작금지
//const pop = (arr, index = -1) => index === -1? arr.//slice(index)[0]:arr.slice(idx);
//
//const unshift = (arr, ...args) => [...args, ...arr]
//const shift = (arr) => arr.slice(1)
//
//
//
//
//
//assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, //4, 5, 6]); 
//assert.deepStrictEqual(pop(arr), 4); 
//assert.deepStrictEqual(pop(arr, 2), [3, 4]);    // //2개 팝(꺼내 줘)!
//return;
//assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, //3, 4]);
//assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, //1, 2, 3, 4]);
//assert.deepStrictEqual(shift(arr), [2, 3, 4]); 
//assert.deepStrictEqual(shift(arr, 2), [3, 4]);
//assert.deepStrictEqual((arr),[1, 2, 3, 4]); 





//2
/* const deleteArray = (arr,start, end = Infinity) =>
     arr.filter((a,i) => i<start || i>=end); */

const deleteArray = (arr,start, end = Infinity) =>{
    if(typeof start === 'number')
        return arr.filter((a,i) => i<start||i>=end);

    return arr.filter(a => a[start]!==end);
}



assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);





//---------------------------
//const hong = { id: 1, name: 'Hong' };
//const choi = { id: 5, name: 'Choi' };
//const kim = { id: 2, name: 'kim' };
//const lee = { id: 3, name: 'Lee' };
//const park = { id: 4, name: 'Park' };
//const users = [kim, lee, park];         // 오염되면 안됨!!
//
//users.addUser = function(newer){
//    return[...this,newer];
//}
//users.removeUser = function(toRemove){
//    return this.filter(user => user.id!== toRemoveUser.id);
//}
//users.changeUser = function(fromUser,toUser) => {
//    return users.map(user => user.id ===fromUser.id ? toUser ; user);
//}
//
//['addUser', 'removeUser', 'changeUser'].forEach(fn =>
//    Object.defineProperty(users,'addUser',{
//        enumerable: false,
//    })
//)
//
//users.addUser(hong);
//console.log(r1, users);
//
//users.addUser(hong);            // [kim, lee, park, hong]
//users.removeUser(lee);          // [kim, park]
//
//users.changeUser(kim, choi);   // [choi, lee, park]






//-----------------------------------------------------------
// ex1) 배열의 각 원소를 String으로 변환하시오.
//arr = [1, 2, 3, true];
//const ret1 = arr.map(String(a));
//console.log(ret1);
//assert.deepStrictEqual(ret1, ['1', '2', '3', //'true']);
//return;
//const classNames = (...args)=> args.filter(Boolean).//join(' ');
//const classNames2 = (...args)=> 
//    args
//        .map(a => a.trim())
//        .filter(Boolean)
//        .join(' ').replace(/\s{2,}/g, ' ');
//        /* replace : string 변환 */
//
//const ret2 = classNames('', 'a b c', 'd', '', //'e');  // cf. clsx
//const ret3 = classNames2('', 'a b c', 'd', '', //'e');  // cf. clsx
//assert.strictEqual(ret2, 'a b c d e'); 
//assert.strictEqual(ret3, 'a b c d e'); 
//// 주의: ' a b c d  e'면 안됨!!(c,d가 붙으면 안됨.)






//p.184 3교시
const reduce = (arr, fn, initValue) => {
    if(!arr || !Array.isArray(arr)) return [];

    let i = 0;
    let acc = initValue;
    if(!initValue){
        acc = arr[0];
        i=1;
    }
    for(let i = 1; i < arr.length; i++){
        acc = fn(acc, arr[i]);
    }
    return acc;
}
const r = reduce([1, 2, 3], (a, b) => a + b, 0);       // 6이면 통과!
console.log("🚀 ~ r:", r)
const r2 = reduce([1, 2, 3], (a, b) => a + b, 0);       // 6이면 통과!
console.log("🚀 ~ r:", r)
// cf. [1,2,3].reduce((a,b) => a + b, 0);       // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b);    // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b);          // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0);       // 0이면 통과!










//p.187
const keyPair = (arr,n) => {
    const pairIndexCache = {}
    for(let i = 0; i< arr.length; i += 1){
        const val = arr[i]
        if(val in pairIndexCache) return [pairIndexCache[val],i];
        pairIndexCache[n - val] = i;

    }
}


assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);