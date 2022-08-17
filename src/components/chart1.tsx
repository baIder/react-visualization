import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart1: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#083b70'
          }
        },
        axisLabel: {
          show: true,
          interval: 0,
          margin: 4,
          fontSize: px(12),
          formatter(val: string) {
            const array = Array.from(val);
            if (array.length > 2) {
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: px(12),
          margin: 4,
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#083b70'
          }
        },
      },
      series: [
        {
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 25]
        }
      ]
    });
  }, []);
  return (
    <>
      <div className="bordered 管辖统计">
        <h2>案发派出所管辖统计</h2>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart1;