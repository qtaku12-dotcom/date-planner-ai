import React, { useState } from 'react';
import './App.css';

interface PlanData {
  gender: string;
  age: string;
  transport: string;
  budget: string;
  food: string;
}

function App() {
  // 1. フォームの状態をまとめて管理
  const [formData, setFormData] = useState<PlanData>({
    gender: '男性',
    age: '30',
    transport: '徒歩・自転車',
    budget: '10000',
    food: 'イタリアン'
  });

  const [result, setResult] = useState<string>('');

  // 2. 入力が変わった時にデータを更新する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // 3. ボタンを押した時の処理
  const showResult = () => {
    setResult(`【AI提案中】${formData.age}歳の${formData.gender}の方へ。予算${formData.budget}円で${formData.food}を楽しむ、${formData.transport}移動のプランを作成します...`);
  };

  return (
    <div className="body">
      <h1>デートプランナー</h1>
      <p>AIがあなたに最高のデートを提案します。</p>

      <div className="app-background">
        <label className="genderlabel"> 👭 あなたの性別は？</label><br />
        <select id="gender" value={formData.gender} onChange={handleChange}>
          <option value="男性">男性</option>
          <option value="女性">女性</option>
          <option value="その他">その他/回答したくない</option>
        </select>
        
        <br /><br />

        <label className="agelabel"> 👨 年齢は？</label><br />
        <input type="number" id="age" value={formData.age} onChange={handleChange} />
        
        <br /><br />

        <label className="transportlabel"> 🚗 移動手段は？</label><br />
        <select id="transport" value={formData.transport} onChange={handleChange}>
          <option value="徒歩・自転車">徒歩・自転車</option>
          <option value="車">車</option>
          <option value="電車">電車</option>
        </select>

        <br /><br />
        
        <label className="budgetlabel">💰 予算は？</label><br />
        <input type="number" id="budget" value={formData.budget} onChange={handleChange} />
        
        <br /><br />

        <label className="foodlabel">🍽 食べたいものは？</label><br />
        <select id="food" value={formData.food} onChange={handleChange}>
          <option>イタリアン</option>
          <option>和食（お寿司など）</option>
          <option>フレンチ</option>
          <option>カジュアルな居酒屋</option>
        </select>

        <br /><br />
        <button type="button" onClick={showResult} className="button">
          AIにプランを提案してもらう!
        </button>
      </div>

      {result && (
        <div id="resultArea" style={{display: 'block'}}>
          <h3>💖 AIからの提案プラン</h3>
          <p id="resultText">{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
