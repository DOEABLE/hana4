const str = 'Senior Coding Learning JS';

const r =str.replace(/[A-Z]/g, (...args) => {
    console.log(args)
return args[0].toLowerCase();
}
    


const r2 = str.replace(/[A-z]/g, (...args)=>{
    console.log(args);
    return args[0].toLowerCase();
})
console.log(r2);


/* 연1 ex) 대문자->소문자, 소문자-> 대문자*/
const total = {price: 45000, vat: 4500};
/* template tag func로 만들기 */

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);


/* 연2 */
