import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';
import {Data} from '../react-app-env';
import {EChartOption} from 'echarts';

const Chart3: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const data: Data = [
    {value: 0.4, name: '女'},
    {value: 0.6, name: '男'},
  ];
  const option = {
    ...baseEchartsOptions,
    color: ['#8D70F8', '#33A4FA'],
    grid: {
      containLabel: true,
      left: '2%',
      top: '0%',
      right: '5%',
      bottom: '10%',
    },
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {show: false},
    series: [{
      name: '年龄分布',
      type: 'pie',
      radius: ['75%', '90%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'inside',
        color: 'white', fontSize: px(20),
        formatter(val: any) {
          return (val.value * 100).toFixed(0) + '%';
        },
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderColor: '#0F113A',
        borderWidth: px(4)
      },
      data: data
    }]
  };
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption(option);

    function update() {
      const data = option.series[0].data;
      data[0].value = 0.4 + Math.random() * 0.2;
      data[1].value = 1 - data[0].value;

      myChart.setOption(option as EChartOption);
    }

    setInterval(function () {
      update();
    }, 2000);

  }, []);
  return (
    <>
      <div className="age">
        <div className="chart">
          <div className="main" ref={divRef}/>
          <div className="text">性别</div>
        </div>
        <div className="legend">
          <span className="male"/>男
          <span className="female"/>女
        </div>
      </div>
    </>
  );
};

export default Chart3;