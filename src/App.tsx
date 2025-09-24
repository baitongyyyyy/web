import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import Main from './page/Main'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
