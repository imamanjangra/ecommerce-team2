import { Route, Routes } from 'react-router-dom'
import Add_cartpage from './Pages/Add_cartpage'
import DetailPage from './Pages/DetailPage'
import AboutPage from './Pages/AboutPage'
// import DetailPage from './Pages/DetailPage'

function App() {
  
  return (
  <Routes >
      <Route path='/' element={<DetailPage/>}/>
      <Route path='/cart/:id' element={<Add_cartpage/>}/>
      <Route path="/about" element={<AboutPage />} />
  </Routes>
  )
}

export default App
