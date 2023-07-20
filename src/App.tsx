import './App.css';
import * as React from 'react';
// import Mui from "./Lecture/Mui";
// import Component from "./components/MenuAppBar";
// import Component2 from "./components/MenuAppBar";
// import Components from "./components";
import Wrapper from './props/Wrapper';
import { Route, Routes } from 'react-router-dom';
// import Main from "./views/Main";
// import MyPage from "./views/MyPage";
// import About from "./views/About";
// import Prop from './props/prop02'
import State from './state';
import Effect from './effect';
import Todo from './views/Practice';
import Hello from './props/hello';
import Input from './views/Input';
import ArrayRender from './views/ArrayRendering/application';
import Array from './views/Array/Execute';
import Greeting from './views/Greeting/Greeting';
import Counter from './views/Counter';
import MyForm from './views/MyForm';
import CustomHooks from './hooks/index';
import CostomHooksPractice from './hooks/Practice/index';
import ContextApi from './contextAPI';
import ContextApiLogIn from './contextAPI/Practice';
import StyledComponents from './styledComponents';
import StyledComponents2 from './styledComponents/practice';
import FetchAPI from './restAPI/PostListFetch';
import AxiosAPI from './restAPI/PostListAxios';
import AsyncAPI from './restAPI/PostListAsync';
// interface ReactProps {
//   name?: string;
//   color: string;
//   isSpecial: boolean;
//   // props 이름만 작성하고 값 설정을 생략하는 경우 true로 간주
// }

// const App: React.FC = () => {
//   return (
//     <>
//       <Mui />
//       <Wrapper>
//         <Component name="react" color="red" isSpecial />
//         <Component2 color="red" isSpecial={false} />
//       </Wrapper>
//       <Router>
//         <nav>
//           <ul>
//             {/* Link컴포넌트 제공
//             앱 내에서 새로운 페이지 로드 없이 라우트 간의 탐색을 가능하게 합니다
//             Link컴포넌트의 to속성은 탐색할 경로를 지정 */}
//             <li>
//               <Link to="/">Main메인</Link>
//             </li>
//             <li>
//               <Link to="/myPage">MyPage마이페이지</Link>
//             </li>
//             <li>
//               <Link to="/about">About공지사항</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           {/* path속성="/URL 지정" component속성={해당 경로에서 렌더링될 컴포넌트를 지정} */}
//           <Route path="/" element={<Main />} />
//           <Route path="/myPage" element={<MyPage />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

function App() {
  const onClick = () => {};
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      {/* <State name="Seungah" />
      <Effect />
      <Todo /> */}
      {/* 라우트를 여러개 사용 시 Routes 안에 정의 해야함 
    Path속성 : URL경로
    element속성 : 컴포넌트 지정
    npm install react-router-dom
    */}
      <Routes>
        {/* <Route path="/componets" element={<Components/>}/>
        <Route path='/props' element={<Prop name='seungah'/>}/> */}
        <Route
          path="/"
          element={
            <Wrapper>
              <Hello color="blue" />
            </Wrapper>
          }
        />
        <Route path="input" element={<Input />} />
        <Route path="arrayRendering" element={<ArrayRender />} />
        <Route path="/array" element={<Array />} />
        <Route
          path="/greeting"
          element={<Greeting name="Seungah" onClick={onClick} />}
        />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<MyForm onSubmit={onSubmit} />} />
        {/* <Route path="/reducerSample" element={<reducerSample/>}/> */}
        <Route path="/customHooks" element={<CustomHooks />} />
        <Route path="/costomHooksPractice" element={<CostomHooksPractice />} />
        <Route path="/contextApi" element={<ContextApi />} />
        <Route path="/contextApiLogIn" element={<ContextApiLogIn />} />
        <Route path="/styledComponents" element={<StyledComponents />} />
        <Route path="/styledComponents2" element={<StyledComponents2 />} />
        <Route path="/fetchAPI" element={<FetchAPI />} />
        <Route path="/axiosAPI" element={<AxiosAPI />} />
        <Route path="/asyncAPI" element={<AsyncAPI />} />
      </Routes>
    </>
  );
}

export default App;
