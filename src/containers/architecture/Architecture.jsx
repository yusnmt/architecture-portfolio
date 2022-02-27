import React from 'react'
import './architecture.css'

import { Plan } from '../../components';
import { plan1, plan2, plan3, plan4, plan5, plan6, plan7, plan8, plan9 } from './imports';
import model from '../../assets/perspective.png';

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
        <h2 className='gradient__text'>PrototypeとDraw2Design AIを元に住宅の設計を行う</h2>
        <p>AIと設計者の共創的な設計プロセスを通して、本研究のプロトタイプとなる住宅の設計を行った。AIは人間が行うには膨大な時間を要するplanの作成を単純な外形を作成することで、多様にアイデアを出力することができる。また、planの生成のみならず、外観デザインを学習し設計者のドローイングを介したイメージを作成するといった新しいデザインプロセスの可能性が存在する。より多様なデータを学習し、それらのパラメータを容易に操作できるとすれば、 AIを巧みに使いこなしデザインを行うといったことが、これからの新しい設計者のあり方の一つとなるのではないか。</p>
        <img src={model} alt='model' />
      </div>
    </div>
  )
}

export default Architecture