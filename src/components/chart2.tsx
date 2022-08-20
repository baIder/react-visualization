import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';
import {Data} from '../react-app-env';

const Chart2: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const myChart = useRef(null);
  const data: Data = [
    {name: '华东分公司', value: [0.56, 0.68, 0.79, 0.71]},
    {name: '华北分公司', value: [0.98, 0.52, 0.87, 0.15]},
    {name: '天津分公司', value: [0.57, 0.81, 0.32, 0.13]},
    {name: '西南分公司', value: [0.63, 0.20, 0.14, 0.96]},
    {name: '杭州分公司', value: [0.43, 0.16, 0.34, 0.76]},
  ];
  const renderChart = (data: Data) => {
    // @ts-ignore
    myChart.current.setOption({
      ...baseEchartsOptions,
      grid: {
        containLabel: true,
        left: '2%',
        top: '4%',
        right: '5%',
        bottom: '20%',
      },
      legend: {
        bottom: 0,
        itemWidth: px(25),
        itemHeight: px(14),
        itemGap: px(10),
        textStyle: {
          color: '#fff',
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        splitLine: {show: false, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {
          show: true,
          lineStyle: {
            color: '#083b70'
          }
        },
        axisLabel: {
          fontSize: px(12),
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {show: false, lineStyle: {color: '#073E78'}},
        data: data.map(i => i.name),
        axisLine: {
          show: true,
          lineStyle: {
            color: '#083b70'
          }
        },
        axisLabel: {
          fontSize: px(12),
          margin: px(10),
          formatter(val: string) {
            return parseFloat(val) * 100 + '%';
          }
        },
      },
      // @ts-ignore
      series: [{
        name: '华东分公司',
        type: 'line',
        data: data.find(i => i.name === '华东分公司')?.value
      },
        {
          name: '华北分公司',
          type: 'line',
          data: data.find(i => i.name === '华北分公司')?.value
        },
        {
          name: '天津分公司',
          type: 'line',
          data: data.find(i => i.name === '天津分公司')?.value
        },
        {
          name: '西南分公司',
          type: 'line',
          data: data.find(i => i.name === '西南分公司')?.value
        },
        {
          name: '杭州分公司',
          type: 'line',
          data: data.find(i => i.name === '杭州分公司')?.value
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      })),
    });
  };
  useEffect(() => {
    setInterval(() => {
      const newData: Data = [
        {name: '华东分公司', value: [Math.random(), Math.random(), Math.random(), Math.random()]},
        {name: '华北分公司', value: [Math.random(), Math.random(), Math.random(), Math.random()]},
        {name: '天津分公司', value: [Math.random(), Math.random(), Math.random(), Math.random()]},
        {name: '西南分公司', value: [Math.random(), Math.random(), Math.random(), Math.random()]},
        {name: '杭州分公司', value: [Math.random(), Math.random(), Math.random(), Math.random()]},
      ];
      renderChart(newData);
    }, 2000);
  }, []);
  useEffect(() => {
    // @ts-ignore
    myChart.current = echarts.init(divRef.current as HTMLDivElement);
    renderChart(data);

  }, []);
  return (
    <>
      <div className="profit">
        <h2>各分公司利润率趋势</h2>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart2;