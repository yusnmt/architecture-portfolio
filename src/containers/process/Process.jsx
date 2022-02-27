import React from 'react'
import './process.css'

import designProcess from '../../assets/process.png'

const Process = () => {
  return (
    <div className='ap__process section__padding' id='process'>
      <div className='ap__process-header'>
        <h2 className='gradient__text'>Creative AIを用いたDesign Process</h2>
      </div>
      <div className='ap__process-content'>
        <img src={designProcess} alt='Design Process' />
      </div>
    </div>
  )
}

export default Process