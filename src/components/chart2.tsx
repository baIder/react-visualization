import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart2: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,

      legend: {
        bottom: 0,
        right: 0,
        itemWidth: px(25),
        itemHeight: px(14),
        itemGap: px(10),
        orient: 'vertical',
        textStyle: {
          color: '#fff',
        },
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      yAxis: {
        type: 'category',
        axisTick: {show: false},
        data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局',
          '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
        axisLabel: {
          fontSize: px(12),
          margin: 2,
          formatter(val: string) {
            return val.replace('公安局', '\n公安局');
          }
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
          name: '依据1',
          type: 'bar',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#2034f9',
            }, {
              offset: 1,
              color: '#04a1ff'
            }])
          }
        },
        {
          name: '依据2',
          type: 'bar',
          data: [2, 3, 4, 5, 6, 7, 8, 9, 10],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#b92ae8',
            }, {
              offset: 1,
              color: '#6773e7'
            }])
          }
        }
      ]
    });
  }, []);
  return (
    <>
      <div className="bordered 破获排名">
        <h2>案件破获排名</h2>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart2;