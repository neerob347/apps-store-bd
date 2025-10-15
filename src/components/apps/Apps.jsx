import React, { Suspense, useEffect } from 'react';
import Hero from '../Hero';
import Trust from '../Trust';
import HomeApps from '../home/HomeApps';
import { Loader } from '../Main';
import { AppName } from '../../settings';




const Apps = () => {
    const dataPromise=fetch("data.json").then(res=>res.json()); //to fire loading every time
    
    useEffect(() => {
    document.title = AppName + " | All apps developed by us";
  }, []);
  
    return (
        <>
            <Suspense fallback={<div className='my-500'><Loader/></div>}>
                <HomeApps isHome={false} dataPromise={dataPromise} />
            </Suspense>
        </>
    );
};

export default Apps;