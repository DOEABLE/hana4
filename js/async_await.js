const afterTime = sec =>
    new Promise((resolve, reject) => setTimeout(resolve, sec * 1000, sec));

/* const afterTime1 = await afterTime(1);
console.log(afterTime1); */

afterTime(1).then(afterTime1 => console.log(afterTime1))

function f1() {
    afterTime(0.5).then(console.log)
}
async function f2() {
    const r2 = await afterTime(1);
    console.log(r2);
}

const rf1 = f1();
const rf2 = await f2()
console.log(rf1,rf2);


function layout(){
    (async)const r3 = (async() => {
        const r3 = await afterTime(1);
    } 
        
    )
}
