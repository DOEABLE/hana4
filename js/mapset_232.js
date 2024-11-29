const assert = require('assert');

/* 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오. (key: id) */
const hrTeam = {id: 1, dname: '인사팀'};   // 홍길동 (인사팀)
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];  // ⇒ deptMap = new Map();
const deptMap = new Map(
    depts.map(detp => [dept.id, dept]));   //deptMap.set(team.id, team)
console.log(deptMap);




depMap.set(hrTeam.id, hrTeam);
depMap.set(devTeam.id, devTeam);

const EmpMap = new Map();
emps.forEach(emp => empMap.set(emp.id, emp));

const hong = {id: 1, name: 'Hong', dept: 1};  // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = {id: 2, name: 'Kim', dept: 2};

const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];
console.log(deptMap);   // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)
console.log(empMap);    // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }





console.log('----------------------');
const empDept = new Map(
    [...empMap.values()].map({id,name}emp => [emp, deptMap.get(emp.dept)])
);
console.log(empDept);   // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }


console.log(empDept.get(kim).dname); 
assert.strictEqual(empDept.get(kim)?.dname, devTeam,dname);            // '개발팀'



// 개발팀 직원 목록 출력 ⇒ Kim, Park, Choi
const r = [...empDept].filter()


function getEmp(empId){
    // {id:1, name: 'Hong', dept: {id:1, dname: 'Sale'}}
}