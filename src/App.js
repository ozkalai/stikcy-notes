import {useRef  , useEffect , useState} from 'react'
import MainContext from './MainContext'
import LeaveCommentText from './components/LeaveCommentTest'
import Note from './components/Note'
import NoteBox from './components/NoteBox'
import './App.css';

function App() {

  const screen = useRef(null)
  const [mode , setMode] = useState(false)
  const [notes , setNotes ] = useState([
    {
      id: 1,
      note: "bu bir test nottur",
      color: "red",
      position: {
        x: 350,
        y:300
      }
    }
  ])
  const [position , setPosition] = useState({
    x:0,
    y:0
  })
  const [boxPosition , setBoxPosition] = useState([{
    x: 0,
    y: 0
  }])
  const [boxVisible , setBoxVisible] = useState(false)

  useEffect(() => {
    screen.current.focus()
  },[])

  const handleKeyUp = (e) => {
    if(e.key === "c"){
      setMode(!mode)
    }
  }

  const handleMouseMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
  }

  const handleClick = (e) => {
    if (mode) {
      setBoxPosition({
        
      })
    }
    setBoxPosition({
      x: position.x,
      y:position.y
    })
    setBoxVisible(true)
  } 

  const data = {
    position,
    boxPosition
  }

  return (
    <MainContext.Provider value={data} >
     <div ref={screen} onClick={handleClick} tabIndex={0} onMouseMove={handleMouseMove} onKeyUp={handleKeyUp} className={`screen ${mode && ' editable'}`}>
      
      <img src="https://webso.cool/images/radyosfer.jpg"/>

      {mode &&  <LeaveCommentText />}

      {mode && (<div>Yorum modu aktif</div>)}

      {notes && notes.map(note => <Note {...note} />)}

      {boxVisible && <NoteBox />}
    </div> 
    </MainContext.Provider>
    
  );
}

export default App;
