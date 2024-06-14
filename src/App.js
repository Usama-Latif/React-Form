// src/App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => { }, []);

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: Date.now(), text: newItem }]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEditItem = (id) => {
    const item = items.find(item => item.id === id);
    setEditingItem(item);
    setEditingText(item.text);
  };

  const handleUpdateItem = () => {
    setItems(items.map(item => (item.id === editingItem.id ? { ...item, text: editingText } : item)));
    setEditingItem(null);
    setEditingText('');
  };

  return (
    <div>
      <h1>CRUD App with React</h1>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleEditItem(item.id)}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingItem && (
        <div>
          <h2>Edit Item</h2>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={handleUpdateItem}>Update Item</button>
        </div>
      )}
    </div>
  );
};

export default App;
