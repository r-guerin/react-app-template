import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

if (container) {
  const root = createRoot(container);
  root.render(<h1>This is my React template app</h1>);
}
