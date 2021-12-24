// Action type definition
const ADD_TODO = 'todo/ADD_TODO';
const TOGGLE_TODO = 'todo/TOGGLE';

// Action create function definition
let nextId = 1; //todo data unique id
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, //add new item +1 to nextId
        text
    }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

// initial state definition
// reducer 초기 상태는 꼭 object type일 필요는 없음
// array, number, string, boolean 도 된다
const initialState = [ 
    //다음과 같은 object를 배열에 넣을 것
    // {
    //     id: 1,
    //     text: 'example',
    //     done: false
    // }
];

export default function todos(state=initialState, action) { //reducer
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(
                todo => 
                todo.id === action.id ? {...todo, done: !todo.done} : todo
                //  id 가 일치하면 done 값을 toggle, 그렇지 않다면 그냥 todo
            );
        default:
            return state;
    }
}