import React, { useState } from 'react';
import { videos } from '../../Backend/AllVideos';
import SearchComponent from '../SearchComponent';

export const Explore = () => {
  const [video, setVideos] = useState(videos);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter videos based on the search query
    const filteredVideos = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );

    setVideos(filteredVideos);
  };

  return (
    <>
      <h1>Explore</h1>
      <SearchComponent onSearch={handleSearch} />

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {video.map((video) => (
          <div key={video._id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {video?.chips?.map((x) => (
                <h5 key={x} style={{ display: 'flex', flexDirection: 'row' }}>
                  {x}
                </h5>
              ))}
            </div>
            <a href={video.src}>Watch Video</a>
          </div>
        ))}
      </div>
    </>
  );
};
