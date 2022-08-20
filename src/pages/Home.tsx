import React from 'react';
import '../style/Home.scss';
import headerBg from '../images/header-notext.png';
import 'echarts/lib/component/grid';
import Chart2 from '../components/chart2';
import Chart5 from '../components/chart5';
import Chart3 from '../components/chart3';
import Chart4 from '../components/chart4';
import Chart6 from '../components/chart6';
import Chart7 from '../components/chart7';
import Header from '../components/Header';
import Chart1 from '../components/chart1';
import Chart8 from '../components/chart8';
import RealtimeData from '../components/RealtimeData';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}>
          <Header/>
        </header>
        <main>
          <section className="bordered section1"><Chart1/></section>
          <section className="bordered section2"><Chart2/></section>
          <section className="bordered section3">
            <div className="section3Wrapper">
              <h2>员工组成</h2>
              <div className="chartWrapper">
                <Chart3/> <Chart4/>
              </div>
            </div>
          </section>
          <section className="section4">
            <Chart5/>
            <div className="section4-2">
              <RealtimeData/>
            </div>
          </section>
          <section className="bordered section5"><Chart6/></section>
          <section className="bordered section6"><Chart7/></section>
          <section className="bordered section7"><Chart8/></section>
        </main>
        <footer>&copy; bald3r · 大屏可视化</footer>
      </div>
    </>
  );
};

export default Home;