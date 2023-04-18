// 1. var
console.log(name);
var name = "이름";
var name = "이름2";
var name = "이름3";
var name = "이름3";
nmae = "이름";
console.log(name);
// 재할당 가능 불가능 여부
let name2;
name2 = "이름";

const name = "이름";

// 2. function, block scope
// var
var global = "전역";
if (global === "전역") {
    var global = "지역";
    console.log(global); // 지역
}
console.log(global); // 지역 - var는 함수 스코프를 가지기 때문에 가능
// let
let global = "전역";
if (global === "전역") {
    let global = "지역";
    console.log(global); // 지역 - let은 블록 스코프를 가지기 때문에 가능
}
console.log(global); // 전역
let global = "전역";
{
    let global = "지역";
    console.log(global); // 지역 - let은 블록 스코프를 가지기 때문에 가능
}
console.log(global); // 전역

//  const 재할당
const person = {
    name: "kim",
    age: 30,
};

//TypeError: Assignment to constant variable.
person = {
    name: "dd",
    age: 23,
};

person.name = "dd";
person.age = 23;

person.push({
    name: "dd",
    age: 23,
});

// 임시 변수 제거 - 변수를 만들고 값을 할당하기 보단 바로 리턴하는 방향으로 수정
function getElements() {
    return {
        title: document.querySelector(".title"),
        text: document.querySelector(".text"),
        value: document.querySelector(".value"),
    };
}

// 함수를 한 번 더 추상화하여 재사용하는 방식도 가능
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max + 1) + min);
}
function getRandomNum2() { // 명령형에 가까운 코드로 임시변수가 계속 수정되어 예측하기 어려워진다
    const random = getRandomNum(1, 2);
    return random; // 로직 처리
}

function getSomeVal(params) {
  let tmpVal = ''

  for (let index = 0; index < array.length; index++) {
    temp = array[index];
    temp += array[index];
  }

  if (tmpVal ?? ) {
    tmpVal = ??
  } else if (tmpVal ??) {
    temp += ??
  }
  return temp //
}

// hoisiting -
var global = 0

function outer() {
  var global
  console.log(global) // undefined
    // var global = 5 var 키워드는 선언과 할당부분이 불리
  global =5

 function inner() {
var global =  10
  console.log(global) // 10
  }
  inner()
  global = 1
  console.log(global) // 10
}
outer()

const sum = function(){

}