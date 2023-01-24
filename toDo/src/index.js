import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// cada task se pasa a un item del objeto 'data'
const DATA = [
  { id: "todo-0", name: "Eat", completed: "true" },
  { id: "todo-1", name: "Sleep", completed: "false" },
  { id: "todo-2", name: "Repeat", completed: "false" }
];

//se pasa el array data omo un props ('tasks')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
