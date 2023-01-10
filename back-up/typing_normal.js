let array;
let className;

const typing_normal = function (array, className) {
  const $text = document.querySelector(className);
  const letters = array;
  const speed = 100;
  let i = 0;

  const typing = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift();
    }

    await wait(200);

    remove();
  };

  const remove = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      letter.pop();
      $text.innerHTML = letter.join("");
    }

    i = !letters[i + 1] ? 0 : i + 1;
    typing();
  };

  setTimeout(typing, 1000);
};

//"use strict";

/****** (1) 함수 */
/*const content = "야, 너도 할 수 있어!" + "\n" + "고양이 집사!";
const text = document.querySelector(".text");
let index = 0;

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function typing() {
  text.textContent += content[index++];
  if (index > content.length) {
    text.textContent = "";
    index = 0;
    sleep(400);
  }
}

setInterval(typing, 200);
<!-- 
<div class="intro">
          <h1 class="text"></h1>
        </div> 
        -->
*/

/****** (2)--0 함수 */

/** wait */
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

const $text_0 = document.querySelector(".text_0");

// 글자 모음
const letters_0 = ["집사 모임 커뮤니티에", "오신 것을", "환영합니다 "];

// 글자 입력 속도
const speed_0 = 100;
let i_0 = 0;

// 타이핑 효과
const typing_0 = async () => {
  const letter_0 = letters_0[i_0].split("");

  while (letter_0.length) {
    await wait(speed_0);
    $text_0.innerHTML += letter_0.shift();
  }

  // 잠시 대기
  await wait(500);

  // 지우는 효과
  remove_0();
};

// 글자 지우는 효과
const remove_0 = async () => {
  const letter_0 = letters_0[i_0].split("");

  while (letter_0.length) {
    await wait(speed_0);

    letter_0.pop();
    $text_0.innerHTML = letter_0.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i_0 = !letters_0[i_0 + 1] ? 0 : i_0 + 1;
  typing_0();
};

// 초기 실행
setTimeout(typing_0, 0);

/****** (2)--1 함수 */
const $text_1 = document.querySelector(".text_1");

// 글자 모음
const letters_1 = ["다묘 집사들 모임", "다묘 집사들 모임", "다묘 집사들 모임"];

// 글자 입력 속도
const speed_1 = 100;
let i_1 = 0;

// 타이핑 효과
const typing_1 = async () => {
  const letter_1 = letters_1[i_1].split("");

  while (letter_1.length) {
    await wait(speed_1);
    $text_1.innerHTML += letter_1.shift();
  }

  // 잠시 대기
  await wait(200);

  // 지우는 효과
  remove_1();
};

// 글자 지우는 효과
const remove_1 = async () => {
  const letter_1 = letters_1[i_1].split("");

  while (letter_1.length) {
    await wait(speed_1);

    letter_1.pop();
    $text_1.innerHTML = letter_1.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i_1 = !letters_1[i_1 + 1] ? 0 : i_1 + 1;
  typing_1();
};

// 초기 실행
setTimeout(typing_1, 1000);

/****** (2)--2 함수 */
const $text_2 = document.querySelector(".text_2");

// 글자 모음
const letters_2 = ["노묘 집사들 모임", "노묘 집사들 모임"];

// 글자 입력 속도
const speed_2 = 100;
let i_2 = 0;

// 타이핑 효과
const typing_2 = async () => {
  const letter_2 = letters_2[i_2].split("");

  while (letter_2.length) {
    await wait(speed_2);
    $text_2.innerHTML += letter_2.shift();
  }

  // 잠시 대기
  await wait(200);

  // 지우는 효과
  remove_2();
};

// 글자 지우는 효과
const remove_2 = async () => {
  const letter_2 = letters_2[i_2].split("");

  while (letter_2.length) {
    await wait(speed_2);

    letter_2.pop();
    $text_2.innerHTML = letter_2.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i_2 = !letters_2[i_2 + 1] ? 0 : i_2 + 1;
  typing_2();
};

// 초기 실행
setTimeout(typing_2, 1000);

/****** (2)--3 함수 */
const $text_3 = document.querySelector(".text_3");

// 글자 모음
const letters_3 = ["예비 집사들 모임"];

// 글자 입력 속도
const speed_3 = 100;
let i_3 = 0;

// 타이핑 효과
const typing_3 = async () => {
  const letter_3 = letters_3[i_3].split("");

  while (letter_3.length) {
    await wait(speed_3);
    $text_3.innerHTML += letter_3.shift();
  }

  // 잠시 대기
  await wait(200);

  // 지우는 효과
  remove_3();
};

// 글자 지우는 효과
const remove_3 = async () => {
  const letter_3 = letters_3[i_3].split("");

  while (letter_3.length) {
    await wait(speed_3);

    letter_3.pop();
    $text_3.innerHTML = letter_3.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i_3 = !letters_3[i_3 + 1] ? 0 : i_3 + 1;
  typing_3();
};

// 초기 실행
setTimeout(typing_3, 1000);
