import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Page1 from "./pages/Page1/Page1.jsx"
import Page3 from "./pages/Page3/Page3.jsx"
import Page2Default from "./pages/Page2/Page2Default/Page2Default.jsx"
import Page2Opened1 from "./pages/Page2/Page2Opened/Page2Opened1.jsx"
import Page2Opened2 from "./pages/Page2/Page2Opened/Page2Opened2.jsx"
import Page2Opened3 from "./pages/Page2/Page2Opened/Page2Opened3.jsx"
import Page2Opened4 from "./pages/Page2/Page2Opened/Page2Opened4.jsx"
import Page2Opened5 from "./pages/Page2/Page2Opened/Page2Opened5.jsx"
import Page2Opened6 from "./pages/Page2/Page2Opened/Page2Opened6.jsx"
import EmptyPage from "./pages/EmptyPage/EmptyPage.jsx"


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
              <Route path="/projects_ope1" element={<Page2Opened1/>}/>
              <Route path="/projects_ope2" element={<Page2Opened2/>}/>
              <Route path="/projects_ope3" element={<Page2Opened3/>}/>
              <Route path="/projects_ope4" element={<Page2Opened4/>}/>
              <Route path="/projects_ope5" element={<Page2Opened5/>}/>
              <Route path="/projects_ope6" element={<Page2Opened6/>}/>
              <Route path='/empty' element={<EmptyPage/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
