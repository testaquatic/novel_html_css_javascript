function askName() {
  const name = prompt("당신의 이름을 알려주세요!");
  if (name) {
    printResult(
      `안녕하세요, ${name}님 JavaScript와 함께 즐거운 시간 보내세요!`,
    );
  }
}

function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userGuess = prompt("1부터 10까지 숫자 중 하나를 맞춰보세요!");
  const userGuessNumber = Number(userGuess);

  if (isNaN(userGuessNumber)) {
    printResult("숫자를 입력해주세요.");
    return;
  }

  if (userGuessNumber === randomNumber) {
    printResult(`정답입니다! 숫자는 ${randomNumber}였어요!`);
  } else {
    printResult(
      `아쉽네요! 정답은 ${randomNumber}였어요. 당신이 선택한 숫자는 ${userGuess}였습니다.`,
    );
  }
}

function showTime() {
  const now = new Date();
  const timeString = now.toLocaleString("ko-KR");
  printResult(`현재 시간: ${timeString}`);
}

function printResult(result: string) {
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.innerHTML = result;
  }
}

/// 대충 null 처리를 했다.
function start() {
  document
    .getElementById("askName")!
    .addEventListener("click", () => askName());
  document
    .getElementById("guessNumber")!
    .addEventListener("click", () => guessNumber());
  document
    .getElementById("showTime")!
    .addEventListener("click", () => showTime());
}

start();
