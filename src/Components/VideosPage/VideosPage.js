// components/VideosPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

import "./VideosPage.css"

const VideosPage = ({ videos }) => {
  const { category } = useParams();

  // Filter videos for the selected category
  const filteredVideos = videos.filter((video) => video.category === category);

  return (
    <div>
         <div className="homepage">
    
      <div className="homepage__timeline">
      <h1>Videos of {category}</h1>
      <div className="video-container">
        {filteredVideos.map((video) => (
          <div key={video._id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            {/* Add video player or link to the video here */}
            <a href={`/video/${video._id}`}>Watch Video</a>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default VideosPage;
