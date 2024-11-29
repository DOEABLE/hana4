/* 선언부 */
'use strict';

var gg;    
let bb;    
var kk;
function f1(x,y){
    var gg;
    let bb;
    var zz;
    function f2(t, u, v) {
        console.log(t, '`inner2`', xx, zz);
      }
//----------------------------------

};  

function f2(g){
    console.log(g, 'global f2>', gg, bb, xx, kk);
}
let xx;  
var kk;



/*******실행부2********/
gg=1;
bb=2;
xx=9;
if (gg > 0) {
    const yy = 9;
    kk = 33;
  }
f1(1,2);
console.log('kkkkk>>', kk);
f2('* third');

