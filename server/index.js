require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/explain", async (req, res) => {
  const { topic } = req.body;

  try {
    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `Explain ${topic} in simple terms for a student. Also give one short example.`
    });

    res.json({ answer: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ answer: "Something went wrong." });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});