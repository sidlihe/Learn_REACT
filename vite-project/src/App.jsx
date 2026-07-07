import React, { useState, useEffect } from 'react';
// Import our services and subcomponents
import { itemService } from './services/itemService';
import ItemForm from './components/ItemForm';

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // Fetch items using the service layer
  useEffect(() => {
    itemService.getItems()
      .then((data) => setItems(data))
      .catch(() => setError('Failed to load items.'));
  }, []);

  // Add items using the service layer
  const handleAddItem = (itemName) => {
    itemService.addItem(itemName)
      .then((updatedItems) => setItems(updatedItems))
      .catch(() => setError('Failed to add item.'));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Modular Full-Stack App</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Render the extracted form component */}
      <ItemForm onAddItem={handleAddItem} />

      <h3>Current Shopping List:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ fontSize: '18px', padding: '5px 0' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;