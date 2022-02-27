import React from 'react';
import './perspective.css';

import exterior from '../../assets/exterior.png';
import perspective1 from '../../assets/perspective1.png';
import perspective2 from '../../assets/perspective2.png';
import perspective3 from '../../assets/perspective3.png';

const Perspective = () => {
  return (
    <div className='ap__perspective' id='perspective'>
        <div className='ap__perspective-exterior'>
          <div className='ap__perspective-exterior__pers1'>
            <img src={exterior} alt='exterior' />
          </div>
          <div className='ap__perspective-exterior__pers2'>
            <img src={perspective1} alt='perspective1' />
          </div>
        </div>
        <div className='ap__perspective-interior'>
          <div className='ap__perspective-interior__pers3'>
            <img src={perspective2} alt='exterior' />
          </div>
          <div className='ap__perspective-interior__pers4'>
            <img src={perspective3} alt='perspective1' />
          </div>
        </div>
    </div>
  )
}

export default Perspective