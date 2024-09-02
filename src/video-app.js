import Thumbnail from 'react'; // Thumbnail 컴포넌트의 실제 경로
import LikeButton from 'react'; // LikeButton 컴포넌트의 실제 경로
function Video({ video }) {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }

export default Video;