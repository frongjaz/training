import React, { useState } from 'react';
import './activity.css';

function Activity() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App" >
      
      <div id="container" style={{ width: '300px', height: '600px' }}>
      <h1>กิจกรรม</h1>
        <div id="outputBox">
          <p>{inputText}</p>
        </div>
        <div id="longBox">
          <input
            type="text"
            id="textInput"
            placeholder="กรอกข้อความที่นี่"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Activity;
