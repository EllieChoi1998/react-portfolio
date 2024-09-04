import React from 'react';

const Intro = ({ videoList }) => {
  const handlePlay = (event) => {
    event.target.play();
  };

  return (
    <div className='video-list'>
      {videoList.map(video => (
        <div key={video.id} className='video-item'>
          <h3>{video.title}</h3>
          <video 
            width="100%" 
            height="360" 
            controls 
            onClick={handlePlay}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}

export default Intro;
