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
import Chart7 from '../components/chart7';
import Chart8 from '../components/chart8';
import Chart9 from '../components/chart9';
import Chart10 from '../components/chart10';
import Chart11 from '../components/chart11';
import Chart12 from '../components/chart12';
import Chart13 from '../components/chart13';
import Chart14 from '../components/chart14';

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
            <div className="bordered 年龄段">
              <h2>犯罪人员年龄段分布</h2>
              <div className="charts">
                <Chart7/>
                <Chart8/>
                <Chart9/>
              </div>
            </div>
          </section>
          <section className="section5">
            <div className="bordered row1 案发类型">
              <h2>案发类型统计</h2>
              <div className="charts">
                <Chart10/>
                <Chart11/>
              </div>
            </div>
            <div className="bordered row2 案发街道">
              <h2>案发街道统计</h2>
              <div className="charts">
                <Chart12/>
                <Chart13/>
              </div>
            </div>
            <div className="bordered row3 作案手段">
              <h2>作案手段分析</h2>
              <Chart14/>
            </div>
          </section>
        </main>
        <footer>&copy; bald3r · 大屏可视化</footer>
      </div>
    </>
  );
};

export default Home;