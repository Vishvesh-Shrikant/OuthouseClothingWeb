import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import Header from './Components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='bg-background w-full flex flex-col'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
