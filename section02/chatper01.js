// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello"; // 비어있지 않은 문자열
let t2 = 123; // 0이 아닌 숫자
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {}; // 화살표 함수

// 3. 활용 사례
let person = { name: "안지훈" };
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}
