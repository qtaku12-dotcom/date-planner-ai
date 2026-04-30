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
const [aiResponse, setAiResponse] = useState<string>('');
const [isLoading, setIsLoading] = useState<boolean>(false);

const handleSubmit = async () => {
  setIsSubmitted(true);
  setIsLoading(true); // ローディング開始
  setAiResponse("AIが心理学的なプランを考えています...");

  try {
    // 自分で作ったサーバー（ポート5000）にデータを送る
    const response = await fetch('https://curly-fiesta-g4gvj56wgrvv297p4-5000.app.github.dev/api/plan',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setAiResponse(data.plan);
  } catch (error) {
    setAiResponse("サーバーとの通信に失敗しました。");
  } finally {
    setIsLoading(false); // ローディング終了
  }
};

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
    
    <hr /> 

    {/* 2. ここが重要！AIの回答を表示する部分 */}
    {isLoading ? (
      <div className="loading">⏳ AIが心理学的なプランを練っています...</div>
    ) : (
      <div style={{ 
        whiteSpace: 'pre-wrap', 
        textAlign: 'left', 
        backgroundColor: '#fff', 
        padding: '15px', 
        borderRadius: '10px',
        color: '#333' 
      }}>
        {aiResponse || "プランを取得できませんでした。"}
      </div>
    )}
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
