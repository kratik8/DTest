import { useState } from "react";
import "./App.css";

function App() {
  const [version, setVersion] = useState("v1.0");
  const [time, setTime] = useState(new Date().toLocaleString());

  const handleDeploy = () => {
    const newVersion = "v" + (Math.random() * 10).toFixed(1);
    setVersion(newVersion);
    setTime(new Date().toLocaleString());
  };

  return (
    <div className="container">
      <h1>🚀 DevOps Deployment Test</h1>

      <div className="card">
        <p><strong>Version:</strong> {version}</p>
        <p><strong>Last Updated:</strong> {time}</p>
      </div>

      <button onClick={handleDeploy}>
        Simulate New Deployment
      </button>

      <p className="info">
        Edit this file → Push → Deploy → Check changes live 🌍
      </p>
    </div>
  );
}

export default App;