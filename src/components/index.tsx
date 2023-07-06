// 애플리케이션의 재사용 가능한 컴포넌트들이 위치
// 페이지의 요소에 필요 정의
import React from 'react'
import Component01 from './component01'
import Component02 from './component02'



function index() {
  return (
    <>
    <Component01/>
    <Component02/>
    </>
  );
}

export default index