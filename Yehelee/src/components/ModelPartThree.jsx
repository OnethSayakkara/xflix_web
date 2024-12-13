import React from 'react';
import modelherowallpaperPartTwo from '../assets/images/modelhero10.jpg';
import {  FaChartLine, FaTwitter, FaBlog, FaBullhorn, FaComments, FaGlobe } from 'react-icons/fa';
import { withTranslation } from 'react-google-multi-lang'
const ModelPartThree = () => {

  const features = [
    
    
    
    { icon: <FaChartLine size={50} className="text-orange-500" />, title: 'Massive Traffic', description: 'Take advantage of our 3 billion visits a month traffic - get new fans and viewers daily' },
    { icon: <FaTwitter size={50} className="text-orange-500" />, title: 'Autotweets', description: 'Connect your social media accounts to bring your fans to your pages' },
    { icon: <FaBlog size={50} className="text-orange-500" />, title: 'Blogs and Video Tips', description: 'Read, listen and watch the latest tips and tricks to making the biggest buck for your bang' },
    { icon: <FaBullhorn size={50} className="text-orange-500" />, title: 'Social Promotions', description: 'Our social channels combined have over 2 million followers. Get your content in front of all those people' },
    { icon: <FaComments size={50} className="text-orange-500" />, title: 'Active Communities', description: 'Join our Discord and Reddit communities to promote your content, find fellow content producers and make like-minded friends' },
    { icon: <FaGlobe size={50} className="text-orange-500" />, title: 'Modelhub Website', description: 'Your paid videos automatically appear on your Modelhub site, allowing you to advertise a site that only shows your paid videos to your fans' },
  ];
  return (
    <div className="bg-black text-center h-auto flex flex-col items-center">
      <div className="relative flex justify-center items-center mt-16">
        <img
          src={modelherowallpaperPartTwo}
          alt="Sign Up Model"
          className="object-cover opacity-50"
          style={{ width: '1300px', height: '400px' }}
        />
        
        {/* Container for centered content */}
        <div className="absolute flex flex-col items-center">
          <h1 className="text-6xl font-bold text-white">
          Marketing Tools To

            <br />
            Grow Your Brand
          </h1>
          <div className="w-80 h-1 bg-yellow-500 mt-3 ml-40"></div>
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

export default withTranslation(ModelPartThree);
