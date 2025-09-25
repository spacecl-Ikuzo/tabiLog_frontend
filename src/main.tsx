import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner.tsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  // <QueryClientProvider client={queryClient}>
  <HashRouter>
    <App />
    <Toaster />
  </HashRouter>,
  // </QueryClientProvider>,
);
