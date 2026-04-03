import { useState } from "react";
import "./App.css";

function App() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic }),
    });

    const data = await res.json();
    setResult(data.answer);

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Study Assistant</h1>
      <p>Type a topic below:</p>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button onClick={handleGenerate}>
          {loading ? "Loading..." : "Generate"}
        </button>
      </div>

      <div className="result">{result}</div>
    </div>
  );
}

export default App;