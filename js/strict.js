//strict의 탄생
'use strict';              //선언하지 않고 사용하면 error '못쓰게 하면 사용하지 않겠지...에서 시작'




var aaa =1;
console.log("🚀aaa11:", aaa);

var aaa =1;     // var는 선언 또 해도 덮어쓰니까 상관없음.

//delete aaa;     //use strict를 쓰면 error!! -> 왜?*****
console.log("🚀aaa22:", aaa);


//function은 선언될때 메모리 확보를 위해 undefined가 아닌 function Object로 선언됨
function f(a,ax){
    console.log('outer f');
}


{
    f(100);                         
    //strict 모드라면  function이 블록스코프가 됨. ->f(100) 위로 올라옴. 그 블록 밖으론 못나오고 
    function f(a) {
        var v;
        {
            const b=1;
            v = 5;
        }
        console.log('block f',a, b);        //블록 내의 b는 블록밖으로 사라지면 메모리에서 해제되어서 부를 수 없음.
        //return;                           //return을 만나면 다음 스택포인터로 내려온다.
    }
    f(100);
}   //strict mode 일때 이 블록 밖으로 나오면 f(a)는 메모리에서 사라짐.


