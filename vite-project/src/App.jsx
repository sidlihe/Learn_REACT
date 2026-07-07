import React, { useState } from 'react';
import MyButton from './components/MyButton';

function App() {
  // State to track if the secret message should be visible (starts as false)
  const [showSecret, setShowSecret] = useState(false);

  const toggleSecret = () => {
    // !showSecret toggles the boolean value (true becomes false, false becomes true)
    setShowSecret(!showSecret);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Conditional Rendering</h1>
      
      {/* 1. Dynamic Button Text using a Ternary Operator (condition ? value_if_true : value_if_false) */}
      <MyButton 
        text={showSecret ? "Hide Secret Message" : "Show Secret Message"} 
        onClick={toggleSecret} 
      />

      {/* 2. Conditional Display using the Logical AND (&&) operator */}
      {/* If showSecret is true, render the <p> tag. If false, render nothing. */}
      {showSecret && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#e2f0d9',
          border: '1px solid #385723',
          borderRadius: '5px'
        }}>
          <p>🔒 <strong>Secret Code: ReactIsAwesome123</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;