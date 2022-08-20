import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';
import {Data} from '../react-app-env';
import {EChartOption} from 'echarts';

const Chart16: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const option = {
    ...baseEchartsOptions,
    legend: {
      top: 0,
      itemWidth: px(25),
      itemHeight: px(14),
      itemGap: px(10),
      textStyle: {
        color: '#fff',
      },
    },
    grid: {
      containLabel: true,
      left: '2%',
      top: '12%',
      right: '5%',
      bottom: '4%',
    },
    yAxis: {
      type: 'value',
      splitLine: {show: true, lineStyle: {color: '#073E78'}},
      axisLabel: {
        fontSize: px(12),
      },
      max: 'dataMax',
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      data: ['华东分公司', '华北分公司', '天津分公司', '西南分公司', '杭州分公司'],
      axisLabel: {
        fontSize: px(12),
        interval: 0,
      }
    },
    series: [
      {
        name: '收入',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'inside',
          fontSize: px(14),
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 341, 374, 390],
        itemStyle: {
          color: '#3b5284'
        }
      },
      {
        name: '支出',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'inside',
          fontSize: px(14),
        },
        emphasis: {
          focus: 'series'
        },
        data: [-120, -132, -101, -134, -190],
        itemStyle: {
          color: '#01689c'
        }
      }
    ]
  };

  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption(option as EChartOption);

    function update() {
      const income = option.series[0].data;
      const expenses = option.series[1].data;
      for (let i = 0; i < 5; i++) {
        income[i] = Math.floor(200 + Math.random() * 200);
        expenses[i] = Math.floor(-100 + (Math.random() * -50));
      }
      myChart.setOption(option as EChartOption);
    }

    setInterval(function () {
      update();
    }, 2000);

  }, []);
  return (
    <>
      <div className="profit">
        <h2>各分公司收入支出对比</h2>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart16;