import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart1: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    const data: number[] = [];
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200));
    }
    // @ts-ignore
    myChart.setOption({
      ...baseEchartsOptions,
      grid: {
        containLabel: true,
        left: '2%',
        top: '4%',
        right: '10%',
        bottom: '4%',
      },
      legend: {
        show: true,
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
        max: 'dataMax',
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
        data: ['华东分公司', '华北分公司', '天津分公司', '西南分公司', '杭州分公司'],
        axisLabel: {
          fontSize: px(12),
          margin: px(8),
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
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
      },
      series: [
        {
          realtimeSort: true,
          name: '销售额',
          type: 'bar',
          data: data,
          label: {
            show: true,
            color: '#fff',
            fontSize: px(16),
            position: 'right',
            valueAnimation: true
          },
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
      ],
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    });

    function run() {
      for (let i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000);
        } else {
          data[i] += Math.round(Math.random() * 200);
        }
      }
      myChart.setOption({
        series: [
          {
            type: 'bar',
            data
          }
        ]
      });
    }

    setTimeout(function () {
      run();
    }, 0);
    setInterval(function () {
      run();
    }, 3000);
  }, []);


  return (
    <>
      <div className="sales">
        <h2>各分公司销售额</h2>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart1;