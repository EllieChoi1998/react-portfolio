import React from 'react';
import '../css/Introduction.css'; // 스타일 파일을 import 합니다.
import Video2 from '../components/Video2';
import grad_video from '../videos/졸업식2.mp4';

const UniversityPortfolio = () => {
  // 비디오 리스트 정의
  const grad_videos = [
    { id: 1, src: grad_video, title: 'graduation ceremony' },
  ];
  return (
    <div id="uni" width="80%">
    <div id="university-portfolio" className="university-portfolio">
      <div className="grad-video" style={{ backgroundColor: 'white' }} width="60%">
          <Video2 videoList={grad_videos} />
      </div>
      <table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>최 혜령</td>
          </tr>
          <tr>
            <th>주소</th>
            <td>대한민국, 서울특별시 강남구 소재</td>
          </tr>
          <tr>
            <th>나이</th>
            <td>만 25세</td>
          </tr>
        </tbody>
      </table>
      <div className='education'>
        <h3>학력사항</h3>
        {/* 학력 사항을 여기에 추가할 수 있습니다. */}
      </div>
    </div>
    </div>
  );
}

export default UniversityPortfolio;
