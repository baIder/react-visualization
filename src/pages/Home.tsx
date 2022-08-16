import React from 'react';
import '../style/Home.scss';
import headerBg from '../images/header.png';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
          <section className="section1">
            <div className="bordered 管辖统计">
              <h2>案发派出所管辖统计</h2>
            </div>
          </section>
          <section className="bordered section2"></section>
          <section className="bordered section3"></section>
          <section className="bordered section4"></section>
          <section className="bordered section5"></section>
        </main>
      </div>
    </>
  );
};

export default Home;