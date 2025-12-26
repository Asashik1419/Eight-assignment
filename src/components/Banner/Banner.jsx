import React from 'react';
import hero from '../../assets/hero.png'
import appStore from '../../assets/App-store.png'
import playStore from '../../assets/play-store.png'


const Banner = () => {
    return (
        <div>
            <h3 className='font-bold mt-10 md:mt-20 mb-4 text-4xl md:text-7xl text-center'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h3>
            <p className='text-center md:text-xl font-normal text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-4 mt-10'>
                <div>
                    
                    <button className='btn py-3'> <img src={playStore} alt="" />   Google Play</button>
                </div>
                <div>
                    
                    <button className='btn py-3'> <img src={appStore} alt="" />  App Store</button>
                </div>
            </div>
            <img className='w-[600px] mx-auto mt-10' src={hero} alt="" />
            <div className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] w-full h-[410px] text-white text-center">
                <h3 className='md:text-5xl text-3xl font-bold pt-20 pb-10'>Trusted by Millions, Built for You</h3>
                <div className='flex justify-center gap-10'>
                    <div>
                    <h3 className='md:text-xl'>Total Downloads</h3>
                    <h3 className='md:text-6xl text-3xl font-extrabold my-4'>29.6M</h3>
                    <h3 className='md:text-xl'>21% more than last month</h3>
                </div>
                <div>
                    <h3 className='md:text-xl'>Total Reviews</h3>
                    <h3 className='md:text-6xl text-3xl font-extrabold my-4'>906K</h3>
                    <h3 className='md:text-xl'>46% more than last month</h3>
                </div>
                <div>
                    <h3 className='md:text-xl'>Active Apps</h3>
                    <h3 className='md:text-6xl text-3xl font-extrabold my-4'>132+</h3>
                    <h3 className='md:text-xl'>31 more will Launch</h3>
                </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;