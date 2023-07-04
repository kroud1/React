import "./App.css";
import * as React from "react";
import Mui from "./Lecture/Mui";
import Component from "./components/MenuAppBar";
import Component2 from "./components/MenuAppBar";
import Wrapper from "./wrapper";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./views/Main";
import MyPage from "./views/MyPage";
import About from "./views/About";

interface ReactProps {
  name?: string;
  color: string;
  isSpecial: boolean;
  // props 이름만 작성하고 값 설정을 생략하는 경우 true로 간주
}

const App: React.FC = () => {
  return (
    <>
      <Mui />
      <Wrapper>
        <Component name="react" color="red" isSpecial />
        <Component2 color="red" isSpecial={false} />
      </Wrapper>
      <Router>
        <nav>
          <ul>
            {/* Link컴포넌트 제공
            앱 내에서 새로운 페이지 로드 없이 라우트 간의 탐색을 가능하게 합니다
            Link컴포넌트의 to속성은 탐색할 경로를 지정 */}
            <li>
              <Link to="/">Main메인</Link>
            </li>
            <li>
              <Link to="/myPage">MyPage마이페이지</Link>
            </li>
            <li>
              <Link to="/about">About공지사항</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* path속성="/URL 지정" component속성={해당 경로에서 렌더링될 컴포넌트를 지정} */}
          <Route path="/" element={<Main />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
