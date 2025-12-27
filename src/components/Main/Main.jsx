import React, { Suspense } from 'react';
import Card from '../../pages/Card/Card';
import { Link } from 'react-router';

const Main = ({data}) => {

    // useEffect(()=>{
    //     fetch("jsonData.json")
    //     .then(res=>res.json())
    //     .then(data => {
    //         setMain(data)
    //     })
    // },[])

    // const cardPromise = fetch('./jsonData.json').then(res=>res.json())


    return (
        <div className=' text-center'>
            <h3 className='font-bold text-4xl md:text-5xl mt-10 md:mt-20 mb-4'>Trending Apps</h3>
            <p className='text-xl text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div>
                <Suspense fallback={<span>loading.....</span>}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        {
                        data.map((singleCard)=><Card key={singleCard.id} singleCard={singleCard}></Card>)
                        }
                    </div>
                </Suspense>
            </div>
            <Link to='/apps'><button className='py-4 px-10 btn mt-3 md:mt-10 mb-5 md:mb-20 bg-gradient-to-r from-[#6A38D9] via-[#7E49E7] to-[#A178FF] text-white rounded-sm'
            >Show All</button></Link>
        </div>
    );
};

export default Main;