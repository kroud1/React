import React, {
  ChangeEvent,
  FC,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';
import { styled } from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.theme.theme};
`;

type User = {
  id: number;
  username: string;
  email: string;
  active: boolean;
};

function countActiveUsers(users: User[]) {
  console.log('활성 사용자 수를 확인합니다.');
  return users.filter((user) => user.active).length;
}

const Execute: FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  //   const onchange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setInputs({
  //       ...inputs,
  //       [name]: value,
  //     });
  //   };

  //! useCallback 사용
  const onchange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  // user 상태는 사용자 목록을 관리
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: 'seungah', email: 'seungah@qwe.qwe', active: true },
    { id: 2, username: 'junkk', email: 'junkk@kk.kkk', active: false },
    { id: 3, username: 'hello', email: 'hello@hello.hel', active: false },
  ]);
  // netxId useRef를 사용하여 다음 사용자의 id를 제공
  const nextId = useRef(4);

  //   const onCreate = () => {
  //     const user: User = {
  //       id: nextId.current,
  //       username,
  //       email,
  //       active: false,
  //     };

  //! useCallback
  const onCreate = useCallback(() => {
    const user: User = {
      id: nextId.current,
      username,
      email,
      active: false,
    };

    setUsers((users) => users.concat(user));

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  }, [username, email]);

  //   const onRemove = (id: number) => {
  //     // user.id가 매개변수로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //     // user.id가 id인 것을 제거
  //     setUsers(users.filter((user) => user.id !== id));
  //   };

  //! useCallback
  const onRemove = useCallback((id: number) => {
    // user.id가 매개변수로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // user.id가 id인 것을 제거
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  //   const onToggle = (id: number) => {
  //     setUsers(
  //       users.map((user) =>
  //         user.id === id ? { ...user, active: !user.active } : user
  //       )
  //     );
  //   };

  //! useCallback
  const onToggle = useCallback((id: number) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  }, []);

  // const onToggle = useMemo(
  // () => () => {
  // },
  // [users]
  // );

  // useMemo: 특정 결과값을 재사용할 때 사용
  // useCallback: 특정함수를 새로 만들지 않고 재사용하고 싶을 때 사용
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onchange}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
      <Button>스타일 컴포넌트 예시</Button>
    </>
  );
};

export default Execute;
