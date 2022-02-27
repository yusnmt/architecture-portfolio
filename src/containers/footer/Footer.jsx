import React from 'react'
import './footer.css'

import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="ap__footer section__padding">
      <div className="ap__footer-heading">
        <h1 className="gradient__text">敵対的生成ネットワークを用いたCreative AIの作成と設計への応用に関する研究</h1>
      </div>

      <div className="ap__footer-btn">
        <p><a href="#home">Topへ戻る</a></p>
      </div>

      <div className="ap__footer-links">
        <div className="ap__footer-links_logo">
          <img src={logo} alt="alt" />
          <p>敵対的生成ネットワークを用いたCreative AIの作成と設計への応用に関する研究</p>
        </div>
        <div className="ap__footer-links_div">
          <h4>Links</h4>
          <p><a href='https://github.com/yusnmt/architecture-portfolio.git'>Git hub</a></p>
          <p><a href='https://colab.research.google.com/drive/1uILrN8lX0Jl_C-VBQ1Rn3MAcuYt6mPWP?usp=sharing'>Creative AI Sorce Code</a></p>
          <p><a href='https://drive.google.com/file/d/1xcnwRNXyPjBMSLpse32CQpNSfG4L1RUL/view?usp=sharing'>Presentation Board Download</a></p>
        </div>
        <div className="ap__footer-links_div">
          <h4>Get in touch</h4>
          <p>早稲田大学大学院創造理工学研究科建築学専攻修士2年</p>
          <p>根本宥生</p>
          <p>yusei.waseda.s@gmail.com</p>
        </div>
      </div>

      <div className="ap__footer-copyright">
        <p>@2022 yusnmt All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer