import {
  createBrowserRouter,
 
} from "react-router";
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
import Groups from "../DashBoard/Groups";

export const router = createBrowserRouter([
  {
    path: "/",
   Component : Main,
   errorElement : <Error></Error> ,
   children : [
    { index : true ,
       Component : Home,
       loader : ()=> fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback : TheLoad
      },
    {
        path : 'createGroup',
        element : <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
      },
      {
        path : 'groups',
        element : <AllGroups></AllGroups>,
        loader : ()=> fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback : TheLoad
    },
    {
      path : 'myGroups',
      // Component : MyGroups
      element : <PrivateRoute><MyGroups></MyGroups></PrivateRoute>,
       loader : ()=> fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback : TheLoad
    },
    {
      path : 'group/:id',
     element: <PrivateRoute><GroupDetails></GroupDetails></PrivateRoute> ,
      loader : ({params})=> fetch(`https://assignment-ten-server-sepia.vercel.app/hobby/${params.id}`),
      HydrateFallback : TheLoad
  },
    {
      path : 'myGroups/updateGroup/:id',
     element: <PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute> ,
      loader : ({params})=> fetch(`https://assignment-ten-server-sepia.vercel.app/hobby/${params.id}`),
      HydrateFallback : TheLoad
  },
    {
        path : 'register',
        Component : Register
    },
    {
        path : 'login',
        Component : Login
    },
   ]
  },
  {
    path : '/dashBoard',
    Component : DashBoard ,
    children: [
      { index: true, element: <DashMain />,
         loader : ()=> fetch('https://assignment-ten-server-sepia.vercel.app/hobby'),
        HydrateFallback : TheLoad
       },
      
      { path: 'thegroups', component : Groups },
      // { path: 'groups', element: <MyGroups /> },
    ],
  }
]);