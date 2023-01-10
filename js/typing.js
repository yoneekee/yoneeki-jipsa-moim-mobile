/********************************* */
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

typing_normal(["집사 모임에", "오신 것을", "정말 환영합니다!"], ".text_0");
typing_normal(["다묘 집사들 모임"], ".text_1");
typing_normal(["노묘 집사들 모임"], ".text_2");
typing_normal(["예비 집사들 모임"], ".text_3");
