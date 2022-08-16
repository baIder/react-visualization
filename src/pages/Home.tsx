import React from 'react';
import '../style/Home.scss';
import headerBg from '../images/header.png';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
          <section className="section1"></section>
          <section className="section2"></section>
          <section className="section3"></section>
          <section className="section4"></section>
          <section className="section5"></section>
        </main>
      </div>
    </>
  );
};

export default Home;