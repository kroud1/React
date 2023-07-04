import React from "react";

export default function index() {
  const text = "TSX";

  const trueFlag = true;
  const fasleFlag = false;

  const numberArray = [1, 2, 3, 4, 5];

  // TSX 파일에서 작성된 ts 컴포넌트 함수는 return()소괄호 안에 html 태그를 포함할 수 있음
  // ts return html을 표기하기 위해서는 ()소괄호로 묶어서 작성해야 함.
  // return 안에 최상위 부모 태그가 무조건 1개 존재해야 함. (0개도 X)
  // retrun 안에 ts를 작성하려면 {}로 묶어 주어야 함.
  // ts의 중괄호{}는 반드시! html태그 안에 존재해야 함.
  // retrun()안의 {}안에서 다시 html을 표기할 경우 ()로 반환 시켜야 함.

  //! return안에서는 제어문을 사용할 수 X
  // 변수와 연산자는 사용 가능
  // if문 >> 논리연산자, 삼항연산자
  // for문 >> 배열 객체의 map메서드
  //! return()안에서는 html주석이 사용 X
  // {}를 사용한 js/ts 주석을 사용해야 함.
  //! XML문법을 준수해야 함.
  // html요소를 소문자로 작성
  // html 속성은 대소문자를 구분
  const TRUE_TEXT = "true";
  return (
    <>
      {trueFlag && <div>{TRUE_TEXT}</div>}
      {trueFlag ? <div>ture</div> : <div>false</div>}
      {numberArray.map((number) => {
        <div>{number}</div>;
      })}
    </>
  );
}
