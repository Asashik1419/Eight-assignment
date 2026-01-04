import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredCard } from '../utility/addToDb';
import Installations from '../Installations/Installations';

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const data = useLoaderData();

  useEffect(() => {

    const storedCardData = getStoredCard();
    const convertedStoredCard = storedCardData.map(id => parseInt(id));

    const myReadList = data.filter(card =>
      convertedStoredCard.includes(card.id)
    );

    setInstallation(myReadList);
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto">
        
      <h2 className="text-3xl md:text-5xl text-center font-bold mt-20 mb-4">
        Your Installed Apps
      </h2>

      <p className="text-xl text-center text-[#627382] mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          {installation.length} Apps Found
        </h2>
        <button>Sort By Size</button>
      </div>

      {/* Dynamic Cards */}
      
    </div>
  );
};

export default Installation;
