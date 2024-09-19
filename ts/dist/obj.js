"use strict";
let xuser;
xuser = { id: 1, name: 'xx' }; // OK
//xuser = {id: 1}; // Error (Property 'name' missing in type)
//xuser = {id: 1, name: 'xx', age: 30};   //바로는 못쓴다..
const tmp = { id: 1, name: 'xx', age: 30 }; //'할당'하면 freshness 꺼짐
xuser = tmp; // Error ({id, name, age} is not assignable to type {id,name} )
//let hong: TUser;
//hong = {id: 1, name: 'Hong'}; // OK
//hong = {id: 1}; // Error (name property missing)
//hong = {id: 1, name: 'Hong', addr: 'Pusan'}; // Error(not assignable)  Freshness!
//hong = {id: 1, name: 'Hong', addr: 'Pusan'} as TUser; // OK (turn-off Freshness!) TUser타입으로 등록
