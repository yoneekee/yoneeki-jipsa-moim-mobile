/********************************* */

const lastLeft = " ";
const typing_normal = function (textArray, className) {
  const $text = document.querySelector(className);
  const letters = textArray;
  const speed = 100;
  let i = 0;
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  const typing = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift();
    }

    await wait(150);

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

  setTimeout(typing, 800);
};

typing_normal(
  ["집사 모임에", "오신 것을", "정말 정말", "환영합니다!"],
  ".text_0"
);
typing_normal(["집사 모임에서 제일 귀여운", "고양이 선발합니다."], ".text_1");
typing_normal(
  ["유튜버 냥냥 님 강의", "모임 장소는", "종로3가 근처", "ᓚᘏᗢ"],
  ".text_2"
);
