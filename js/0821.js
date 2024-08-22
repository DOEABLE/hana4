/* 연습1. for문을 이용한 소수점 증가식 부동소수점(정밀도) 문제까지 해결 */
for(let i = 0.1; i < 1; i = i+0.1){
    console.log(i.toFixed(1));                      /* 외부라이브러리 사용 -> 첫째자리까지 반올림하여 출력 */
}

for(let i = 0.1; i <= 1; i = i + 0.1){
    i = Math.round(i*10)/10;    
    console.log(i.toFixed(1));                      //1은 정수 형태로 출력된다.
}





/* 연습2-1. 1-10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
(Math.sqrt()사용, 제곱근이 무리수인 값만 출력) */
console.log('----------제곱근 구하기------------');
function squareRoot(num) {
    for(i = 1; i<=num; i+=1) {
        let sr = Math.sqrt(i);
        if(sr%1 !=0) {
            console.log(sr.toFixed(3));
        }
    }
}
squareRoot(10);
console.log("");


/*!Number.isInteger 이용 */
function irrationalNum(num) {
    for(let i = 1; i<=num; i+=1) {
        let irrNum = Math.sqrt(i);
        if(!Number.isInteger(irrNum))                               // ->정수인지 무리수 판별 if(irrNum % 1 !==0)
            console.log(irrNum.toFixed(3));
    }
}
irrationalNum(10);                                                  //2,3,5,6,7,8,10





/* 연습2-2. 주어진 값의 제곱근을 출력하고, 가장 큰 수가 무리수가 아닐 때 까지 sqrt값을 출력하는 함수를 작성하시오 */
function printIrr(num) {
    do{
        const sr = Math.sqrt(num);
                            
    } while ((sr % 1) != 0);                 //조건) 무리수인가?
    
    for(let i = 1; i<=num; i+=1) {
        let irrNum = Math.sqrt(i);
        if(!Number.isInteger(irrNum))                               // ->정수인지 무리수 판별 if(irrNum % 1 !==0)
            console.log(irrNum.toFixed(3));
    }
    console.log();
    
}
printIrr(9);

/* 배열로 받기 */







/* 연습3. 오늘 날짜의 요일을 출력 */
console.log("------------switch문 이용------------");

function todayIs() {
    let day;                                            //요일지정 변수
    let week = new Date().getDay();                     //오늘 날짜를 받자...
    //일:0 -토:6
    switch(week){
        case 0:
            day = '일';
            break;
        case 1:
            day = '월';
            break;
        case 2:
            day = '화';
            break;
        case 3:
            day = '수';
            break;
        case 4:
            day = '목';
            break;
        case 5:
            day = '금';
            break;
        case 6:
            day = '토';
            break;
        default:
            day = '알 수 없음';
        }
        console.log("오늘은 " + day + "요일입니다.");
    }
    todayIs();



/* 연습 4 올바른 더하기 연산(정밀도 문제) */
function addPoints(a,b) {
    const alen = a.toString().length;
    const blen = b.toString().length;
    const bigger = alen > blen ? alen : blen;
    const ret = (a + b).toFixed(bigger-2);
    console.log('ret', a, b, '==>', ret);
}

addPoints(0.21354, 0.1);
addPoints(0.14, 0.28);
addPoints(0.34, 0.226);
