import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';
import {EChartOption} from 'echarts';

const Chart4: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const options = {
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
      max: 0.5,
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
      smooth: true,
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
  };

  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption(options as EChartOption);

    function update() {
      const data = options.series[0].data;
      for (let i = 0; i < data.length; ++i) {
        data[i] = Math.random() * 0.5;
      }
      myChart.setOption(options as EChartOption);
    }

    setInterval(function () {
      update();
    }, 2000);

  }, []);
  return (
    <>
      <div className="age">
        <h3>年龄分布图</h3>
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart4;