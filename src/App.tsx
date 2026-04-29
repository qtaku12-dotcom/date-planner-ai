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

  const [formData, setFormData] = useState<PlanData>({
    gender: '男性',
    age: '30',
    transport: '徒歩・自転車',
    budget: '10000',
    food: 'イタリアン'
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  }

  const handleBack = () => {
    setIsSubmitted(false);
  }

  return (
    <div className="body">
      <h1>AINOTE</h1>

  {!isSubmitted ? (/* --- 入力画面 --- */<div className="input-screen">
      <p>AIの手（アイノテ）であなたの恋愛をサポートします。</p>

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
        <button type="button" onClick={handleSubmit} className="button">
          AIにプランを提案してもらう!
        </button>
      </div>
</div>
  ) : (
    /* --- 結果画面 --- */
    <div className="result-screen">
      <div id="resultArea" style={{ display: 'block', textAlign:'center' }}>
          <h3>💖 AIからの提案プラン</h3>
          <div className="result-card">
            <p>
            <strong>{formData.age}歳</strong>の
            <strong>{formData.gender}</strong>の
            方へ。<br />
            予算<strong>{formData.budget}円</strong>を楽しむ、<br />
            <strong>{formData.transport}</strong>移動プランをこちらに作成しました！
            </p>
          </div>
          <br />
          <button type="button" onClick={handleBack} className="button secondary">条件を変えてやり直す</button>
      </div>
        </div>
      )}
    </div>
  );
}
export default App;
