
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';

// Preload critical routes
const preloadRoutes = () => {
  // This will preload these routes in the background
  import('./pages/Hotels.tsx');
  import('./pages/FoodGuide.tsx');
  import('./pages/WildlifeSafari.tsx');
};

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Preload routes after the app is rendered
window.addEventListener('load', () => {
  // Wait for the page to load before preloading routes
  setTimeout(preloadRoutes, 1000);
});
