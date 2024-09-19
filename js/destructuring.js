function swap(){
    const arr =  [1,2];
    
    [arr[0], arr[1]] = [arr[1], arr[0]] //idea) 그릇이 두개밖에 없다면 주소를 이용해서 서로를 바라보도록 하자!              
    console.log(arr);
    
    
}
swap();

let a=1;
let b=2;
let t=a;
a=b;
b=t;
console.log("🚀 old a ~ b:",a, b);
a=1;
b=2;
[b,a]=[a,b];
console.log("🚀 old a ~ b:",a, b);

const arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log("🚀 arr:", arr);


console.log("---------------------------");
const user ={id, name,arr}
function f1(user){
    console.log(user.id, user.name);
}

function f2({id,name}){
    console.log(name);
}
const f3 =({id,name}) => {console.log(name);}
















const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'};
console.log("----2-----------------------");
//정답1
const {passwd, ...userInfo} = user;

//정답2
const userInfo = {...user};
delete user.passwd;
console.log(userInfo);





console.log("----3-----------------------");
const arr = [[{id:1}], [{id:2},{id:3}]];
const[[{id:id1},{id:id2},{id:id3}]] = arr;
console.log(id1, id2,id3);




console.log("----4-----------------------");
const s = Symbol();
const obj = {[s]:123};
console.log(obj[s],Reflect.ownKeys(obj));
const[kk] = Reflect.ownKeys(obj);
console.log("🚀 ~ kk:", obj[kk]);

function ex4(){
    function  getValueExceptInitial(k){
        const {[k]:val} =user;
        const [,...ret] = val;

        //꼭 받아야하는 로직이면?
        //const [_,...ret] = val; -> 언더스코어 사용
        return (ret.join(''));
        
    }
    console.log(getValueExceptInitial('name')); // 'ong'
    console.log(getValueExceptInitial('passwd')); // 'yz'
    console.log(getValueExceptInitial('addr')); // 'eoul'
}



function ex5(){
    user.f = function(){
        console.log('ffff', this.name);
    };
    console.log("🚀 user:", user);
    
    user.f();
    
    const{f:xf} = user;
    xf(); 
};
