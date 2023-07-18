import React, { ChangeEvent, useState } from 'react'

// useForm 커스텀 훅 생성
// : 상태와 상태 변경 함수를 가져옴.
// useForm훅은 초기상태(initialState)를 인자로 받고 value와 handlechange함수를 반환

// : values의 상태를 useState로 생성
// : handleChange 함수를 정의
//          - 입력 요소의 변경 이벤트가 발생할 때마다 호출,
//          - 이벤트 객체에서 이름(name)과 값(value)을 가져와서 values 상태르 업데이트

interface FormState {
    [key: string]: string
}

function useForm(initialState: FormState) {

    const [values, setValues] = useState<FormState>(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

  return { values, handleChange };
}

export default useForm