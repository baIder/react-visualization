import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart13: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
      grid: {
        containLabel: true,
        left: '2%',
        top: '12%',
        right: '5%',
        bottom: '4%',
      },
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val: string) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(value: string) {
            return (parseFloat(value) * 100).toFixed(0) + '%';
          }
        }
      },
      series: [{
        type: 'bar',
        data: data.map(i => i.value),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0A97FB'
          }, {
            offset: 1,
            color: '#1E34FA'
          }]),
        }
      }],
    });
  }, []);
  return (
    <>
      <div ref={divRef} className="chart"/>
    </>
  );
};

export default Chart13;