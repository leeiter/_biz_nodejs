console.log("나는 자바스크립트 입니다.");

// json type의 객체를 선언
var std = { name: "홍길동", age: 30, tel: "1234" };

// 숫자형 배열을 선언
var arrNumber = [1, 2, 3, 4, 5];

var arrString = ["홍길동", "이몽룡", "성춘향", "장보고"];

// console.log(값, 값, 값) : 각각의 값들을 형변환 하지말고
// 있는 그대로 console에 출력하라.
console.log("객체 : ", std);
console.log("숫자형 : ", arrNumber);
console.log("문자열형 : ", arrString);

// 객체의 요소 중 일부를 변경하고자 할 때
// var std = { name: std.name, age: std.age, tel: std.tel };
var std = { ...std, age: 100 };
std.age = 100;

console.log("객체 std : ", std);

var sum = 0;
// forEach문은 배열을 한개씩 순회하면서
// 요소들을 callback 함수에 전달하며 코드를 수행한다.
// forEach를 이용하여 요소를 연산한 후
// forEach가 끝난 후 값을 조회하면
// forEach의 순회에서 계산된 결과가 정확히
// 조회된다는 보장이 없다.
// forEach는 비동기 방식이기 때문에
arrNumber.forEach(function(item, index, originalArray) {
  sum += item; // 1번코드
  sum += originalArray[index]; // 1번과 같은 연산 코드
});
arrNumber.forEach(item => {});

// 배열 순회 후에 연산 결과를 보장받으려면
// 전통적 for를 사용해야 한다.
for (let i = 0; i < arrNumber.length; i++) {
  sum += arrNumber[i];
}
console.log("합계 : ", sum);

// 배열을 순회하면서
// 각 요소를 callback함수에 전달하고
// callback 함수가 return하는 값들을 모아서
// 다른 배열로 생성해 준다.
const arrNumber2 = arrNumber.map(num => {
  return num + 2;
});
console.log("원래 배열 : ", arrNumber);
console.log("map 이후 배열 : ", arrNumber2);

var arrString = ["홍길동", "이몽룡", "성춘향", "장보고", "성춘향"];

// find는 배열 요소 중 값 찾기
// 화살표 함수에서
// 다른 코드가 없이 return문 한줄만 있을 경우
// 함수 몸체의 {}를 생략하고 return 키워드를 사용하지 않는다.
// 화살표 함수의 매개변수가 1개만 있을 때는 () 없이 사용
//      매개변수가 1개도 없을 때는 빈(blank) 괄호만 반드시 사용
//      매개변수가 2개 이상일 때는 필수 적으로 괄호로 묶는다.
const arrString2 = arrString.find(item => item === "성춘향");

// 찾는 item이 몇번째 요소에서 처음 나타났나?
const index = arrString.findIndex(item => item === "성춘향");
console.log("성춘향 : ", index, arrString2);

const arrString3 = arrString.find(item => {
  console.log(item);
  return item === "장영실";
});
console.log("장영실 : ", arrString3);

const arrNumber3 = [4, 6, 1, 1, 1, 5, 7, 3, 2, 6, 8, 6, 4];
const evenNumber = arrNumber3.filter(item => {
  return item % 2 === 0;
});
console.log("짝수 : ", evenNumber);

const arrNumber4 = [1, 2, 3, 4, 5];
// acc = 0으로 시작을 하고
// arrNumber4의 각 요소를 item에 보내고
// 내부에서 코드를 실행한 후 결과값을 return
// forEach 수행이 끝난 후 연산 결과를 조회했을 때
// 연산 결과의 정확도를 보장할 수 없는 문제를
// 해결한 함수
const reduce = arrNumber4.reduce((acc, item) => {
  return acc + item;
});
console.log("reduce : ", arrNumber4, reduce);

// 1차원 배열일 결우 배열을 정렬하는 기능
const sortString = arrString.sort();
console.log("정렬 : ", sortString);

// callback 함수를 사용해서 역순 정렬
// callback 함수에서 결과 조건을 연산한 후
// -1이나 1을 return하면 정렬을 acc, desc를 변환할 수 있다.
const sortString2 = arrString.sort((item1, item2) => {
  if (item1 > item2) return -1;
});
console.log("정렬 : ", sortString2);

const mask = [
  { name: "가든약국", state: "P" },
  { name: "뒷집약국", state: "E" },
  { name: "앞집약국", state: "E" },
  { name: "푸른약국", state: "S" },
  { name: "중흥약국", state: "E" },
  { name: "용봉약국", state: "P" },
  { name: "전대약국", state: "E" },
  { name: "조대약국", state: "P" },
  { name: "충장약국", state: "E" }
];

const p_mask = mask.filter(item => item.state === "P");
console.log("p_mask : ", p_mask);

const e_mask = mask.filter(item => item.state === "E");
console.log("e_mask : ", e_mask);

const p_sort_mask = p_mask.sort((item1, item2) => {
  if (item1.name > item2.name) return 1;
});
console.log("p_sort_mask : ", p_sort_mask);

const e_sort_mask = e_mask.sort((item1, item2) => {
  if (item1.name > item2.name) return 1;
});
console.log("e_sort_mask : ", e_sort_mask);

const mask_list = [...p_sort_mask, ...e_sort_mask];
console.log("마스크 구입처:", mask_list);
