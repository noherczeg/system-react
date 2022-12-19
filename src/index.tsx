import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { App } from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
