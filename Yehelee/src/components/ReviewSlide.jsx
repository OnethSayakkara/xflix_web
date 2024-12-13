import React, { useState } from "react";
import modelhero21 from '../assets/images/modelhero21.jpg';
import modelhero20 from '../assets/images/modelhero20.jpg';
import modelhero25 from '../assets/images/modelhero25.jpg';
import modelhero4 from '../assets/images/modelhero26.jpg';
import modelhero28 from '../assets/images/modelhero28.jpg';
import { ImQuotesRight } from "react-icons/im";
import { withTranslation } from 'react-google-multi-lang'

const ReviewSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      name: "Emily Willis",
      image: modelhero21,
      description:
        "From the xFlix team to the content makers, everyone is so nice, helpful, and supportive! We love that the xFlix Model Program feels like a community of amazing likeminded people! Meeting new fans that haven't yet come across us online has been so fun!",
        channelSub: "124M views | 103K subscribers"
    },
    {
      name: "Hailey Rose",
      image: modelhero20,
      description:
        "The xFlix model program has literally changed my life! Unmatched Ad Rev payouts, tons of awards and recognition, an amazing support team, and some of the best traffic on the web to get your content and brand out there! Extremely grateful.",
        channelSub: "2.3B views | 548K subscribers"
    },
    {
      name: "Valentina",
      image: modelhero25,
      description:
        "The xFlix Model Program is more than just a platform; it's a supportive family! The team is incredibly friendly and responsive. Collaborating with fellow creators has led to some amazing projects, and the sense of community is unmatched.",
        channelSub: "398M views | 648K subscribers"
    },
    {
      name: "Alex Hughes",
      image: modelhero4,
      description:
        "The xFlix Model Program has brought so much joy to my content creation journey! The team is incredibly supportive, and the community is filled with inspiring individuals. It's a great feeling to collaborate and connect with fans who share similar interests.",
        channelSub: "1B views | 998K subscribers"
    }, {
      name: "Julia Ann",
      image: modelhero28,
      description:
        "I've had so much fun creating material thanks to the xFlix Model Program! There are many inspirational people in the circle, and the team is very encouraging. Connecting with fans who have similar interests and working together is a wonderful feeling.",
        channelSub: "615M views | 382K subscribers"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="text-center bg-black relative">
      <h1 className="pt-28 text-5xl text-white font-bold">
        Don't just take our word for it:
      </h1>
      <div className="relative w-full flex justify-center">
        <div className="relative w-[80%] overflow-hidden mt-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / 3)}%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-1/2 p-4 transform transition-transform duration-500 ease-in-out"
                style={{
                  opacity: activeIndex === index ? 1 : 0.5,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <div
                  className="rounded-sm overflow-hidden flex flex-col items-center text-center mx-2"
                  style={{ width: '500px', height: '400px' }}
                >
                  <div className="bg-zinc-900 h-[65%] w-full flex flex-col items-center justify-center text-white">
                    <p className="text-white font-semibold text-base p-1 text-left mt-4 mb-10 ml-3">{item.description}</p>
                    <ImQuotesRight className="text-6xl ml-96 text-zinc-800"/>
                  </div>
                  <div className="bg-yellow-600 h-[35%] w-full flex flex-col items-center justify-center text-black">
                    <div className="flex justify-center -mt-20">
                          <img
                        src={item.image}
                      alt={item.name}
                      className="w-32 h-32 rounded-full object-cover border-8 border-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-2 uppercase">{item.name}</h3>
                  <h3 className="text-sm font-bold text-stone-800">{item.channelSub}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Overlay */}
          <div className="absolute top-0 right-0 w-20 h-full bg-black " style={{filter: 'blur(12px)', marginRight:'-30px'}}/>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-24 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition duration-300"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 transition duration-300"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default withTranslation(ReviewSlide);
