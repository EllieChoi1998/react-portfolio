import video1 from './videos/[MSA5] 5팀 최혜령 개인 2차 프로젝트 결과 영상.mp4';

const Intro = () => {
    return (
        <div className='3rdmini'>
        <video muted autoPlay loop>
            <source src={video1} type="video/mp4" />
        </video>
        </div>
    );
}

export default Intro;
