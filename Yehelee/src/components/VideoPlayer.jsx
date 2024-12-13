import React, { useState, useEffect } from 'react';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import axios from 'axios';
import { IoWifi } from "react-icons/io5";
import RecommendedVideoCard from './RecommendedVideoCard';


// Helper function to calculate the relative time
const getRelativeTime = (date) => {
  const now = new Date();
  const secondsElapsed = Math.floor((now - new Date(date)) / 1000);

  const timeIntervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of timeIntervals) {
    const count = Math.floor(secondsElapsed / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
};

function VideoPlayer({ video, onBack }) {
  const [likes, setLikes] = useState(video.likes.length);
  const [dislikes, setDislikes] = useState(video.dislikes.length);
  const [userReaction, setUserReaction] = useState({
    liked: video.likes.includes(video.currentUserId),
    disliked: video.dislikes.includes(video.currentUserId),
  });
  const [isSubscribed, setIsSubscribed] = useState(video.userId.isSubscribed);
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (selectedVideo) {
    <VideoPlayer video={selectedVideo} onBack={() => setSelectedVideo(null)} />;
  }

  // New state for user details
  const [userDetails, setUserDetails] = useState({
    profileImg: '',
    name: '',
    subscribers: 0,
    videoCount: 0,
  });

  // State for recommended videos
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [displayCount, setDisplayCount] = useState(5); // Initially show 5 videos

  // Function to fetch user details
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/users/${video.userId._id}/details`);
      setUserDetails({
        profileImg: response.data.user.profileImg,
        name: response.data.user.name,
        subscribers: response.data.user.subscribers,
        videoCount: response.data.user.videoCount,
      });
    } catch (err) {
      console.error('Error fetching user details:', err);
    }
  };

  // Fetch recommended videos
  const fetchRecommendedVideos = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/videos/${video._id}/recommendations`);
      setRecommendedVideos(response.data);
    } catch (err) {
      console.error('Error fetching recommended videos:', err);
    }
  };

  // Fetch user details and recommended videos on component mount
  useEffect(() => {
    fetchUserDetails();
    fetchRecommendedVideos();
  }, [video.userId._id, video._id]);

  // Function to handle subscription
  const handleSubscription = async () => {
    try {
      const endpoint = isSubscribed
        ? `http://localhost:8800/api/users/unsub/${video.userId._id}`
        : `http://localhost:8800/api/users/sub/${video.userId._id}`;

      await axios.put(endpoint, {}, { withCredentials: true });
      setIsSubscribed(!isSubscribed);
    } catch (err) {
      console.error("Error updating subscription:", err);
    }
  };

  // Function to increment views
  const incrementView = async () => {
    try {
      await axios.put(`http://localhost:8800/api/videos/view/${video._id}`);
      console.log("View count incremented");
    } catch (err) {
      console.error("Error incrementing view:", err);
    }
  };

  // Function to handle like and dislike actions
  const handleReaction = async (type) => {
    try {
      const endpoint = type === 'like'
        ? `http://localhost:8800/api/videos/like/${video._id}`
        : `http://localhost:8800/api/videos/dislike/${video._id}`;

      await axios.put(endpoint, {}, { withCredentials: true });

      if (type === 'like') {
        setLikes((prev) => (userReaction.liked ? prev - 1 : prev + 1));
        setDislikes((prev) => (userReaction.disliked ? prev - 1 : prev));
        setUserReaction({ liked: !userReaction.liked, disliked: false });
      } else {
        setDislikes((prev) => (userReaction.disliked ? prev - 1 : prev + 1));
        setLikes((prev) => (userReaction.liked ? prev - 1 : prev));
        setUserReaction({ liked: false, disliked: !userReaction.disliked });
      }
    } catch (err) {
      console.error("Error updating reaction:", err);
    }
  };

  // Function to toggle the number of recommended videos shown
  const toggleRecommendedVideos = () => {
    setDisplayCount(displayCount === 5 ? 10 : 5);
  };

  return (
    <div className=" bg-zinc-950 min-h-screen text-white">
      <div className="flex space-x-10 space-y-8">
        {/* Render VideoPlayer if selectedVideo is set */}
      {selectedVideo ? (
        <VideoPlayer video={selectedVideo} onBack={() => setSelectedVideo(null)} style={{ height: '600px', width: '1200px' }} />
      ) : (
        <div className="flex-1 ml-28">
          <div className="mb-4 relative mt-2">
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-[1500px] h-[600px] object-contain"
              
              onPlay={incrementView}
            />
          </div>
          <h1 className="text-xl font-semibold -mt-4">{video.title}</h1>
          <div className="flex items-center justify-between text-gray-400 w-[1040px] pb-2">
            <div className="flex items-center space-x-6">
              <p>{video.views} views<span className='ml-4'>|</span></p>
              <AiFillLike className="text-lg ml-44" />
              <p>{((video.likes.length / (video.likes.length + video.dislikes.length)) * 100).toFixed(2) || 0}%<span className='ml-4'>|</span></p>
              <p>{getRelativeTime(video.createdAt)}</p>
            </div>
            <div className="flex items-center justify-end space-x-8">
              <div
                className={`flex items-center space-x-1 cursor-pointer ${userReaction.liked ? 'text-blue-500' : 'text-gray-200'} hover:border-b-2 border-yellow-500 pb-2`}
                onClick={() => handleReaction('like')}
              >
                <AiFillLike className="text-xl" />
                <p>{likes}</p>
              </div>
              <div
                className={`flex items-center space-x-1 cursor-pointer ${userReaction.disliked ? 'text-red-500' : 'text-gray-200'} hover:border-b-2 border-yellow-500 pb-2`}
                onClick={() => handleReaction('dislike')}
              >
                <AiFillDislike className="text-xl" />
                <p>{dislikes}</p>
              </div>
              <div
                className="flex items-center space-x-1 cursor-pointer text-gray-200 hover:border-b-2 border-yellow-500 pb-2"
                onClick={() => alert('Share functionality goes here')}
              >
                <IoMdShareAlt className="text-xl" />
                <p>Share</p>
              </div>
            </div>
          </div>
          <div className='w-[1040px] h-1 bg-zinc-950 border-b-2 border-gray-700'></div>

          {/* User Info */}
          <div className="flex items-center space-x-4 mt-6 mb-6 w-[1040px]">
            <img
              src={userDetails.profileImg || 'https://via.placeholder.com/50'}
              alt="Uploader"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="grid">
              <p className="cursor-pointer text-lg">{userDetails.name || 'Unknown User'}</p>
              <div className="flex">
                <p className="text-xs text-gray-400">{userDetails.subscribers} Subscribers<span className="ml-3">|</span></p>
                <p className="text-xs text-gray-400 ml-3">{userDetails.videoCount} Videos</p>
              </div>
            </div>
            <button
              onMouseEnter={(e) => isSubscribed && (e.target.textContent = 'Unsubscribe')}
              onMouseLeave={(e) => isSubscribed && (e.target.textContent = 'Subscribed')}
              onClick={handleSubscription}
              className={`px-4 py-2 rounded text-white border-2 border-gray-600 hover:border-yellow-600 flex text-lg${isSubscribed ? 'border-2 border-gray-600 text-white' : ' text-white'} hover:border-yellow-600`}
              style={{ position: 'relative', left: '640px', top: '0px' }}
            >
              <IoWifi className='text-3xl mr-3 rotate-45' />
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
          <div className='w-[1040px] h-1 bg-zinc-950 border-b-2 border-gray-700'></div>
        </div>
        )}

        {/* Recommended Videos Grid */}
        {!selectedVideo && (
        <div className="recommended-videos w-full max-w-1040px mx-auto">
  <h2 className="text-md font-semibold mb-4 mr-28 -mt-4">Recommended Videos</h2>
  <div className="grid gap-2">
  {recommendedVideos.slice(0, displayCount).map((video) => (
              <RecommendedVideoCard 
                key={video._id} 
                video={video} 
                onClick={() => { 
                  setSelectedVideo(video);
                }} 
              />
            ))}
  </div>
  <button onClick={toggleRecommendedVideos} className='p-2 bg-gray-700 rounded-md text-sm mt-6'>
    {displayCount === 5 ? "Show More" : "Show Less"}
  </button>
</div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
