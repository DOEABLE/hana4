//if 문 vs switch 문

const blood = 'B'

let sport ='운동';

if(blood ==='A'){
    sport = '사격'
}else if(blood ==='B'){
    sport = '야구'
}else if(blood ==='AB'){
    sport = '양궁'
} else {
    sport = '펜싱'
}
console.log(blood+':'+ sport);

//------------------------------------------
switch(blood){
    case 'A':
        sport = '당신은 A형입니다'
         break;
    case 'B':
        sport = '당신은 B형입니다'
         break;
    case 'AB':
        sport = '당신은 AB형입니다'
         break;
    case 'O':
        sport = '당신은 O형입니다'
         break;
   default: 
   sport='정확한 값이 아닙니다.';     
}
console.log(sport);    

//------------------------------------------
switch(blood){
    case 'A':
    case 'B':
    sport='근대5종'     //A OR B이면 출력 = if(blood === 'A'||blood === 'B')
        break;
    case 'AB':
        sport = '당신은 AB형입니다'
         break;
    case 'O':
        sport = '당신은 O형입니다'
         break;
    default: 
        sport='정확한 값이 아닙니다.';  

}
console.log(sport);  

//------------------------------------------
x=3;

let vksquf = x===1? 'one' : (x===2? 'two':(x===3? 'three':'else'));
console.log(vksquf);

//위의 코드는 더 이어나가면 가독성이 떨어지므로
ret = 
(x===1? 'one':'')||
(x===2? 'two':'')||
(x===3? 'three':'etc')         //빈공백이라면 false이므로 ||다음을 판별하러 들어감
console.log(ret);

//------------------------------
console.log('p.50');
for(i =0.1; i<1; i=i+0.1){
    console.log(i.toFixed(1));    
}


//------------------------------
console.log('p.52');
for(i=1;i<=10;i+=1){
    squareRoot= Math.sqrt(i).toFixed(3);
    console.log(i+' -> '+squareRoot);
}

/* 추가문제: 주어진 값의 sqrt 값을 출력하고,
1 큰 수가 무리수가 아닐 때 까지 sqrt 값을 출력하는 함수를 작성하시오. */
function printIrr(num){
    let sr;
    for(i = num;sr%1!==0;num++){
        sr = Math.sqrt(num).toFixed(3);
        if(sr%1!==0) console.log(num,sr);
    }
    /* do{
    }
    while(sr%1!==0){
        num++;
        } */

}
printIrr(5);
printIrr(9);


function printDate(){
    let today = new Date();  
    let day = today.getDay(); // 요일번호          p.45 참조!
    console.log(day); 
    //오늘은 금요일입니다.  (const WEEK_NAMES = '일월화수목금토')
}
switch(day){
    case 0:
    alerted = '일요일';
    break;
    case 1:
    alerted = '월요일';
    break;
    case 2:
    alerted = '화요일';
    break;
    case 3:
    alerted = '수요일';
    break;
    case 4:
    alerted = '목요일';
    break;
    case 5:
    alerted = '금요일';
    break;
    case 6:
    alerted = '토요일';
    break;
}
console.log(alerted);
