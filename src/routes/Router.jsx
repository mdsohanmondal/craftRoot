import { createBrowserRouter, RouterProvider } from 'react-router';
import ProductBuyPage from '../components/product/ProductBuyPage';
import ViewProduct from '../components/product/ViewProduct';
import AdminLayout from '../layouts/AdminLayout';
import ArtisanDashboardLayout from '../layouts/ArtisanDashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import CustomerDashboardLayout from '../layouts/CustomerDashboardLayout';
import CustomerPublicLayout from '../layouts/CustomerPublicLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import SignOut from '../pages/auth/SignOut';
import ArtisanRegister from '../pages/auth/artisan/ArtisanRegister';
import AddProduct from '../pages/dashboard/artisan/AddProduct';
import ArtisanChangePassword from '../pages/dashboard/artisan/ArtisanChangePassword';
import ArtisanEditProduct from '../pages/dashboard/artisan/ArtisanEditProduct';
import ArtisanOrderView from '../pages/dashboard/artisan/ArtisanOrderView';
import ArtisanProfile from '../pages/dashboard/artisan/ArtisanProfile';
import ArtisansOrdered from '../pages/dashboard/artisan/ArtisansOrdered';
import Earning from '../pages/dashboard/artisan/Earning';
import OwnProducts from '../pages/dashboard/artisan/OwnProducts';
import ChangePassword from '../pages/dashboard/customer/ChangePassword';
import Orders from '../pages/dashboard/customer/Orders';
import Profile from '../pages/dashboard/customer/Profile';
import Wishlist from '../pages/dashboard/customer/Wishlist';
import Cart from '../pages/public/customer/Cart';
import Contact from '../pages/public/customer/Contact';
import Home from '../pages/public/customer/Home';
import Shop from '../pages/public/customer/Shop';
import ArtisanPrivateRoute from './private/ArtisanPrivateRoute';
import PrivateRoute from './private/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <CustomerPublicLayout />,
        children: [
          { index: true, path: 'home', element: <Home /> },
          { path: 'shop', element: <Shop /> },
          { path: 'cart', element: <Cart /> },
          { path: 'product/:id', element: <ProductBuyPage /> },
          { path: 'view-product/:id', element: <ViewProduct /> },
          { path: 'contact', element: <Contact /> },
        ],
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            children: [
              {
                index: true,
                element: (
                  <Login
                    heading={'Log in'}
                    to="/auth/register"
                    toText="Register"
                  />
                ),
              },
              {
                path: 'artisan',
                element: (
                  <Login
                    heading={'Log in to Artisan'}
                    to="/auth/register/artisan"
                    toText="Register"
                  />
                ),
              },
              {
                path: 'admin',
                element: (
                  <Login
                    heading={'Log in to Admin'}
                    to="/auth/register/admin"
                    toText="Register"
                  />
                ),
              },
            ],
          },
          {
            path: 'register',
            children: [
              {
                index: true,
                element: (
                  <Register
                    heading={'Sign up'}
                    to={'/auth/login'}
                    toText={'Login'}
                  />
                ),
              },
              {
                path: 'artisan',
                element: (
                  <ArtisanRegister
                    heading={'Sign up in to Artisan'}
                    to="/auth/login/artisan"
                    toText="Login"
                  />
                ),
              },
              {
                path: 'admin',
                element: (
                  <ArtisanRegister
                    heading={'Sig up to Admin'}
                    to="/auth/login/admin"
                    toText="Login"
                  />
                ),
              },
            ],
          },
          {
            path: 'logout',
            Component: SignOut,
          },
        ],
      },
      {
        path: 'dashboard/customer',
        element: (
          <PrivateRoute>
            <CustomerDashboardLayout />{' '}
          </PrivateRoute>
        ),
        children: [
          { path: 'orders', element: <Orders /> },
          { path: 'wishlist', element: <Wishlist /> },
          { path: 'profile', element: <Profile /> },
          { path: 'change-password', element: <ChangePassword /> },
        ],
      },
      {
        path: 'dashboard/artisan',
        element: (
          <ArtisanPrivateRoute>
            <ArtisanDashboardLayout />
          </ArtisanPrivateRoute>
        ),
        children: [
          { path: 'profile', element: <ArtisanProfile /> },
          { path: 'add-product', element: <AddProduct /> },
          { path: 'own-products', element: <OwnProducts /> },
          { path: 'artisans-ordered', element: <ArtisansOrdered /> },
          { path: 'artisans-ordered-view/:id', element: <ArtisanOrderView /> },
          { path: 'earning', element: <Earning /> },
          { path: 'change-password', element: <ArtisanChangePassword /> },
          { path: 'edit-product/:id', element: <ArtisanEditProduct /> },
        ],
      },
      {
        path: 'dashboard/admin',
        element: <AdminLayout />,
        // children: [
        //   { path: 'users', element: <AllUsers /> },
        //   { path: 'orders', element: <AllOrders /> },
        //   { path: 'products', element: <AllProducts /> },
        // ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

/**
 * ├── Home (/)
├── Products (/products)
├── Product Details (/product/:id)
├── Artisan Public Shop (/artisan/:id)
├── Auth
│   ├── Customer Login (/login)
│   ├── Customer Signup (/signup)
│   ├── Artisan Signup (/artisan-signup)
│   ├── Admin Login (/admin-login)
├── Cart (/cart)
├── Checkout (/checkout)
├── Order Success (/order-success)

└── Dashboard (/dashboard)
├── Customer Routes (role === 'customer')
│   ├── /dashboard/orders
│   ├── /dashboard/wishlist
│   ├── /dashboard/profile
│   ├── /dashboard/change-password

```
├── Artisan Routes (role === 'artisan')
│   ├── /dashboard/artisan
│   ├── /dashboard/artisan/add-product
│   ├── /dashboard/artisan/products
│   ├── /dashboard/artisan/edit-product/:id
│   ├── /dashboard/artisan/orders
│   ├── /dashboard/artisan/earnings
│   ├── /dashboard/artisan/profile
│   ├── /dashboard/artisan/change-password

├── Admin Routes (role === 'admin')
│   ├── /dashboard/admin
│   ├── /dashboard/admin/users
│   ├── /dashboard/admin/artisans
│   ├── /dashboard/admin/orders
│   ├── /dashboard/admin/products

```
 */
