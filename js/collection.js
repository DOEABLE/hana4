/**p.208
 * class와 Array를 이용하여 Stack과 Queue를 구현하시오.
 * ex1) Stack
 * */

class Stack{        //클래스 생성
    #arr;           /* #-> 프라이빗 */
    //new Stack(1,2,3) => [1,2,3]
    //new Stack([1,2,3]) => [[1,2,3]]
    constructor(...args){
        console.log("🚀 ~ Stack ~ constructor ~ args:", args)
        this.#arr = args;
    }

    push(...values){
        console.log(Object.values(arguments));
        if(arguments.legnth === 1){
            this.arr.push(values);
        }else{
            this.arr = [...this.arr, ...values];
        }
        return this.arr;
    }
    pop(){
        return this.#arr.pop();
    }
    toArray(){
        return this.#arr;
    }

    clear(){
        this.#arr.length = 0 ;
    }

    iterator(){
        return this[Symbol.iterator]();
    }

    //이터레이터!!!!!
    *[Symbol.iterator]() {   //이 구간이 꼭 있어야하고
        let idx = 0;
        return {            //next함수를 가진 return을 객체로 해줘야함.
            next: () => {
                return {
                    value: this.#arr[idx] ,
                    len: this.length,
                    done: this.length < idx
                };
            }
        }
    }
}   

const stack = new Stack(); 
assert.deepStrictEqual(stack.toArray(),[]);
stack.push(3); // 추가하기
assert.deepStrictEqual(stack.toArray(),[3]);
stack.pop();
assert.deepStrictEqual(stack.toArray(),[]);

console.log(...stack);
return;


const stackT = new Stack(...[[1],[2]]);
assert.deepStrictEqual(stackT.toArray(),[[1],[2]]);

const stack2 = new Stack(...[1,2]);
assert.deepStrictEqual(stack2.toArray(),[]);
(stack.toArray(),[]);
stack.push(4,5);    //추가하기
assert.deepStrictEqual(stack2)
return;

/* Todo: side-effect
stack.arr=[5,6,7]
assert.throws(""); */



const queue2 = new Queue(1,2,3);
assert.deepStrictEqual