import React from "react";
import useForm from "./useForm";

// handleSubmit함수는 폼이 제출될 때 호출되는 콜백함수
// : 이벤트의 기본 동작을 취소, 현재 입력된 값(value)를 콘솔에 출력

// <form> 요소를 렌더링하고, onSubmit 이벤트에 handleSubmit 함수를 연결
// <input> 요소들은 각각 firstName과 lastName 값을 values에서 가져와서 표기하고,
// handleChange 함수를 이벤트 핸들러로 등록
function Index() {
  const {values, handleChange} = useForm({firstName:'', lastName: ''});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          FirstName:
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          LastName:
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Index;
