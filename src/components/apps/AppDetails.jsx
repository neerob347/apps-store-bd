import React, { Suspense, use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Error404 from '../Error404';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import { install, installApp, uninstall } from '../installs/install_utils';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from '../Main';
import { AppName } from '../../settings';






const AppDetails = () => {
    const { appId } = useParams();
    const dataPromise = fetch("/data.json").then(res => res.json()); 

    return (
        <div className='bg-[#E9E9E9]'>
            <Suspense fallback={<div className='py-50'><Loader /></div>}>
                <AppDetailsView appId={appId} dataPromise={dataPromise}></AppDetailsView>
            </Suspense>
        </div>
    );
};

const AppDetailsView = ({ appId, dataPromise }) => {
    let appsData = use(dataPromise);
    const appIdInt = parseInt(appId) || -1;

    const _isInstalled = installApp(appIdInt, false, true)
    const [isInstalled, setInstalled] = useState(_isInstalled);

    let app = appsData.find((item) => item.id === appIdInt)
    let title = '';

    useEffect(() => {
        let xtitle = title;
        if (!title) xtitle = "App Not Found";
        document.title = AppName + " | " + xtitle;
    }, [title]);

    if (app == null) {
        return (
            <Error404 img='/assets/App-Error.png' title='OPPS!! APP NOT FOUND' subtitle='The App you are requesting is not found on our system.  please try another apps' />
        )
    }



    const { image, id, description, downloads, ratingAvg, companyName, reviews, size } = app;
    title = app.title;

    // console.log(isInstalled)



    let ratings = app.ratings.toReversed();
    // ratings.reverse();
    // console.log(ratings)


    return (
        <div>
            <div className='container py-12 max-[600px]:py-9'>
                <div className='bg-white rounded-md shadow-md my-2 p-3 flex gap-5 max-[700px]:flex-wrap'>
                    <div><img className='w-[300px] aspect-square' src={image ? `/appIcons/${image}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"} /></div>
                    <div className='w-full flex flex-col justify-between gap-3'>
                        <div className='text-4xl font-bold max-[800px]:text-3xl max-[600px]:text-2xl'>{title}</div>
                        <div >Developed by <a href='#developed' className='text-black font-semibold'>{companyName}</a></div>
                        <hr className='text-gray-500' />
                        <div className='flex gap-15  max-[800px]:gap-10 max-[600px]:gap-5'>
                            <div>
                                <div className='text-4xl text-green-500  max-[800px]:text-3xl max-[600px]:text-2xl'><FaDownload /></div>
                                <div>Downloads</div>
                                <div className='text-4xl font-extrabold  max-[800px]:text-3xl max-[600px]:text-2xl'>{downloads}M</div>
                            </div>
                            <div>
                                <div className='text-4xl text-yellow-500  max-[800px]:text-3xl max-[600px]:text-2xl'><FaStar /></div>
                                <div>Average Ratings</div>
                                <div className='text-4xl font-extrabold  max-[800px]:text-3xl max-[600px]:text-2xl'>{ratingAvg}</div>
                            </div>
                            <div>
                                <div className='text-4xl text-blue-500  max-[800px]:text-3xl max-[600px]:text-2xl'><MdReviews /></div>
                                <div>Total Reviews</div>
                                <div className='text-4xl font-extrabold  max-[800px]:text-3xl max-[600px]:text-2xl'>{reviews}</div>
                            </div>
                        </div>
                        <div className='flex gap-4  flex-wrap'>
                            <button
                                onClick={(e) => { if (e.target.innerText.includes("Install Now") == false) { return; } const tid = toast.loading(title + " is Installing..."); install(e, id, () => { setInstalled(true); toast.update(tid, { render: title + " is Installed...", type: "success", isLoading: false, autoClose: 700 }); }) }}
                                className={"bg-[#00D390] text-white py-3 px-6 hover:bg-[#01553a] transition ease-in-out rounded-md shadow-md " + (isInstalled ? "bg-gray-400 hover:bg-gray-400" : "")}>{isInstalled ? "Installed" : `Install Now (${size}MB)`}</button>

                            {isInstalled && <button
                                onClick={(e) => { if (e.target.innerText.trim().toLowerCase()!=="uninstall") { return; } const tid = toast.loading(title + " is Uninstalling..."); uninstall(e, id, () => { setInstalled(false); toast.update(tid, { render: title + " is Uninstalled...", type: "success", isLoading: false, autoClose: 700 }); }) }}
                                className={"bg-[#00D390] text-white py-3 px-6 hover:bg-[#01553a] transition ease-in-out rounded-md shadow-md " + (isInstalled ? "" : "hidden")}>Uninstall</button>}
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-md my-2 p-3'>
                    <div className='text-2xl font-bold'>Ratings</div>
                    <div className='h-[300px] max-[800px]:h-[250px]'>
                        <ResponsiveContainer width="100%" height='100%'  >
                            <BarChart layout="vertical" data={ratings} barCategoryGap="15%" margin={{ top: 20, right: 15, left: 0, bottom: 40 }}>
                                <XAxis type='number' label={{ value: 'Ratings', position: 'insideBottom', offset: -10, fill: '#0000ff' }}  />
                                <YAxis type='category' dataKey="name" stroke="#8884d8" />
                                <Tooltip />
                                <Bar dataKey="count" fill="#FF7A00" name="Reviews" barSize={25} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='bg-white rounded-md shadow-md my-2 p-3'>
                    <div className='text-2xl font-bold'>Description</div>
                    <div>
                        {description}
                        <br></br>
                        <br></br>
                        {description}
                        <br></br>
                        <br></br>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDetails;
