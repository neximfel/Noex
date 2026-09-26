import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Page1 from "./pages/Page1/Page1.jsx"
import Page3 from "./pages/Page3/Page3.jsx"
import Page2Default from "./pages/Page2/Page2Default/Page2Default.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path="/" index element={<Page1/>} />
              <Route path="/about" element={<Page3/>} />
              <Route path="/projects" element={<Page2Default/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
