import React from 'react'

function Note(note) {
    return (
        <div style={{position: "absolute" , top: note.position.y , left: note.position.x}}>
            Note
        </div>
    )
}

export default Note
