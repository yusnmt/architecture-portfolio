import React from 'react'
import { Navbar } from './components'
import { Architecture, CreativeAI, Footer, Header, Perspective, Process, Research } from './containers'
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
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