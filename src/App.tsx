import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<div>Hello User: xxxxxx</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
