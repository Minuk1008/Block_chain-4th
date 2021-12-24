import React, {useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
    {
    id: 1,
    text: 'create Project',
    done: true
    },
    {
    id: 2,
    text: 'Component Styling',
    done: true
    },
    {
    id: 3,
    text: 'Make Context',
    done: false
    },
    {
    id: 4,
    text: 'Developing Functional',
    done: false
    }
];

// context 부터 = create/use Context는 사전에 단어를 등록한다고 이해하면 편함
const TodoStateContext = createContext(); // TodoState라는 사전을 만듬 (이하동문)
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function useTodoState() { 
    const context = useContext(TodoStateContext); // 이게 TodoState 사전에 등록된 단어들을 사용하겠다~ 이말씀
    
    if(!context) {
        throw new Error('Cannot Find TodoProvider') // Todostate에 등록된 내용이 아니라면 에러
    }
    
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    
    if(!context) {
        throw new Error('Cannot Find TodoProvider')
    }
    
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    
    if(!context) {
        throw new Error('Cannot Find TodoProvider')
    }
    
    return context;
}

////////////////////////////////////////////////////////

// useReducer 는 useState가 많을때 사용 = 사실상 사용하는 방식도 똑같지만 [state, setState] 에서 바뀌는 setState 값이 dispatch 로 바꿔서
// switch 문에서 action type (= case) 으로 등록된 내용을 dispatch로 가져다 쓰는 방식,,,이런걸 재활용성이라고 하는건가? 암튼 그냥 위에
// context처럼 언제든 불러와 사용가능하게 해주는 역할을 함.
function todoReducer(state, action) {
    switch(action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "TOGGLE":
            return state.map(
                todo => todo.id == action.id ? {...todo, done: !todo.done } : todo
            );
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

