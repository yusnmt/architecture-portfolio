import React from 'react'
import './research.css'
import ganModel from '../../assets/gan_model.png';
import pix2pix from '../../assets/pix2pix.png'

const Research = () => {
  return (
    <div className='ap__research section__padding' id='research'>
      <div className='ap__research-heading'>
        <h1 className='gradient__text'>研究背景 - 建築デザインとAI -</h1>
        <p>建築設計におけるデザインという創造的な行為は、人への依存が高い行為、さらには機械による代替が難しいと考えられる分野である。一方で「創造性」を意図した、人工知能の研究が進んでいる。特に訓練データを学習し、訓練データの特徴に沿った新しいデータを作り出すことができる敵対的生成ネットワークGANは、デザイン分野において大きな可能性を持つと考えられる。本研究ではGANを用いた創造性を持つ人工知能、つまり建築設計・デザイン分野への応用を意図したCreative AIを作成し、Creative AIと設計者が共に作り上げていく設計プロセスを提案する。</p>
      </div>
      <div className='ap__research-content'>
        <div className='ap__research-content__gans'>
          <h2 className='gradient__text'>敵対的生成ネットワークGAN</h2>
          <img src={ganModel} alt='gan model'/>
          <p>GANは訓練データを学習し、それらの特徴に沿った新しいデータを生成するネットワークである。ネットワーク構造は、GeneratorとDiscriminatorの2つのネットワークから構成されており、お互いに競い合わせることで学習し、精度を高めていく。</p>
        </div>
        <div className='ap__research-content__pix2pix'>
          <h2 className='gradient__text'>PIX2PIX</h2>
          <img src={pix2pix} alt='gan model'/>
          <p>GANの中でも、条件画像と正解画像のペアから画像同士の関係性を学習することで、入力した画像からペアの画像関係を補完した新しい画像を生成することができるPIX2PIXは、セグメンテーションから建物のイメージを生成することや、色彩の付与、輪郭線から画像イメージの生成することができる。</p>
        </div>
      </div>
    </div>
  )
}

export default Research