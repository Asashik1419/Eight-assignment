import React from 'react';
import img from '../../assets/demo-app (3).webp'
import ratings from '../../assets/icon-ratings.png'
import downloads from '../../assets/icon-downloads.png'

const Installation = () => {
    return (
        <div className='max-w-[1300px] mx-auto'>
            <div>
                <h2 className='text-3xl md:text-5xl text-center font-bold mt-20 mb-4'>Your Installed Apps</h2>
            <p className='text-xl text-center text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between'>
                <h2 className='text-xl md:text-2xl font-semibold'>1 Apps Found</h2>
                <button>Sort By Size</button>
            </div>
            </div>
        <div>
            <div className="card w-full my-4 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
             <div className='flex items-center justify-between'>
                <div className='flex'>
                <div>
                    <img className='w-[80px] rounded-lg' src={img} alt="" />
                </div>
                <div className='ml-4 text-sm'>
                    <div className='font-medium text-xl'>
                        <h2>Forest: Focus for Productivity</h2>
                    </div>
                    <div className='flex gap-3 mt-5'>
                        <div className='flex items-center'>
                            <img className='w-3 h-3' src={downloads} alt="" />
                            <h3>9M</h3>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-3 h-3' src={ratings} alt="" />
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>250 MB</h3>
                        </div>
                    </div>
                </div>
             </div>
             <button className="btn text-[16px] text-white font-semibold bg-[#00D390]">Uninstall</button>
             </div>
             </div>
             
            </div>
        </div>
        </div>
    );
};

export default Installation;