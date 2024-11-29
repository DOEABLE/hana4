globalThis.name = 'GlobalName'; //global 객체
this.name = 'ModuleName';       
this.module_age = 33;



const obj1 = {
    name: 'ObjName',
    bark1: function() {
      console.log('1=', this.name);             
      const self = this;                        
      setTimeout( function() {                  
        console.log('11=', self.name);
        console.log('12=', this);               
      }/* .bind(this)  */,1000);                
      console.log('xxxx');
    },

    bark2() { 
      console.log('2=', this.name);
      setTimeout(() => {                        
        console.log('22=', this.name);      
      }, 1000);
    },

    bark3() { 
      function innerFn() {                    //innerFn의 function Object는 bark3의 Environment Record를 향함.
        console.log(this.name);               // globalName!
      }
      innerFn();                              //따로 바인딩 된 것이 없으므로 global object를 향하고 있다
    },

    bark4: () => {
      console.log(this.name);                 // 화살표 함수이므로 this를 가질 수 없기 때문에 moduleName 출력
    },     
    /* bark4: function (){
      console.log(this.name);
    }  */        
  };
  
  //obj.bark1(); // vs  var x = obj.bark1; ==> bark1.bind(obj)() -> this가 obj가 되었다.
  //obj.bark2();    //결과: 2= ObjName, 22=ObjName
  //obj.bark3();
  //obj.bark4();        //함수 선언문이 아니므로 globalObject를 가리킬 수 없다. 
  
  //const fff = obj.bark1;
  //fff();              //obj를 바인딩하지 않음. -> globalObject를 가리키고 있다.






//p.148
// ⇔ function declareFn(name) {
const expressFn = function(name) {                          //얘가 가리키고 있는 곳 : module
  // if, 'use strict' ?
  this.name = name;
  console.log(this, new.target, this.name, name);           //new.target은 new로 부르지 않아서 undefined. new로 불리면 자기자신의 주소를 가진 function object를 가짐.
}


const arrowFn = (name) => {                                 //this를 가질 수 없어 arrowFn이 몸담고 있는 곳의 this를 갖는다. -> module
  this.name = name;
  console.log(this, new.target, this.name, name);           //this가 없음 : undefined,
}
expressFn('expfn');
arrowFn('afn');

//const dfn = new expressFn('D');
//console.log("🚀 ~ dfn:", dfn.name)                          //D출력
//const afn = new arrowFn('A');                               //TypeError: arrowFn is not a constructor
//화살표 함수라 constructor와 this를 가질 수 없어. -> new로 부를 수 없다.


/* 이전 페이지의 expressFn, arrowFn에
this를 각각 hong과 kim으로 지정(binding)해 보세요. */
const hong = {id: 1, name: 'Hong'};
const kim = {id: 2, name: 'Kim'};
expressFn.bind(hong)('expfn');
arrowFn.call(kim,'afn');
arrowFn.apply(kim,['afn']);





console.log('--------------------------------');
const Dog = function(name) {
  console.log(this, new.target, 
              this instanceof Dog);
  this.name = name;
  this.bark = function () {                     //this에 대한 bark
    console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name);
}

//const dog = Dog('Doggy');                       //  단순히 Dog 함수 실행한 return 값
const lucy = new Dog('Lucy');                   //  lucy는 Dog를 이용해 인스턴스가 생성된 것.
//Dog.bark(); // ?
lucy.bark(); // ?
lucy.bark2(); // ?
//console.log('type=', typeof dog);               //  undefined      
console.log('type=', typeof lucy);              //  인스턴스의 type : object 


/* 화살표 함수 */
const Cat = (name) => {
  console.log(this, new.target);                    //1. module, new.target 없음.(화살표 함수는 new를 부를 수 조차 없음.) 
  this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name, name);
  };
  this.bark2 = () =>
    console.log('bark2=', new.target, this.name, name);

  return
  this;                                      //화살표함수는 this를 가질 수 없기에 부모의 this를 return한다.
}

const cat = Cat('Coco');                            //cat 은 this, this는 module.
// const cat = new Cat('');                         // error!! (not a constructor)
//cat.bark(); // ?
//cat.bark2(); // ?
console.log('type=', typeof cat);                   // object 출력 -> module 이기 때문




console.log('-------this의 동작과 binding-------');
/* const obj = {
  name:'Obj Name',
  printName(){
    console.log(this.name);
  },
};
 */
//const printName = obj.printName;  //0
//obj.printName();                  //1.
//printName.bind(obj)();            //2
//printName();                      //3

/* 1. this는 obj를 참조한다. -> Obj Name
2. printName은 0처럼 obj.printName을 참조하지만, this가 바인딩 되어있어 obj를 참조한다. -> Obj Name
3. printName은 0처럼 obj.printName을 참조하기 때문에 global객체인 'Global Name' 출력 */






console.log('-------P.154 연습문제 1초 후에 강아지의 이름 출력하기-------');
const dog = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);    //
  },
  whatsYourName() {
    //setTimeout(this.showMyName, 1000);
    //setTimeout(() => this.showMyName(), 1000);
    //setTimeout(this.showMyName.bind(this),1000);
  }
};

dog.whatsYourName();


/***
 * 설명:this.showMyName 는  f.o 즉, 함수 call시그니처
 * ${this.name} timtout에는 name이 없으니까 undefined
 *  -> 하지만 우리는 'Maxx'를 찍고싶다.
 */
globalThis.id = 'Global_Id';
this.id = 'Module_Id';

const obj = {
  id:123,
  f: function() {
    console.log('obj > f =', this.id);
  },
  arrowFunction: () => console.log('obj > arrowFunction =', this.id),
  subObj: {
    id: 999,
    f: function() {
      console.log('obj > subObj > f =', this.id);
    },
    arrowFunction: () => console.log('obj > subObj > arrowFunction =', this.id),
  },
}
obj.f();  //this.id = 123
obj.arrowFunction();  //undefined
console.log('---------------');
obj.subObj.f();
obj.subObj.arrowFunction();

/* 
- 화살표 함수는 this를 가질 수 없기 때문에 내가 속해있는 부모(obj)에 종속적이다. -> 부모의 this는 Module.
  -> 만약 this.id = 'Module_Id'(모듈)가 없다면 undefined반환. 
- obj = {}의 괄호는 스코프가 아니라 객체의 표기법이다. */