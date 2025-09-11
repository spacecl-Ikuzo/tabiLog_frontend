import React from 'react';
import MainBackGround from '../../assets/MainBackGround.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-end"
      style={{backgroundImage: `url(${MainBackGround})`}}
    >
      {/* 오버레이 */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      
      {/* 콘텐츠 */}
      <div className="relative z-10 px-6 pb-20">
        <div className="text-white">
          <p className="text-sm mb-2">PLAN | SHARE | LOG</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            次の旅が、<br />
            もっと好きになる計画を。
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

