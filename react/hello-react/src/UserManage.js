import React, {useState, useRef} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function UserManage() {
    const [inputs, setInputs] = useState({
        username: "",
        email: ""
    });

    const {username, email} = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'Undead',
            email: 'undead@undercity.com',
            active: true
        },
        {
            id: 2,
            username: 'Bloodelf',
            email: 'bloodelf@silvermoon.com',
            active: false
        },
        {
            id: 3,
            username: 'Nightelf',
            email: 'nightelf@darnasus.com',
            active: false
        }
    ]);

    const nextId = useRef(4)
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email
        };
        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    const onToggle = (id) => {
        setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user))
    }

    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    )
}

export default UserManage;