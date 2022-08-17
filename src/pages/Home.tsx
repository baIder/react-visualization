import React from 'react';
import '../style/Home.scss';
import headerBg from '../images/header.png';
import 'echarts/lib/component/grid';
import Chart1 from '../components/chart1';
import Chart2 from '../components/chart2';
import Chart3 from '../components/chart3';
import Chart4 from '../components/chart4';
import Chart5 from '../components/chart5';
import Chart6 from '../components/chart6';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
          <section className="section1">
            <Chart1/>
            <Chart2/>
          </section>
          <section className="section2">
            <Chart3/>
            <Chart4/>
          </section>
          <section className="bordered section3">
            <Chart5/>
          </section>
          <section className="section4">
            <Chart6/>
          </section>
          <section className="bordered section5"></section>
        </main>
        <footer>&copy; bald3r · 大屏可视化</footer>
      </div>
    </>
  );
};

export default Home;