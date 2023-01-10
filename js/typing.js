"use strict";

/****** (1) 함수 */
// const content = "야, 너도 할 수 있어!" + "\n" + "고양이 집사!";
// const text = document.querySelector(".text");

// let index = 0;

// function sleep(delay) {
//   const start = new Date().getTime();
//   while (new Date().getTime() < start + delay);
// }

// function typing() {
//   text.textContent += content[index++];
//   if (index > content.length) {
//     text.textContent = "";
//     index = 0;
//     sleep(400);
//   }
// }

// setInterval(typing, 200);

/****** (2)--0 함수 */
const $text = document.querySelector(".text--0");

// 글자 모음
const letters = ["집사 모임 커뮤니티에", "오신 것을", "환영합니다 "];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i + 1] ? 0 : i + 1;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 1500);

/****** (2)--0 함수 */
const $text_1 = document.querySelector(".text--1");
