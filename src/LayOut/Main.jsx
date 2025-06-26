import React from 'react';

import { Outlet } from 'react-router';
import TheNavBar from '../Components/TheNavBar';
import TheFooter from '../Components/TheFooter';

const Main = () => {
    return (
        <>
          <TheNavBar></TheNavBar>
          <Outlet></Outlet>
           <TheFooter></TheFooter>
        </>
    );
};

export default Main;