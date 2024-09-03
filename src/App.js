import logo from './logo.svg';
import './App.css';
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

  return (
    <div className="App">
      <header className="App-header">
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
        <Intro/>
      </header>
    </div>
  );
}

export default App;
