import React from 'react';
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'

const Card = ({singleCard}) => {
    // const data=use(cardPromise);
    // console.log(data)

    const {image,title,downloads,ratingAvg}=singleCard;

    return (
        <div>
            <div className="card bg-base-100 w-86 mb-4 mx-auto shadow-sm">
  <figure>
    <img className='p-5 w-full rounded-4xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-start text-[18px] font-medium">
    <h3 className='-mt-6'>{title}</h3>
    <div className="card-actions justify-between">
      <div className="badge btn"> <img className='w-4' src={download} alt="" /> {downloads}</div>
      <div className="badge btn"> <img className='w-4' src={ratings} alt="" /> {ratingAvg}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;