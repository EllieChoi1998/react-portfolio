import video1 from '../videos/[MSA5] 5팀 최혜령 개인 2차 프로젝트 결과 영상.mp4';

const videoList = [
    { id: 1, src: video1, title: 'KOSA MSA5 2nd Mini Project - KOMMUNITY' },
];

const Intro = () => {
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
