import { useState } from 'react'
import Header from './Components/Header/Header'
import Hey from './Components/Body/Hey'
import Body from './Components/Body/Body'
import SmoothScroll from './Components/SmoothScroll'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SmoothScroll>
        <Header/>
        <Body/>
        <Footer/>
    </SmoothScroll>

    </>
  )
}

export default App
