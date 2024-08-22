


for(let i = 0.1; i < 1; i = i+0.1){
    console.log(i.toFixed(1));      /* 외부라이브러리 사용 -> 첫째자리까지 반올림하여 출력 */
    Number(i.toFixed(1));
}
console.log('---------무리수22---------');
for(let i = 0.1; i <= 1; i = i + 0.1){
    i = Math.round(i*10)/10;    
    console.log(i.toFixed(1));                 //1은 정수 형태로 출력된다.
}


console.log('----------제곱근 구하기------------');
for(let i = 1; i <= 10; i = i + 1){
    a = Math.sqrt(i);   //루트값을 구해주는 함수
    console.log(a.toFixed(3));      //소수점 3자리까지
}

console.log('----------무리수인 경우만 출력------------');
function irrationalNum(num) {
    //let irrNum = 0;
    for(let i = 1; i<=num; i+=1) {
        let irrNum = Math.sqrt(i);

        if(irrNum % 1 !==0) console.log(irrNum.toFixed(3));  
    }
}
irrationalNum(10);





/* let i = 0;  //초기화
let t = i;
if(i = t < 3){
    let i = t;
    fnxs.push(() => console.log(i));
    if((i = t + 1) < 3) {
        let i = t;
        fnxs.push(() => console.log(i));
        if((i = t + 1) < 3) {
            let i = t;
            fnxs.push(()=> console.log(i));
            if((i = t + 1) < 3) {
                let i = t;
                fnxs.push(() => console.log(i));
            }
        }
    }
}
fnxs.forEach(f => f()); */


