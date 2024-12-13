import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import VideoPlayer from './VideoPlayer';

function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:8800/api/videos/getall');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  if (selectedVideo) {
    return <VideoPlayer video={selectedVideo} onBack={() => setSelectedVideo(null)} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-zinc-950">
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} onClick={() => setSelectedVideo(video)} />
      ))}
    </div>
  );
}

export default VideoGrid;
