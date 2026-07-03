import { useState } from 'react'
import CollegeList from "../areas/College/pages/CollegeList";
import Emplist from "../areas/Employee/components/EmployeeTable";
import "../App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CollegeList />
    <Emplist />
    </>
  )  
}

export default App
