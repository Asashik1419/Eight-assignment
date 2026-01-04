import React from 'react';
import rating from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'
import review from '../../assets/icon-review.png'
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../utility/addToDb';

const AppInfo = () => {
    const {id} = useParams();
    const cardid = parseInt(id);
    const data = useLoaderData();
    const singleCard = data.find(card =>card.id == cardid);
    const {companyName,description,image,title,downloads,ratingAvg,reviews,} = singleCard;

    const handleInstall = id =>{
        addToStoredDB(id)
    }
    
    return (
        <div className='max-w-[1300px] mx-auto px-4'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8 mt-10 mb-10'>
                
                <div className='flex justify-center'>
                    <img 
                      className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]' 
                      src={image} 
                      alt="" 
                    />
                </div>

                <div className='md:ml-10 text-center md:text-left'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>
                        {title}
                    </h3>

                    <p className='mb-6 mt-2 text-lg text-[#627382]'>
                       {companyName}
                    </p>

                    <div className='border-t border-dashed border-gray-300 my-6'></div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-center'>
                        <div>
                            <img className='mx-auto' src={download} alt="" />
                            <h3 className='text-[14px] mt-2'>Downloads</h3>
                            <h3 className='text-3xl font-extrabold'>{downloads}</h3>
                        </div>

                        <div>
                            <img className='mx-auto' src={rating} alt="" />
                            <h3 className='text-[14px] mt-2'>Average Ratings</h3>
                            <h3 className='text-3xl font-extrabold'>{ratingAvg}</h3>
                        </div>

                        <div>
                            <img className='mx-auto' src={review} alt="" />
                            <h3 className='text-[14px] mt-2'>Total Reviews</h3>
                            <h3 className='text-3xl font-extrabold'>{reviews}</h3>
                        </div>
                    </div>

                    <div className='mt-8 flex justify-center md:justify-start'>
                        <button onClick={()=>handleInstall(id)} className='btn bg-[#00D390] text-white text-lg px-6'>
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-t border-dashed border-gray-300 my-6'>
                <h3 className='text-2xl font-semibold mt-10 mb-6'>Description</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppInfo;
