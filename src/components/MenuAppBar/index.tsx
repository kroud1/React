import React from "react";

//# 컴포넌트(components)
// 재사용 가능한 독립적인 코드 단위
// HTML, CSS, JS/TS

interface Props {
  name?: string;
  color: string;
  isSpecial: boolean;
}
const Index: React.FC<Props> = ({ name = "이름없음", color, isSpecial }) => {
  return (
    <>
      {/* 삼항연산자 */}
      {/* <div style={{ color }}>
        {isSpecial ? "특별한 컴포넌트" : null}components, {name}
      </div> */}

      {/* 논리연산자 */}
      <div style={{ color }}>
        {isSpecial && "특별한 컴포넌트"}components, {name}
      </div>
    </>
  );
};

// Index.defaultProps = {
//   name: "이름없음",
// };

export default Index;
