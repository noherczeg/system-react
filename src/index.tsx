import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
