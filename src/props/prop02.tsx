// import React from 'react'

// // props의 경우 읽기 전용(read-only) : 'immutable'(변할 수 없다.)
// // 컴포넌트가 받을 props의 타입을 정의
// type Props = {
//     name: string;
// }

// // props를 사용하는 자식 컴포넌트를 정의
// // const welcome: React.FC<Props> = (props: Props) => {
// //     return <h1>Hello, {props.name}</h1>;
// // }
// props내부의 값을 조회할 때마다 props.를 입력
// 이를 비구조화 할당


// // 부모 컴포넌트에서 자식 컴포넌트를 사용하고, props를 통해 데이터를 전달
// //  const prop02: React.FC<Props> = (props: Props) => {
// //   return 
// //      <welcome name='Seungah' />
  
// // }

// // export default prop02
import React from 'react'

export default function prop02() {
  return (
    <div>prop02</div>
  )
}
