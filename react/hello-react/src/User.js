import React, {useEffect} from "react";

function User({user, onRemove, onToggle}) {
    useEffect(() => {
        // console.log("Set User value");
        console.log(user)
    //     return () => {
    //         console.log("Before change User");
    //         console.log(user);
    //     };
    }, [user]);

    return (
        <div>
            <b style={{cursor: 'pointer', color: user.active ? 'green' : 'red'}} onClick={() => onToggle(user.id)}>{user.username}</b>
            &nbsp; 
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>Delete</button>
        </div>
    )
}

export default React.memo(User);