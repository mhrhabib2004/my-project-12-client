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
import Dashboard from './Leyout/Dashboard';
import Alluser from './Pages/Dashboard/Alluser/Alluser';
import ViewBioDatadetails from './Pages/BiodatasPage/ViewBioDatadetails';
import EditBioData from './Pages/Dashboard/Alluser/UserRoute/EditbioData/EditBioData';
import ViewBioData from './Pages/Dashboard/Alluser/UserRoute/ViewBioData/ViewBioData';
import MyContactReq from './Pages/Dashboard/Alluser/UserRoute/MycontactReq/MyContactReq';
import FavouritesBiodata from './Pages/Dashboard/Alluser/UserRoute/FavouritesBiodata/FavouritesBiodata';
import AdminDashboard from './Pages/Dashboard/AdminPage/AdminDashboard/AdminDashboard';
import ManageUsers from './Pages/Dashboard/AdminPage/ManageUsers/ManageUsers';
import ApprovedPremium from './Pages/Dashboard/AdminPage/ApprovedPremium/ApprovedPremium';
import ApprovedContactReq from './Pages/Dashboard/AdminPage/ApprovedContactReq/ApprovedContactReq';
import AddFavorits from './Pages/BiodatasPage/AddFavorits';

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
      },
      {
        path:'/viewbiodata/:id',
        element:<ViewBioDatadetails></ViewBioDatadetails>
      },
      {
        path:`/addfavourits/:id`,
        element:<AddFavorits></AddFavorits>
      }
     
    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      // admin route
      {
        path:'dashboard',
        element:<AdminDashboard></AdminDashboard>

      },
      {
        path:'manage',
        element:<ManageUsers></ManageUsers>
      },
      {
        path:'approvedPremium',
        element:<ApprovedPremium></ApprovedPremium>

      },
      {
        path:'approvedContactRequest',
        element:<ApprovedContactReq></ApprovedContactReq>
      },
     {
      path:'allusers',
      element:<Alluser></Alluser>
     },
    //  userrout
    {
      path:'editbio',
      element:<EditBioData></EditBioData>
    },
    {
      path:'viewbio',
      element:<ViewBioData></ViewBioData>
    },
    {
      path:'contactreq',
      element:<MyContactReq></MyContactReq>
    },
    {
      path:'favouritesbio',
      element:<FavouritesBiodata></FavouritesBiodata>,
      loader:()=>fetch(`${import.meta.env.VITE_LINK}/addfavourits`)
    }
    ]
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
