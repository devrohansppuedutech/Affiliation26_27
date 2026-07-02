import { useState } from 'react'
import CollegeList from "../areas/College/pages/CollegeList";
import "../App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CollegeList />
    </>
  )
}

export default App
