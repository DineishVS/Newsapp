import React, { useState } from "react";
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import Newsitem from "./Components/Newsitem"
const App=()=>{
  const [category, setCategory] = useState("general");   // Default to 'general'

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/> 
    
    </>
  )
}

export default App