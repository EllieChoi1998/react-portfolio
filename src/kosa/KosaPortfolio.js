import React from 'react';
import '../css/Introduction.css'; // 스타일 파일을 import 합니다.
import Intro from '../components/Intro';
import video1 from '../videos/[MSA5] 5팀 최혜령 개인 2차 프로젝트 결과 영상.mp4';

const KosaPortfolio = () => {
  // 비디오 리스트 정의
  const videoList = [
  { id: 1, src: video1, title: 'KOSA MSA5 2nd Mini Project - KOMMUNITY' },
  ];
  return (
    <div id="kosa-portfolio" className="kosa-portfolio">
      <p> KOSA portfolio</p>
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

      
      <div className="kosa-videos" style={{ backgroundColor: 'wheat' }} width="90%">
          <Intro videoList={videoList} />
      </div>
    </div>
  );
}

export default KosaPortfolio;
