import React from 'react';
import modelherowallpaperPartTwo from '../assets/images/modelhero15.jpg';
import {  FaHeadset, FaGlobeAmericas} from 'react-icons/fa';
import { IoMdFingerPrint } from'react-icons/io';
import { withTranslation } from 'react-google-multi-lang'
const ModelPartFour = () => {

  const features = [
    
    
    
      { icon: <FaHeadset size={50} className="text-orange-500" />, title: 'Online Support for Models', description: 'Email us or reach out on social media at any time to get help' },
      { icon: <FaGlobeAmericas size={50} className="text-orange-500" />, title: 'Geoblocking', description: 'Keep your content from displaying in certain states or countries' },
      { icon: <IoMdFingerPrint size={50} className="text-orange-500" />, title: 'DMCA and Fingerprinting', description: 'Opt-in to protect your content - we monitor the top 50 tube sites for any stolen content' },
      
    
  ];
  return (
    <div className="bg-black text-center h-auto flex flex-col items-center">
      <div className="relative flex justify-center items-center mt-16">
        <img
          src={modelherowallpaperPartTwo}
          alt="Sign Up Model"
          className="object-cover opacity-40"
          style={{ width: '1300px', height: '400px' }}
        />
        
        {/* Container for centered content */}
        <div className="absolute flex flex-col items-center">
          <h1 className="text-6xl font-bold text-white">
          Content And
            <br />
            Model Support
          </h1>
          <div className="w-96 h-1 bg-yellow-500 mt-3"></div>
        </div>
      </div>
      
      {/* Centered bg-zinc-800 section */}
      <div className="bg-zinc-900 text-white py-20" style={{ width: '1300px', height: '330px' }}>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-7 rounded-lg">
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

export default withTranslation(ModelPartFour);
