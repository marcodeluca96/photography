import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import PhotographyPage from '../pages/PhotographyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PhotographyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <div>Pagina di Test</div>,
  },
]);

export default router;
