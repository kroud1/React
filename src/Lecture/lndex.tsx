import React from "react";
//# React

// 컴포넌트 기반 아키텍처
// Virtual DOM
// 단방향 데이터 흐름

//! React 기본 개념
// component(컴포넌트) : js(ts) 함수나 클래스로 작성, 입력을 받아 화면에 표시될 요소에 반환
// Props : properties의 줄임말, 컴포넌트 간에 데이터를 전달하는 데 사용
// State : 컴포넌트 내에서 관리되는 데이터, 변경 가능
//         (State가 변경되면 해당 컴포넌트는 재렌더링됩니다.)
// Lifecycle methods
// Hooks : 함수형 컴포넌트에서 React state와 lifecycle 기능을 연결할 수 있게 해주는 기능

//! React의 필요성
// 유지 보수 용이 : React는 컴포넌트 기반 아키텍처를 도입함으로써, 개발자가 기능별로 컴포넌트를
//                 분리하고 재사용함으로써 코드의 유지 보수를 쉽게 할 수 있게 해줍니다.
// 성능 향상 : React는 Virtual DOM을 도입함으로써, 실제 DOM에 접근하는 비용을 줄이고 성능을
//            향상시켰습니다. 이는 특히 대규모 애플리케이션에서 중요합니다.
// 커뮤니티와 생태계 : React는 매우 크고 활성화된 커뮤니티와 풍부한 생태계를 가지고 있습니다.
//                   이로 인해 많은 도구와 라이브러리가 React와 함께 사용될 수 있습니다.

// JSX : Javascript + XML
// UI구조를 직관적이고 명확하게 표현 가능

// JSX
// 1. 닫힘 태그가 반드시 있어야 한다.
// 2. 자바스크립트의 표현식 사용 가능 : 중괄호 안에 js 표현식 작성 가능
// 3. 스타일과 클래스 지정 : style속성은 js객체로 전달되어야 하고, class 대신 className을 사용
// 4. 자식요소 : 태그 사이에 존재하는 내용은 모두 자식요소로 간주

// TSX


export default function lndex() {
  return <></>;
}
