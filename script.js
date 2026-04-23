"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showResult() {
    // 「as HTMLSelectElement」などを付けて、TypeScriptに正体を教えてあげます
    const genderElement = document.getElementById('gender');
    const ageElement = document.getElementById('age');
    const budgetElement = document.getElementById('budget');
    const foodElement = document.getElementById('food');
    const transportElement = document.getElementById('transport');
    // 結果表示エリア
    const resultArea = document.getElementById('resultArea');
    const resultText = document.getElementById('resultText');
    // 値を取得します
    const gender = genderElement.value;
    const age = ageElement.value;
    const budget = budgetElement.value;
    const food = foodElement.value;
    const transport = transportElement.value;
    let message = `${age}歳の${gender}の方へ、${transport}という移動手段で、
    ${budget}円で楽しめる「${food}」のデートプランを考えています...<br><br>`;
    message += "✨ **おすすめプラン** ✨<br>";
    message += "心理学的は、最初にお互いの共通点を見つけると親密度が上がります。";
    message += "まずは落ち着いた雰囲気の店で会話を楽しみましょう！";
    // 最後に「もし存在したら実行してね」というチェックを入れます
    if (resultText && resultArea) {
        resultText.innerHTML = message;
        resultArea.style.display = 'block';
        resultArea.scrollIntoView({ behavior: 'smooth' });
    }
}
//# sourceMappingURL=script.js.map