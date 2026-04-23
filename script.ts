
function showResult() {
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const budget = document.getElementById('budget').value;
    const food = document.getElementById('food').value;
    const transport= document.getElementById('transport').value;
    let message = `${age}歳の${gender}の方へ、${transport}という移動手段で、
    ${budget}円で楽しめる「${food}」のデートプランを考えています...<br><br>`;
    
    message += "✨ **おすすめプラン** ✨<br>";
    message += "心理学的には、最初にお互いの共通点を見つけると親密度が上がります。";
    message += "まずは落ち着いた雰囲気の店で会話を楽しみましょう！";

    const resultArea = document.getElementById('resultArea');
    const resultText = document.getElementById('resultText');

    resultText.innerHTML = message; 
    resultArea.style.display = 'block'; 
    
    resultArea.scrollIntoView({ behavior: 'smooth' });
}

