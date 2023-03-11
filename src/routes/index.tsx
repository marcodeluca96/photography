import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import PhotographyPage from '../pages/PhotographyPage';

const router = createBrowserRouter([
  {
    path: '/photography',
    element: <PhotographyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/photography/about',
    element: <About />,
  },
]);

export default router;
