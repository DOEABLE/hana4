/**0828수 6교시
 * once 함수 용도:
 * once의 친구들 :later(조금있다 실행해라), next() dom이 메모리에 다 올라가고 실행해라.
 * 1초에 한명만 이벤트를 클릭할 수 있게 하는 것이, queue를 이용해서 서버를 이용하는 것보다 이득이다.
 */
//연습문제 1 p.159
const fnx = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fnx(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fnx(2, 7)); // undefined
console.log(fnx(3, 8)); // undefined



function fivePart(x, y) {
    return `fivePart ${x}, ${y}, id: ${this.id}`;
  }
  const fn = once(fivePart.bind({ id: 11 }));
  console.log(fn(1, 2));
  const fn2 = once(fivePart);
  console.log(fn2.bind({ id: 22 })(3, 4));
  
  function once(f, rebirthDelay = 1000) {
    let done = false;
    return function (...args) {
      if (done) return;
      done = true;
      setTimeout(() => (done = !done), rebirthDelay);
      // return f.bind(this)(...args);
      return f.apply(this, args);
      // return f.call(this, ...args);
    };
  }
  
  function test() {
    const maxRunCnt = 20;
    let runCnt = 0;
    const intl = setInterval(() => {
      console.log(fn(3, 8));
      if (++runCnt >= maxRunCnt) clearInterval(intl);
    }, 100);
  }







/*<idea> 확장
<try this>
세 줄을 다 결과값을 받았다면
매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
(test 요령: 0.1초 한 번씩 - setInterval - 실행하게 해놓고, 1초 후에 초기화)
cf. function once(f, rebirthDelay = 1000) {}*/