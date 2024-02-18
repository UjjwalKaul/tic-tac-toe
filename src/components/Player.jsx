import React, { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    const [pName, setPname] = useState(name)

    function handleEditClick() {
        setIsEditing(true)
    }

    let playerName = <span className="player-name">{pName}</span>
    if (isEditing) {
        playerName = <input type='text' required />
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}