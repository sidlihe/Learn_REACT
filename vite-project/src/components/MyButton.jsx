import React from 'react';

// We add 'onClick' to our destructured props
function MyButton({ text, onClick }) {
  return (
    <button 
      onClick={onClick} // We attach the onClick prop to the HTML button element
      style={{
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;