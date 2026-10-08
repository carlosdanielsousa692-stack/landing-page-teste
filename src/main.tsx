import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {injectSpeedInsights} from '@vercel/speed-insights';
import App from './App.tsx';
import './index.css';

// Previne travamento de cache e erros de chunks antigos após novos deploys na Vercel
window.addEventListener('vite:preloadError', () => {
  window.location.reload();
});

// Initialize Vercel Speed Insights
injectSpeedInsights();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
