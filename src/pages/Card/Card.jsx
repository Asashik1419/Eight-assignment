import React from 'react';
import { use } from 'react';
import download from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'

const Card = ({singleCard}) => {
    // const data=use(cardPromise);
    // console.log(data)

    const {image,title,downloads,rating}=singleCard;

    return (
        <div>
            <div className="card bg-base-100 w-86 mb-4 shadow-sm">
  <figure>
    <img className='p-5 rounded-4xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-start text-[18px] font-medium">
    <h3>{title}</h3>
    <div className="card-actions justify-between">
      <div className="badge badge-outline btn"> <img className='w-4' src={download} alt="" /> {downloads}</div>
      <div className="badge badge-outline btn"> <img className='w-4' src={ratings} alt="" /> {rating}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;