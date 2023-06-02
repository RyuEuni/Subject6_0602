// import React from 'react';
// import ReactDOM from 'react-dom';
import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC  = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(<App />);