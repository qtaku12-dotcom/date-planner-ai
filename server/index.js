// server/index.js
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '../.env' }); // 一つ上の階層の.envを読み込む

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/plan', async (req, res) => {
  const { gender, age, transport, budget, food } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      あなたは恋愛心理学のエキスパートです。以下の条件で、心理学的な仕掛けを含めたデートプランを3つ提案してください。
      性別: ${gender} / 年齢: ${age}歳 / 移動: ${transport} / 予算: ${budget}円 / 好きな食べ物: ${food}

      【ルール】
      - 各プランに「吊り橋効果」や「ランチョン・テクニック」などの心理学用語を交えた解説を必ず入れること。
      - 予算と移動手段を守ること。
    `;

    const result = await model.generateContent(prompt);
    res.json({ plan: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AIの呼び出しに失敗しました" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
