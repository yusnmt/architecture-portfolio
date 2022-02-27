import React from 'react'
import './plan.css'

const Plan = ({imgUrl, title}) => {
  return (
    <div className='ap__plan-container'>
      <div className='ap__plan-container__image'>
        <img src={imgUrl} alt='plan image' />
      </div>
      <div className='ap__plan-container__title'>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Plan