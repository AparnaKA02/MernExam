import { Route,Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Pnf from './Pages/Pnf'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister={true} />}/>
      <Route path='/*' element={<Pnf/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
