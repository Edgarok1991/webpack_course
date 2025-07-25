import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import { Shop } from '@/pages/shop';
import { Suspense } from 'react';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={'Loading...'}>
        <LazyAbout />
      </Suspense>
    ),
  },
  {
    path: '/shops',
    element: (
      <Suspense fallback={'Loading...'}>
        <Shop />
      </Suspense>
    ),
  },
]);

container.render(<RouterProvider router={router} />);