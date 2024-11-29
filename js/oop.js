const obj = {id: 1, name: 'Hong'};
// cf. obj = {..., __proto__: { x: 11 }};

console.log('obj.toString>>', obj.toString);
console.log(
    Object.getPrototypeOf(obj) === Object.prototype
  === obj.constructor.prototype === obj.__proto__

);
class Animal {
  // instance(this) + prototpye 생성! (무엇보다 먼저 실행!)
  constructor(name) { // {name: …}
    this.name = name || super.constructor.name;
  }
} 
const dog = new Animal('Dog');
console.log('obj.keys=', Object.keys(obj));
console.log('animalKey=', Object.keys(dog)); 
for (let k in dog) console.log('k=', k);
console.log('oh=', obj.hasOwnProperty('id'));
console.log('dh=', dog.hasOwnProperty('id'));




console.log('---------------------');
class Emp {
    firstName;
    lastName;
}

const hong = new Emp();
hong.fullName = 'Kildong Hong';
hong.fullName = 'Lee';



const handler = {
    set(target, prop, value) {
        if(prop === 'fullName') {
            const [first, last] = value.split(' ');
            target.firstName = first;
            target.lastName = last.toUpperCase();
            return true;
        }
        return false;
    },
    get(target, prop) {
        if(prop === 'fullName'){
            return '${target.firstName} ${target.lastName}';
        }
        return target[prop];
    }
}
const proxyHong = new Proxy(hong, handler);

//test
const hong = assert.strictEqual(hong.fullName, 'Kildong HONG');
const lee = assert.strictEqual(hong.fullName, 'Kildong LEE');

//console.log(hong.fullName);     // 'Kildong HONG' 출력하면 통과!
//console.log(hong.firstName, hong.lastName);  // 'Kildong LEE' 출력하면 통과!

