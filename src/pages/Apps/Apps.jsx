import React, { Suspense } from 'react';
import App from '../../App';
import { useLoaderData } from 'react-router';
import Appss from '../Appss/Appss';


const Apps = () => {
    const apps = useLoaderData();
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div>
            <div>
                <h3 className='text-4xl md:text-5xl text-center font-bold mt-20'>Our All Applications</h3>
                 <p className='md:text-xl text-center mt-4 text-[#627382] mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between mb-4'>
                <h3 className='text-xl md:text-2xl font-semibold'>(132)Apps Found</h3>
                <input className='border-1 border-[#627382] rounded-sm' type="search" name="" id="" placeholder='search Apps' />
            </div>
            </div>

            <div className='mb-20'>
                <Suspense fallback={<span>loading.....</span>}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {
                            apps.map((appssCard)=><Appss key={appssCard.id} appssCard={appssCard} ></Appss>)
                        }
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default Apps;
