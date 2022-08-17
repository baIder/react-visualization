import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart3: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
      grid: {
        containLabel: true,
        left: '4%',
        top: '5%',
        right: '4%',
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
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
          fontSize: px(12),
          interval: 1,
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          fontSize: px(12),
          margin: px(10),
          formatter(val: string) {
            return parseFloat(val) * 100 + '%';
          }
        }
      },
      series: [{
        name: '抢劫',
        type: 'line',
        data: [0.03, 0.05, 0.05, 0.04, 0.05, 0.07, 0.03, 0.04, 0.03]
      },
        {
          name: '醉驾',
          type: 'line',
          data: [0.06, 0.02, 0.07, 0.04, 0.06, 0.07, 0.02, 0.03, 0.01]
        },
        {
          name: '盗窃',
          type: 'line',
          data: [0.07, 0.04, 0.09, 0.05, 0.09, 0.02, 0.09, 0.10, 0.02]
        },
        {
          name: '故意杀人',
          type: 'line',
          data: [0.08, 0.05, 0.02, 0.04, 0.01, 0.02, 0.05, 0.02, 0.01]
        },
        {
          name: '故意伤人',
          type: 'line',
          data: [0.12, 0.07, 0.03, 0.06, 0.05, 0.04, 0.06, 0.03, 0.02]
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    });
  }, []);
  return (
    <>
      <div className="bordered 发案趋势">
        <h2>发案趋势分析</h2>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart3;