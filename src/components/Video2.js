import React from 'react';

const Video2 = ({ videoList }) => {
    
    
    const handleLoadedData = (event) => {
      event.target.play().catch(error => {
        // 플레이가 실패했을 때 오류 처리
        console.error('Playback failed:', error);
      });
    };
    
    return (
      <div className='video-list'>
        {videoList.map(video => (
          <div key={video.id} className='video-item'>
            <h3>{video.title}</h3>
            <video 
              width="50%" 
              height="360" 
              controls 
              muted
              autoPlay
              onLoadedData={handleLoadedData} /* 비디오 데이터 로드 완료 후 재생 */
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          </div>
        ))}
      </div>
    );
}
export default Video2;
