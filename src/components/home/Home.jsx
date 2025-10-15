import React, { Suspense, useEffect } from 'react';

import Hero from '../Hero';
import Trust from '../Trust';
import HomeApps from './HomeApps';
import { Loader, NavigationLoading } from '../Main';
import { AppName } from '../../settings';



const Home = () => {
    const dataPromise=fetch("data.json").then(res=>res.json()); //to fire loading every time
    useEffect(() => {
            document.title = AppName + " | Android and IOS apps hub";
          }, []);

    return (
        <>
            <Hero />
            <Trust />
            <Suspense fallback={<div className='my-500'><Loader/></div>}>
            <HomeApps isHome={true} dataPromise={dataPromise}/>
            </Suspense>
        </>
    );
};

export default Home;