import React, { Suspense, use, useEffect, useState } from 'react';
import { installApp, uninstall } from './install_utils';
import AppCard, { AppCardInline } from '../apps/AppCard';
import { Link } from 'react-router';
import { Loader } from '../Main';
import { toast } from 'react-toastify';
import { AppName } from '../../settings';


const dataPromise = fetch("data.json").then(res => res.json());


const Installs = () => {
    const [totalInstalled, setTotalInstalled] = useState(0)
    const [sortby, setSortby] = useState(0)
    const handleSortBy = (event) => {
        if (event.target.value == 'low') {
            setSortby(1);
        }
        else if (event.target.value == 'high') {
            setSortby(2);
        }
        else {
            setSortby(0)
        }
    };

    useEffect(() => {
        document.title = AppName + " | Installed apps";
      }, []);

    return (
        <div className=' bg-[#E9E9E9]'>
            <div className="container text-center py-20 max-[1000px]:py-15 max-[800px]:py-13 max-[600px]:py-6">
                <div>
                    <div className='text-5xl font-bold my-5 max-[800px]:text-4xl max-[600px]:text-3xl'>Your Installed Apps</div>
                    <div className='text-gray-600 text-[20px] max-[600px]:text-[18px]'>Explore All Trending Apps on the Market developed by us</div>
                </div>
                <div className='flex justify-between items-center mt-7'>
                    <div className='text-2xl font-semibold max-[800px]:text-[20px] max-[600px]:text-[18px]'>{totalInstalled} Apps found</div>
                    <div className=''>
                        <select defaultValue='' onChange={(event) => { handleSortBy(event); }} className='border border-gray-400 p-3 focus:outline-none max-[400px]:text-[16px] max-[600px]:p-2'>
                            <option value="" disabled="disabled">Sort by Downloads</option>
                            <option value="low">Sort Low-High</option>
                            <option value="high">Sort High-Low</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Suspense fallback={<div className='my-500'><Loader /></div>}>
                        <InstalledApp dataPromise={dataPromise} setTotalInstalled={setTotalInstalled} sortby={sortby}></InstalledApp>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};


const InstalledApp = ({ dataPromise, setTotalInstalled, sortby }) => {
    let apps = use(dataPromise);
    let installedApps = installApp(null);
    const [installed, setInstalled] = useState(installedApps);
    const removeInstalled = (event, id, title) => {
        const tid = toast.loading(title + " is Uninstalling...");
        uninstall(event, id, () => { setInstalled([...installed.filter(item => item != id)]); setTotalInstalled(installed.length); toast.update(tid, { render: "Uninstalled...", type: "success", isLoading: false, autoClose: 700 }); })
    }
    apps = apps.filter(app => installed.includes(app.id))
    if (sortby != 0) {
        apps = apps.sort((a, b) => {
            if (sortby == 1) {
                return a.downloads - b.downloads;
            }
            return b.downloads - a.downloads;
        })
    }


    useEffect(() => {
        setTotalInstalled(installed.length)
    })

    return (
        <div>
            {apps.length == 0 && <h1 className='text-3xl mt-10'>No apps found. <Link className='font-bold text-blue-500 hover:text-blue-700 underline' to="/apps">Browse apps</Link></h1>}
            {
                apps.map(app => <AppCardInline key={app.id} app={app} isInstalled={true} removeInstalled={removeInstalled}></AppCardInline>)
            }

        </div>
    )
};

export default Installs;