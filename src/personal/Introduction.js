import React from 'react';  // 중복 import 제거
import '../css/Introduction.css'; // 스타일 파일을 import 합니다.

import Mbti from '../components/charts/Mbti';
import photo_ellie from '../img/photo_ellie.jpg';


const Introduction = () => {

  const mbti_data = [
    { labelLeft: '외향형', percentLeft: 71, labelRight: '내향형', percentRight: 29, color: '#2196f3' },
    { labelLeft: '직관형', percentLeft: 52, labelRight: '관찰형', percentRight: 48, color: '#ff9800' },
    { labelLeft: '사고형', percentLeft: 58, labelRight: '감정형', percentRight: 42, color: '#4caf50' },
    { labelLeft: '계획형', percentLeft: 69, labelRight: '탐구형', percentRight: 31, color: '#9c27b0' },
    { labelLeft: '확신형', percentLeft: 64, labelRight: '민감형', percentRight: 36, color: '#f44336' },
  ];
  
  return (
    <div id="introduction" className="introduction"> 
    
      <div id="photo">
      <img 
  src={photo_ellie} 
  alt="Profile Ellie photo" // alt 속성 추가
  style={{
    maxWidth: '300px',
    width: '100%',
    height: 'auto',
    borderRadius: '10px'
  }}
/>
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

      <div style={{ padding: '20px' }}>
      <Mbti data={mbti_data} />
    </div>
    </div>
  );
}

export default Introduction;
