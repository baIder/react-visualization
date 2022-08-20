import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';
import {EChartOption} from 'echarts';
import {Data} from '../react-app-env';

const Chart11: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const data: Data = [
    {value: 0.32, name: '华东分公司'},
    {value: 0.22, name: '华北分公司'},
    {value: 0.18, name: '天津分公司'},
    {value: 0.11, name: '西南分公司'},
    {value: 0.17, name: '杭州分公司'},
  ];
  const option = {
    ...baseEchartsOptions,
    color: colors,
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {
      left: '80%',
      align: 'right',
      top: 'center',
      itemWidth: px(25),
      itemHeight: px(14),
      itemGap: px(10),
      orient: 'vertical',
      textStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        startAngle: -20,
        type: 'pie',
        radius: ['25%', '90%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true, position: 'outside', color: 'white', fontSize: px(20),
          distanceToLabelLine: 0,
          formatter(options: any) {
            return (options.value * 100).toFixed(0) + '%';
          }
        },
        labelLine: {show: true, length: 0},
        roseType: 'area',
        itemStyle: {
          shadowBlur: px(200),
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        data: data
      }
    ]
  };
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption(option as EChartOption);

    function update() {
      const data = option.series[0].data;
      data[4].value = 1;
      for (let i = 0; i < 4; i++) {
        data[i].value = Math.random() * 0.4;
        data[4].value -= data[i].value as number;
      }
      myChart.setOption(option as EChartOption);
    }

    setInterval(function () {
      update();
    }, 4000);

  }, []);
  return (
    <>
      <div>
        <h2>各分公司利润占比</h2>
        <div className="chart11">
          <div className="chart">
            <div className="main" ref={divRef}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart11;