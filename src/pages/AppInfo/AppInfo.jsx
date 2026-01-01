import React from 'react';
import app from '../../assets/demo-app (1).webp'
import ratings from '../../assets/icon-ratings.png'
import downloads from '../../assets/icon-downloads.png'
import review from '../../assets/icon-review.png'

const AppInfo = () => {
    return (
        <div className='max-w-[1300px] mx-auto px-4'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8 mt-10 mb-10'>
                
                <div className='flex justify-center'>
                    <img 
                      className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]' 
                      src={app} 
                      alt="" 
                    />
                </div>

                <div className='md:ml-10 text-center md:text-left'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>
                        SmPlan: ToDo List with Reminder
                    </h3>

                    <p className='mb-6 mt-2'>
                        <span className='text-lg text-[#627382]'>Developed by </span>
                        <span className='text-[#B3A1D1] text-lg'>productive.io</span>
                    </p>

                    <div className='border-t border-dashed border-gray-300 my-6'></div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center'>
                        <div>
                            <img className='mx-auto' src={downloads} alt="" />
                            <h3 className='text-[14px] mt-2'>Downloads</h3>
                            <h3 className='text-3xl font-extrabold'>8M</h3>
                        </div>

                        <div>
                            <img className='mx-auto' src={ratings} alt="" />
                            <h3 className='text-[14px] mt-2'>Average Ratings</h3>
                            <h3 className='text-3xl font-extrabold'>4.9</h3>
                        </div>

                        <div>
                            <img className='mx-auto' src={review} alt="" />
                            <h3 className='text-[14px] mt-2'>Total Reviews</h3>
                            <h3 className='text-3xl font-extrabold'>54K</h3>
                        </div>
                    </div>

                    <div className='mt-8 flex justify-center md:justify-start'>
                        <button className='btn bg-[#00D390] text-white text-lg px-6'>
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppInfo;
