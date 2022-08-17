import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart9: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
      color: ['#F7A110'],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 18, 28, 38, 48, 58, 68, 78],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
          fontSize: px(12),
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          fontSize: px(12),
          formatter(val: any) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        type: 'line',
        data: [
          0.19, 0.20, 0.26,
          0.35, 0.26, 0.20,
          0.08, 0.06
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
          }]),
        }
      }]
    });
  }, []);
  return (
    <>
      <div className="年龄段-图3">
        <h3>犯罪年龄趋势图</h3>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart9;