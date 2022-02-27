import React from 'react'
import './header.css'
import perspective from '../../assets/perspective.png'

const Header = () => {
  return (
    <div className='ap__header section__padding' id='home'>
        <div className='ap__header-content'>
          <h1 className='gradient__text'>敵対的生成ネットワークを用いた<br/>Creative AIの作成と設計への応用に関する研究</h1>
          <p>本研究ではGANを用いた創造性を持つ人工知能、つまり建築設計・デザイン分野への応用を意図したCreative AI を作成し、Creative AI と設計者が共に作り上げていく設計プロセスを提案する。</p>

          <div className='ap__header-content__profile'>
            <p>早稲田大学大学院　創造理工学研究科建築学専攻　修士2年　根本宥生</p>
          </div>

        </div>
        <div className='ap__header-image'>
          <img src={perspective} alt='ai' />
        </div>
    </div>
  )
}

export default Header