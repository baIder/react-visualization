import React from 'react';
import '../style/Home.scss';
import headerBg from '../images/header.png';
import 'echarts/lib/component/grid';
import Chart1 from '../components/chart1';

const Home: React.FC = () => {

  return (
    <>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
          <section className="section1">
            <Chart1/>
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