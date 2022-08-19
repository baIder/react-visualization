import React from 'react';
import '../style/Home.scss';
import headerBg from '../images/header-nobg.png';
import 'echarts/lib/component/grid';
import Chart1 from '../components/chart1';
import Chart2 from '../components/chart2';
import Chart3 from '../components/chart3';
import Chart4 from '../components/chart4';
import Chart5 from '../components/chart5';
import Chart6 from '../components/chart6';
import Chart7 from '../components/chart7';
import Chart8 from '../components/chart8';
import Chart9 from '../components/chart9';
import Chart10 from '../components/chart10';
import Chart11 from '../components/chart11';
import Chart12 from '../components/chart12';
import Chart13 from '../components/chart13';
import Chart14 from '../components/chart14';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}>
          <Header/>
        </header>
        <main>
          <section className="bordered section1">
            <Chart2/>
          </section>
          <section className="bordered section2">
            <Chart3/>
          </section>
          <section className="bordered section3">
            <Chart7/>
            <Chart9/>
          </section>
          <section className="bordered section4">
          </section>
          <section className="bordered section5">
          </section>
          <section className="bordered section6"></section>
          <section className="bordered section7"></section>
        </main>
        <footer>&copy; bald3r · 大屏可视化</footer>
      </div>
    </>
  );
};

export default Home;