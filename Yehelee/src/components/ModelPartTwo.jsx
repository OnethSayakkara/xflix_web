import React from 'react';
import modelherowallpaperPartTwo from '../assets/images/modelhero11.jpg';
import { FaDollarSign, FaVideo, FaGifts, FaUserFriends, FaGem, FaSuitcase} from 'react-icons/fa';
import { withTranslation } from 'react-google-multi-lang'


const ModelPartTwo = () => {

      const features = [
            { icon: <FaDollarSign size={50} className="text-orange-500" />, title: 'Ad Revenue', description: 'Make money off your free-to-watch videos' },
            { icon: <FaSuitcase size={50} className="text-orange-500" />, title: 'Video Sales 65%', description: 'One of the highest in the industry, keep 80% less 15% processing fee on all video sales' },
            { icon: <FaVideo size={50} className="text-orange-500" />, title: 'Custom Videos 65%', description: 'Create unique fantasies by request, keep 80% of sale less 15% processing fee' },
            { icon: <FaGem size={50} className="text-orange-500" />, title: 'Tips & Fan Club 80%', description: 'Feel the love from your fans and keep the profit 95% payout less 15% processing fee' },
            { icon: <FaGifts size={50} className="text-orange-500" />, title: '$165K+ in Contest Prizes', description: "And that's just in monthly contests - we've got themed contests and more" },
            { icon: <FaUserFriends size={50} className="text-orange-500" />, title: 'Referrals = $', description: 'Earn $50 for every model referred' },
            
          ];
  return (
    <div className="bg-black text-center h-auto flex flex-col items-center">
      <div className="relative flex justify-center items-center">
        <img
          src={modelherowallpaperPartTwo}
          alt="Sign Up Model"
          className="object-cover opacity-50"
          style={{ width: '1300px', height: '400px' }}
        />
        
        {/* Container for centered content */}
        <div className="absolute flex flex-col items-center">
          <h1 className="text-6xl font-bold text-white">
            Multiple Revenue
            <br />
            Streams
          </h1>
          <div className="w-52 h-1 bg-yellow-500 mt-3"></div>
        </div>
      </div>
      
      {/* Centered bg-zinc-800 section */}
      <div className="bg-zinc-900 text-white py-20" style={{ width: '1300px', height: '630px' }}>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8 rounded-lg">
            {feature.icon}
            <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default withTranslation(ModelPartTwo);
