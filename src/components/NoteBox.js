import React from 'react'
import MainContext from '../MainContext'
import {useContext} from 'react'

function NoteBox() {
    const {boxPosition} = useContext(MainContext)

    const types = [
        {
            name:"comment",
            color:"red",
            text:"Yorum"
        },
        {
            name: "private-comment",
            color: "#999",
            text: "Gizli Yorum"
        },
        {
            name: "note",
            color: "orange",
            text: "Not"
        }
    ]

    return (
        <div className="note-box" style={{position: "absolute" , top: boxPosition.y , left: boxPosition.x}}>
            <select>
                {types.map(type => (
                    <option value={type.name}>{type.text}</option>
                ))}
            </select>
        </div>
    )
}

export default NoteBox