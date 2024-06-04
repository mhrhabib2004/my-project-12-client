import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home/Home';
import Main from './Leyout/Main';
import BiodatasPage from './Pages/BiodatasPage/BiodatasPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './Pages/Sherd/NotFound/NotFound';
import ViewProfile from './Pages/Home/SixPremium/SixPremiumView/ViewProfile';
import AuthProvider from './Provaiders/AuthProvider';
import SignIn from './Pages/Sherd/Login/SignIn';
import SignUp from './Pages/Sherd/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/biodatas',
        element:<BiodatasPage></BiodatasPage>
      },
      {
        path:'/AboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path:'/ContactUs',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/ViewProfile/:id',
        element:<PrivateRoute><ViewProfile></ViewProfile></PrivateRoute>
      },
      {
        path:'/login',
        element:<SignIn></SignIn>

      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
     
    ]
  },
  {
    path: 'dashboard',
    element:
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='container mx-auto'>
   <RouterProvider router={router} />
   </div>
   </AuthProvider>
  </React.StrictMode>,
)
