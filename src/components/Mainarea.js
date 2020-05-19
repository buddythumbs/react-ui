import React from 'react'

export default function Mainarea(props){
    return (
        <div>
            {props.children}
            <button onClick={props.changeTheme}>Change Theme from {props.currentTheme}</button>  
        </div>
    )
}