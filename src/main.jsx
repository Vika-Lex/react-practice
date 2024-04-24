import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from '@/App1.jsx';
import "@/styles/index.css"


ReactDOM.createRoot(document.getElementById('wrapper'))
    .render(
        <React.StrictMode>
        <App1 />
        </React.StrictMode>,
    );

