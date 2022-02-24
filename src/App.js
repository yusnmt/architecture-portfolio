import React from 'react'
import { Navbar } from './components'
import { Architecture, CreativeAI, Footer, Header, Perspective, Process, Research } from './containers'

const App = () => {
  return (
    <div className='App'>
        <div className='test'>
            <Navbar />
            <Header />
        </div>
        <Research />
        <CreativeAI />
        <Process />
        <Architecture />
        <Perspective />
        <Footer />
    </div>
  )
}

export default App