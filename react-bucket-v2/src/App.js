import React from "react";
import "./App.css";
import BucketMain from "./main/BucketMain";

function App() {
  return (
    <div className="App">
      {/* 제일 상위에 있는 "App"은 지우명 안됨. */}
      <header className="App-header">
        <h2>MY BUCKET LIST</h2>
      </header>
      <BucketMain />
    </div>
  );
}

export default App;
