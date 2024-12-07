import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Root from '../layouts/root';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import Reviews from '../pages/Reviews';
import AllCategory from '../components/AllCategory';
import Laptop from '../components/Laptop';
import Phones from '../components/Phones';
import Accessories from '../components/Accessories';
import SmartWatches from '../components/SmartWatches';
import CardDetails from '../components/CardDetails';
import LaptopDetails from '../components/LaptopDetails';
import PhoneDetails from '../components/PhoneDetails';
import AccessoriesDetails from '../components/AccessoriesDetails';
import SmartWatchesDetails from '../components/SmartWatchesDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <AllCategory></AllCategory>,
            loader: () => fetch('../allProducts.json'),
          },
          {
            path: '/categories/:category',
            element: <Laptop></Laptop>,
            loader: () => fetch('../allProducts.json'),
          },
          {
            path: '/categories/Phones',
            element: <Phones></Phones>,
            loader: () => fetch('../allProducts.json'),
          },
          {
            path: '/categories/Accessories',
            element: <Accessories></Accessories>,
            loader: () => fetch('../allProducts.json'),
          },
          {
            path: '/categories/Smart-Watches',
            element: <SmartWatches></SmartWatches>,
            loader: () => fetch('../allProducts.json'),
          },
          // ----------------------------- baire chilo
        ],
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../allProducts.json'),
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/categories/Smart-Watches/:product_id',
        element: <SmartWatchesDetails></SmartWatchesDetails>,
        loader: () => fetch('../allProducts.json'),
      },
      {
        path: '/cardDetails/:product_id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../allProducts.json'),
      },
      {
        path: '/categories/Laptops/:product_id',
        element: <LaptopDetails></LaptopDetails>,
        loader: () => fetch('../allProducts.json'),
      },
      {
        path: '/categories/Phones/:product_id',
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch('../allProducts.json'),
      },
      {
        path: '/categories/Accessories/:product_id',
        element: <AccessoriesDetails></AccessoriesDetails>,
        loader: () => fetch('../allProducts.json'),
      },
      /* {
        path: '/categories/Smart-Watches/:product_id',
        element: <SmartWatchesDetails></SmartWatchesDetails>,
        loader: () => fetch('../allProducts.json'),
      } */
    ],
  },
]);

export default router;
