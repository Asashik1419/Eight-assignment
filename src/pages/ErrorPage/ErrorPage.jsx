import React from 'react';
import error from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
            <img src={error} alt="" />

            
        </div>
        <div className='text-center'>
            <h3 className='text-5xl font-semibold mt-4'>Oops, page not found!</h3>
            <p className='text-xl text-[#627382] mt-2'>The page you are looking for is not available.</p>
            <button className='btn bg-gradient-to-r from-[#6A38D9] via-[#7E49E7] to-[#A178FF] text-white mt-4 rounded-sm px-10 py-6'>Go Back!</button>
        </div>
        </div>
    );
};

export default ErrorPage;