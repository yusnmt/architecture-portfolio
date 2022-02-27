import React from 'react';
import './creativeAI.css';

import ai1 from '../../assets/ai1.png';
import ai2 from '../../assets/ai2.png';
import ai3 from '../../assets/ai3.png';

const CreativeAI = () => {
  return (
    <div className='ap__creativeAI section__padding' id='creativeAI'>
      <div className='ap__creativeAI-first'>
        <h2 className='gradient__text'>Shape2Block AI</h2>
        <img src={ai1} alt='ai1' />
        <p>平家建て住居ブロックプランデータ200枚を学習し、設計者によるデザインの種となるかたちからBlock Planを生成するShape2Block AI</p>
      </div>
      <div className='ap__creativeAI-second'>
        <h2 className='gradient__text'>Block2Plan AI</h2>
        <img src={ai2} alt='ai2' />
        <p>平家建て住居Floor Planデータ200枚を学習し、Block PlanからFloor Planを生成するBlock2Floor AI</p>
      </div>
      <div className='ap__creativeAI-third'>
        <h2 className='gradient__text'>Draw2Design AI</h2>
        <img src={ai3} alt='ai3' />
        <p>Le corbusierの建築3作品の外観デザインデータ各200枚を学習し、設計者のドローイングを元に、新しい画像を生成するDraw2Design AI</p>
      </div>
    </div>
  )
}

export default CreativeAI