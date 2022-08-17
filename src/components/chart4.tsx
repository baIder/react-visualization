import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart4: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
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
        type: 'line',
        data: [
          0.15, 0.13, 0.11,
          0.13, 0.14, 0.15,
          0.16, 0.18, 0.21,
          0.19, 0.17, 0.16,
          0.15
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
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

export default Chart4;