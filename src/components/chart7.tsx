import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart7: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
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
          show: false,
          position: 'inside',
          textStyle: {color: 'white', fontSize: px(20)},
          formatter(val: any) {
            return val.value * 100 + '%';
          },
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          borderColor: '#0F113A',
          borderWidth: px(4)
        },
        data: [
          {value: 0.2, name: '女'},
          {value: 0.8, name: '男'},
        ]
      }]
    });
  }, []);
  return (
    <>
      <div className="年龄段-图1">
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

export default Chart7;