import React from 'react';
import MyButton from './components/MyButton';

function App() {
  // Define a helper function to handle the Save click
  const handleSaveClick = () => {
    alert('Save button was clicked!');
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Handling Events</h1>
      <p>Click the buttons below to trigger different actions:</p>
      
      {/* 1. Passing a pre-defined function */}
      <MyButton text="Save" onClick={handleSaveClick} />
      
      {/* 2. Passing an inline arrow function */}
      <MyButton text="Cancel" onClick={() => alert('Cancel button was clicked!')} />
      
      {/* 3. Passing another inline function */}
      <MyButton text="Delete" onClick={() => alert('Delete button was clicked!')} />
    </div>
  );
}

export default App;