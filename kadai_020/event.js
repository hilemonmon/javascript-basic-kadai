// HTML要素を定数に代入
const button = document.getElementById("btn");
const textElement = document.getElementById("text");

// ボタンがクリックされた時の処理を設定
button.addEventListener("click", () => {
  textElement.textContent = "クリックされました！";
});
