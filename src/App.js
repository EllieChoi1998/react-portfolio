
import './css/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Introduction from './personal/Introduction';
import KosaPortfolio from './kosa/KosaPortfolio';
import UniversityPortfolio from './uni/UniversityPortfolio';


function App() {
  // // eslint-disable-next-line no-unused-vars
  // const videoData = {
  //   url: video1,
  //   title: "3차 미니프로젝트 - TimeMarket",
  //   description: "TimeMarket 프로젝트에 대한 설명입니다.",
  // };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <Router>
      
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
            <li><Link to="/introduction">About Ellie</Link></li>
            <li><Link to="/university-portfolio">The University of Sydney</Link></li>
            <li><Link to="/kosa-portfolio">KOSA MSA 5</Link></li>
          </ul>
        </div>
      
        {/* Video 컴포넌트를 JSX로 올바르게 사용 */}
        {/* <Video video={videoData} /> */}
        
        <div className="footer-name">Hye Ryung Ellie Choi</div>
        
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Introduction />} /> {/* 기본 페이지 설정 */}
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/kosa-portfolio" element={<KosaPortfolio />} />
            <Route path="/university-portfolio" element={<UniversityPortfolio />} />
          </Routes>
      </main>
    </div>
    
    </Router>
  );
}

export default App;