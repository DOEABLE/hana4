const students = [
  "평균",
  "중앙값",
  "최빈값",
  "표준편차",
  "25퍼센타일",
  "75퍼센타일",
  "최소값",
  "최대값",
  "왜도",
  "첨도",
  "평균",
  "표준 오차",
  "중앙값",
  "최빈값",
  "표준 편차",
  "분산",
  "첨도",
  "왜도",
  "범위",
  "최소값",
  "최대값",
  "합",
  "관측수",
  "홍길동",
  "정약용",
  "신사임당",
  "유관순",
  "김도희",
  "김도금",
  "윤지은",
];
const inps = document.getElementsByTagName("input");
console.log("******", inps);

//const seats = [...inps].filter((inp) => !inp.value); /* 하이픈은 뺄거야 */
//console.log("🚀 ~ seats:", seats); /* seats에 가져가서 ctrl+alt+L */
///* Loof Test*/
//for(let i =0; i< students.length; i++){
//    seats[0].value = students[0];
//}

/* random */
function set(student) {
  const seats = [...inps].filter((inp) => !inp.value);
  //console.log("🚀 ~ set ~ seats:", seats);
  const seat = Math.floor(Math.random() * seats.length); //idx를 출력하면 0~0.999의 랜덤한 함수가 나온다.
  //console.log("🚀 ~ set ~ seat:", seat);
  seats[seat].value = student;
}

function start() {
  let idx = 0;
  const intl = setInterval(() => {
    if (idx < students.length) {
      set(students[idx++]); /* 100이면 1000보다 더 빠르게 출력됨 */
      /* if (idx >= students.length) clearInterval(intl);
        }, 500); */
    } else {
      clearInterval(intl);
      openMessage();
    }
  }, 100);
}

//안내창 열기 함수
function openMessage() {
  const newWindow = window.open("", "_blank", "width=300,height=200");
  newWindow.document.write("<h1>주의</h1>");
  newWindow.document.write("<p>좌석은 차주 월요일 부터 적용됩니다.</p>");
  newWindow.document.close(); // 문서 닫기
}
