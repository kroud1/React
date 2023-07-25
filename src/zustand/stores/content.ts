import create from 'zustand'

interface SelectContentState {
    selectContent: number;
    setSelectContent: (select: number) => void;
}

 const useStore = create<SelectContentState>((set) => ({
    // create 함수의 매개변수로 콜백 함수를 받는다.
    // 이 콜백함수의 return 객체에 state, setState를 넣는다.
    selectContent: window.localStorage.getltem('select') ?
    Number(window.localStorage.getItem('select')) : 0,
    setSelectContent: (select) => {
        set((state) => ({ ...state, selectContent: select}))
    }
}))

export default useStore