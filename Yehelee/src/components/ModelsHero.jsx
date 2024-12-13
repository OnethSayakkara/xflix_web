import React from 'react';
import modelwallpaper from '../assets/images/modelwallpaper.jpg';
import modelherowallpaper from '../assets/images/modelhero1.jpg';
import modelherowallpapertwo from '../assets/images/modelhero8.jpg';
import { withTranslation } from 'react-google-multi-lang'

const ModelsHero = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${modelwallpaper})` }}
      >
        {/* Darkened background image container with reduced size */}
        <div
          className="absolute"
          style={{
            top: '20%',           // Adjust vertical position
            left: '45%',          // Adjust horizontal position
            width: '680px',       // Set specific width
            height: '450px',      // Set specific height
            zIndex: 1,
            backgroundImage: `url(${modelherowallpaper})`,
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div> {/* Overlay */}
        </div>

        {/* Text and buttons container */}
        <div className="flex justify-start h-full text-white relative" style={{ zIndex: 2 }}>
          <div className='grid absolute' style={{ marginLeft: '200px' }}>
            <h1 className="text-7xl font-bold uppercase mt-44">
              Billions of <br />Reasons to Join
            </h1>
            <p className='text-xl mt-5'>
              With over 3 billion visits a month, make ad revenue, sell your videos and <br />build your fan base on the largest adult platform in the world.
            </p>
            <div className='flex mt-8 gap-4'>
              <button className='pt-3 pb-3 pl-10 pr-10 bg-zinc-800 text-xl rounded-md'>
                Learn More
              </button>
              <button className='pt-3 pb-3 pl-10 pr-10 bg-yellow-500 text-xl rounded-md text-black font-semibold'>
                Join The Model Program
              </button>
            </div>
          </div>

          {/* Second image */}
          <img
            src={modelherowallpapertwo}
            alt="Sign Up Model"
            className="object-cover absolute mt-80"
            style={{ marginLeft: '1150px', zIndex: 3, width: '250px',
            height: '350px', }}
          />
        </div>
      </div>
    </div>
  );
};

export default withTranslation(ModelsHero);
