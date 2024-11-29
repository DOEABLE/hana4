//const { resolve } = require("path");
//const { deprecate } = require("util");

/* 1초 후에 무언가를 return 하는 함수 */
const p = new Promise((resolve, reject) => {
        /* 비동기 코드로 짜시오 */
        setTimeout(()=>{
            console.log('XX');
            resolve('OK');
            //reject('Error');
        }, 1000);
    });
console.log('p=',p);

const ppp = p.then(succResult => {//resolve를 받아줄 then
    console.log('succResult:',succResult,p);
    return new Promise(resolve => resolve('okPPP'));
}).catch(error => {
    console.log('error:',error);
})


ppp.then(x => console.log('ppp:',x));
p.then(x => console.log('p:',x));

/* await을 할 수 있는 것은 promise 뿐임. */
console.log('----------------------------');




setTimeout( function() {
    console.log('depth1', new Date());
    setTimeout( function() {
        console.log('depth2', new Date());
        setTimeout( function() {
            console.log('depth3', new Date());
            throw new Error('Already 3-depth!!');
        }, 3000 );
    }, 2000);
}, 1000);


/* console.log('----------------------------');
  function delay (ms) {
      return 
    }
    
    //const depthTimer = depth =>
    //    new Promise((resolve,reject) => {
    //        setTimeout() => {
    //            console.log(`depth${depth}`, new Date().getSeconds());
    //            if (depth>=3) reject (new Error('Already 3-depth!!')) 
    //                resolve(depth+1);
//
    //        }
    //    }
    
    console.log('START!', new Date());

    depthTimer(1)
        .then(depthTimer).then(depthTimer).catch(console.error); */
        





