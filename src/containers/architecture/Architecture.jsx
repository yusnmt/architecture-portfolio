import React from 'react'
import './architecture.css'

import { Plan } from '../../components';
import { plan1, plan2, plan3, plan4, plan5, plan6, plan7, plan8, plan9 } from './imports'

const Architecture = () => {
  return (
    <div className='ap__architecture section__padding' id='architecture'>
      <div className='ap__architecture-heading'>
        <h2 className='gradient__text'>AIを用いて作成されたPrototype1-9</h2>
      </div>
      <div className='ap__architecture-plan'>
        <div className='ap__architecture-plan__row1'>
          <Plan imgUrl={plan1} title='prototype1'/>
          <Plan imgUrl={plan2} title='prototype2'/>
          <Plan imgUrl={plan3} title='prototype3'/>
        </div>
        <div className='ap__architecture-plan__row2'>
          <Plan imgUrl={plan4} title='prototype4'/>
          <Plan imgUrl={plan5} title='prototype5'/>
          <Plan imgUrl={plan6} title='prototype6'/>
        </div>
        <div className='ap__architecture-plan__row3'>
          <Plan imgUrl={plan7} title='prototype7'/>
          <Plan imgUrl={plan8} title='prototype8'/>
          <Plan imgUrl={plan9} title='prototype9'/>
        </div>
      </div>
      <div className='ap__architecture-model'>

      </div>
    </div>
  )
}

export default Architecture