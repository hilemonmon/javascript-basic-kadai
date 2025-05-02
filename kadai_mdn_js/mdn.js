// 現在の日付を取得
const today = new Date();

// 年、月（0始まりなので+1）、日を個別に取得
const year = today.getFullYear();
const month = today.getMonth() + 1;  // getMonth() は 0〜11 を返す
const date = today.getDate();

// "2024年10月12日" の形式で出力
console.log(`${year}年${month}月${date}日`);
