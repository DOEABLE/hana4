const assert  = require("assert");

const asster = require(assert)
function ex1() {
    const d1 = new Date('1970-01-01T15:00:00.000Z');
    const d2 = new Date('1970-01-02T15:00:00.000Z');
    console.log("🚀 ~ ex1 ~ d1:", d1);
    1000;
}
console.log(ex1());


assert.strictEqual(ex1(),86400);

function ex2(){
    const d = new Date();
    d.setMonth(d.getMonth() + 1);   //
    d.setDate(0);
    
    /* 중복발생코드
    const randDates = Array(5)
    .fill(0)
    .map(()=> rand(1, lastDate)); */
    const lastDate = d.getDate();
    const randDates = [];
    do {
        randDates = [...new Set(randDates)];
    } while(randDates.length < 5);
    console.log("🚀  d:", d, lastDate, randDates);
}
ex2();
const ret2 = ex2();




const d = new Date();
const nestYear = d.setFullYear(d.getFullYear()+1);
return;
const nextYearWeek = nextYear.getDay();
console.log("🚀 ~ nextYearWeek:", nextYearWeek);

//test code
/* 정렬 되는가? 중복되지 않는가? 
작거나 같으면 통과되지 않도록 짠다.*/