import { createBrowserRouter } from 'react-router'; 
import Home from "../LayOut/Home";
import Main from "../LayOut/Main";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import CreateGroup from "../Pages/CreateGroup";
import Error from "../Others.jsx/Error";
import AllGroups from "../Pages/AllGroups";
import MyGroups from "../Pages/MyGroups";
import PrivateRoute from "../Private/PrivateRoute";
import TheLoad from "../Others.jsx/TheLoad";
import GroupDetails from "../Pages/GroupDetails";
import UpdateGroup from "../Pages/UpdateGroup";
import DashBoard from "../DashBoard/DashBoard";
import DashMain from "../DashBoard/DashMain";
// import DashAllGroup from "../DashBoard/DashAllGroup";
import AboutUs from "../Pages/AboutUs";
import DashAllGroups from '../DashBoard/DashAllGroups';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback: TheLoad,
      },
     
      {
        path: 'groups',
        element: <AllGroups />,
        loader: () => fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback: TheLoad
      },
    
      {
        path: 'group/:id',
        element: <PrivateRoute><GroupDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-ten-server-sepia.vercel.app/hobby/${params.id}`),
        HydrateFallback: TheLoad
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'aboutUs',
        element: <AboutUs />
      },
    ]
  },

  
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashMain />,
        loader: () => fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback: TheLoad
      },
      {
        path: "dashAllGroup",
        element: <PrivateRoute><DashAllGroups></DashAllGroups></PrivateRoute> ,
         loader: () => fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback: TheLoad
      },
        {
        path: 'myGroups',
        element: <PrivateRoute><MyGroups /></PrivateRoute>,
        loader: () => fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback: TheLoad
      },
      {
        path: 'myGroups/updateGroup/:id',
        element: <PrivateRoute><UpdateGroup /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-ten-server-sepia.vercel.app/hobby/${params.id}`),
        HydrateFallback: TheLoad
      },
       {
        path: 'createGroup',
        element: <PrivateRoute><CreateGroup /></PrivateRoute>
      },
    ]
  }
]);
