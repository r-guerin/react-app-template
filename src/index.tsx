import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>This is my React template app</h1>;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);