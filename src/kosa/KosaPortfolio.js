import React from 'react';
import '../css/Introduction.css'; // 스타일 파일을 import 합니다.
import Intro from '../components/Intro';
const KosaPortfolio = () => {
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
          <Intro />
        </div>
    </div>
  );
}

export default KosaPortfolio;
