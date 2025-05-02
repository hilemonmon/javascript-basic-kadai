// HTML要素を定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時のイベント処理
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）後に文章を変更する非同期処理
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
