import React from 'react';

export default function index() {
  return <div>index</div>;
}

// 동기와 비동기

// ! 동기
// : 요청을 보낸 후에 그 요청이 끝나야 다음 작업을 수행하는 방식

// ! 비동기
// : 특정 코드의 연산이 끝날 때까지 기다리지 않고 다음 코드를 먼저 실행하는 방식

// ? Async/Await와 Promise의 차이

// Async/Await
// ~ 자바스크립트의 비동기 연산을 처리하는 방법
// ~ 비동기 코드를 마치 동기적으로 작동하는 것처럼 작성 가능

// Promise
// ~ 자바스크립트의 비동기 연산을 처리하는 객체
// ~ 대기, 이행, 거부라는 세 가지 상태를 가짐
// then(), catch()메소드를 제공하여, 비동기 연산의 결과를 처리

// ! 에러 핸들링
// : try...catch문을 사용하여 에러 처리
// : try 블록 안의 코드에서 에러 발생 -> 제어흐름이 catch 블록으로 이동하고, catch 블록 안의 코드가 실행

// ! 로딩 상태 관리
// : useState 훅을 사용하여 로딩 상태를 관리
// : API 요청을 시작할 때(로딩 상태를 true로 설정), 요청이 완료될 때(로딩 상태를 false로 설정)
// ? PostListAsync.tsx에서 같이 실습
