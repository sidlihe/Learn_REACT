import React, { useState } from 'react';

function ItemForm({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    
    onAddItem(newItem); // Trigger parent component's function
    setNewItem('');     // Clear the input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Enter new item" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Add Item
      </button>
    </form>
  );
}

export default ItemForm;