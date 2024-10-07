//function addTo100TCO(n, sum=0){             //sum에 인자를 안주면 0으로 할께       
//    if(n===100) return sum+100;
//    return addTo100TCO(n+1, sum+n); 
//}
//console.log(addTo100TCO(97));
//
//




//------------------------------------------
/* 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
(단, array 메소드를 사용하지 말고, destructuring을 사용하시오)
재귀함수는 종료조건 먼저 만들어주기. */

function makeArray(n) {
    if(n===1) return [1];
    return [...makeArray(n-1),n]
}
console.log(makeArray(10)); 




function makeReverseArray(n){
    if(n===1) return [1];       //맨 마지막에 추가되는 재귀 함수는 배열[1]을 맨뒤에 추가하여 반환
    return [n,...makeReverseArray(n-1)] 
}
console.log(makeReverseArray(5));





/* TCO : Tail Call Optimization (TCO)을 활용하도록 수정하려면, 재귀 호출이 마지막에 이루어지도록 해야 합니다. 
이를 위해 누적 변수를 사용하여 결과를 쌓아가는 방식으로 변경할 수 있습니다. */
/* "TCO를 지키면 call stack에 쌓지 않겠다" 
"재귀 함수의 return 문에 이 함수의 호출만 존재해야한다".*/
function makeArrayTCO01(n, acc=[]){   //항상 TCO는 누적값을 담을 수 있는 변수가 필요해.
    if(n===1) return [1, ...acc];
    return makeArrayTCO01(n-1,[n,...acc]);//현재 n을 누적 배열에 추가합니다.
}
console.log(makeArrayTCO01(5));

//n      i-acc       o-acc
//5     []          [5,...acc]
//4     [5]         [4,...acc] ==>[4,5]
//3     [5,4]       [3,...acc] ==>[3,4,5]
//2     [5,4,3]     [2,...acc] ==>[2,3,4,5]
//1     [5,4,3,2]   [1,...acc] ==>[1,2,3,4,5]

//얘가 더 TCO에 가까움
function makeArrayTCO02(n, acc=[]){
    const t =[n,...acc];
    if(n===1) return t;
    return makeArrayTCO02(n-1,t);
}
console.log("makeArrayTCO02:", makeArrayTCO02(5))





function loopFibonacci(n){
    let arrFibonacci =[0,1];
    for(let i = 2; i < n; i++){
        arrFibonacci[i] = arrFibonacci[i-1] + arrFibonacci[i-2];
    }
    return arrFibonacci;
}
console.log(loopFibonacci(5));

function loopFibonacci2(n){
    if(n<=1) return n;
    const arr=[0,1];
    for(i=2; i<n; i++){
        arr[i] = arr[i-2]+arr[i-1];
    }
    return arr;
}
console.log(loopFibonacci2(10));



function recursiveFibonacci(n){
    rnt++;
    if(n<=1) return n;
    return recursiveFibonacci(n-2) + recursiveFibonacci(n-1);
}
console.log(recursiveFibonacci(5));



//재귀함수를 이용한 피보나치
function recursiveFibonacci(n){
    if(n<=0) return [];
    if(n===1) return [0];
    if(n===2) return [0,1];

    const sequence = recursiveFibonacci(n-1);
    sequence.push(sequence[n-2]+sequence[n-3]);
    return sequence;
}
console.log('recursiveFibonacci:',recursiveFibonacci(7));





//memoized를 이용한 factorial 출력
const cache = {}
function factorial(n){
    cache[1]=1;
    //if(n<=1) return cache[n] = n;                                     // n을 배열형태로 받으면
    return cache[n] ?? (cache[n] = n * factorial(n-1));
}
console.log(factorial(5));                                              //10! = 3628800    
const factorialArray = Object.values(cache);                            //cache의 누적값을 배열로 출력
console.log(factorialArray);




/* cacheTable에서 꺼내기 */
function memoized(fn) {                //memoized fn은 함수를 입력받는다.(fn=A)
    const memoizedCacheTable = {};    

    function B(k) {
        return memoizedCacheTable[k] ?? (memoizedCacheTable[k] = fn(k)); //cache에 존재하는가?
    }// ??연산자는 좌측값이 null이거나 undefined라면 우측 값을 반환한다.
}
const memoizedFibonacci = memoized(
    function A(n) {                                                         //A => fn함수
        if(n<=1) return n;
        return memoizedFibonacci(n-2) + memoizedFibonacci(n-1);
    }
);

console.log(memoizedFibonacci(10));



//memorized 함수를 이용한 피보나치 (hard) p.125 + cache 출력
function memoized(fn) {                //memoized fn은 함수를 입력받는다.(fn=A)
    let memoizedCacheTable = {};    

    function B(k) {
        return memoizedCacheTable[k] ?? (memoizedCacheTable[k] = fn(k)); //cache에 존재하는가?
    }

    //캐시반환 메서드를 추가해서 cache객체에 접근하도록
    B.getCache = function(){
        return memoizedCacheTable;
    }
    return B;
    
}

console.log(memoizedFibonacci(10));
console.log(Object.values(memoizedFibonacci.getCache()));
/* //위 함수를 화살표 함수로 바꾸기
const memoized =(fn) => {
    const memoizedCacheTable = {};
    return k => memoizedCacheTable[k] ?? (memoizedCacheTable[k] = fn(k)); 
    } */ 
   