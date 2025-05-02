// 体重(kg)と身長(m)を変数に代入
let weight = 68;     // kg
let height = 1.7;     // m

// BMIを計算する [体重 ÷ (身長 × 身長)]
let bmi = weight / (height * height);

// 結果をコンソールに出力（小数点以下2桁まで表示）
console.log("体重: " + weight + "kg");
console.log("身長: " + height + "m");
console.log("BMI: " + bmi);
