function showResult(): void {
    // 「as HTMLSelectElement」などを付けて、TypeScriptに正体を教えてあげます
    const genderElement = document.getElementById('gender') as HTMLSelectElement;
    const ageElement = document.getElementById('age') as HTMLInputElement;
    const budgetElement = document.getElementById('budget') as HTMLInputElement;
    const foodElement = document.getElementById('food') as HTMLSelectElement;
    const transportElement = document.getElementById('transport') as HTMLSelectElement;

    // 結果表示エリア
    const resultArea = document.getElementById('resultArea') as HTMLDivElement;
    const resultText = document.getElementById('resultText') as HTMLParagraphElement;

    // 値を取得します
    const gender: string = genderElement.value;
    const age: string = ageElement.value;
    const budget: string = budgetElement.value;
    const food: string = foodElement.value;
    const transport: string = transportElement.value;

    let message: string = `${age}歳の${gender}の方へ、${transport}という移動手段で、
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

