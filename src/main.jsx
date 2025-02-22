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
import ApprovedPremium from './Pages/Dashboard/AdminPage/ApprovedPremium/ApprovedPremium';
import ApprovedContactReq from './Pages/Dashboard/AdminPage/ApprovedContactReq/ApprovedContactReq';
import AddFavorits from './Pages/BiodatasPage/AddFavorits';
import ManageUser from './Pages/Dashboard/AdminPage/ManageUser/ManageUser';
import Checkout from './Pages/BiodatasPage/Checkout/Checkout';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Gotmarrid from './Pages/Dashboard/Alluser/UserRoute/Gotmarrid/Gotmarrid';
import Succses from './Pages/Dashboard/AdminPage/Succes/Succses';
const queryClient = new QueryClient()

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
        element:<PrivateRoute><ViewBioDatadetails></ViewBioDatadetails></PrivateRoute>
      },
      {
        path:`/addfavourits/:id`,
        element:<AddFavorits></AddFavorits>
      },
      {
        path:'/checkout/:id',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      }
     
    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      // admin route
      {
        path:'admindashboard',
        element:<AdminDashboard></AdminDashboard>

      },
      {
        path:'manage',
        element:<ManageUser></ManageUser>
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
     {
      path:'successstory',
      element:<Succses></Succses>
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
    },
    {
      path:'gotmarrid',
      element:<Gotmarrid></Gotmarrid>
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
   <AuthProvider>
   <div className='container mx-auto'>
   <RouterProvider router={router} />
   </div>
   </AuthProvider>
   </QueryClientProvider>
  </React.StrictMode>,
)
