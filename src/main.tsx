import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner.tsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  // </QueryClientProvider>,
);
