import React,{ useState } from "react";

const TodoItem = React.memo(function TodoItem({todo, onToggle}){
    return (
        <li
            style={{textDecoration: todo.done ? 'line-through' : 'none'}}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );     
});

const Todo