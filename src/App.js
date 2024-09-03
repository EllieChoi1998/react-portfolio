import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import Video from './video-app';
import Intro from './Intro';
// eslint-disable-next-line no-unused-vars
import video1 from './videos/[MSA5] 5팀 최혜령 개인 2차 프로젝트 결과 영상.mp4';


function App() {
  // eslint-disable-next-line no-unused-vars
  const videoData = {
    url: video1,
    title: "3차 미니프로젝트 - TimeMarket",
    description: "TimeMarket 프로젝트에 대한 설명입니다.",
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* 사이드바 토글 버튼 */}
        <div className="sidebar-toggle-button" onClick={toggleSidebar}>
          {/* 버튼 디자인: 사이드바가 열려 있는 상태에 따라 클래스 변경 */}
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
        </div>

        {/* 사이드바 */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#introduction">About Ellie</a></li>
            <li><a href="#university-portfolio">The University of Sydney</a></li>
            <li><a href="#kosa-portfolio">KOSA MSA 5</a></li>
          </ul>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Video 컴포넌트를 JSX로 올바르게 사용 */}
        {/* <Video video={videoData} /> */}
        <div className="kosa-videos" style={{ backgroundColor: 'wheat' }} width="90%">
          <Intro />
        </div>

      </header>
    </div>
  );
}

export default App;
