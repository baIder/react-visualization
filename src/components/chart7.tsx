import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';
import {EChartOption} from 'echarts';
import {Data} from '../react-app-env';

const Chart7: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const data: Data = [
    {value: 0.08, name: '纯牛奶'},
    {value: 0.06, name: '奶粉'},
    {value: 0.11, name: '雪糕'},
    {value: 0.09, name: '奶酪'},
    {value: 0.12, name: '酸奶'},
    {value: 0.06, name: '常温奶'},
    {value: 0.08, name: '调味乳'},
    {value: 0.08, name: '奶片'},
    {value: 0.08, name: '冰淇淋'},
  ];
  const option = {
    ...baseEchartsOptions,
    xAxis: {show: false},
    yAxis: {show: false},
    grid: {
      containLabel: true,
      left: '0%',
      top: '0%',
      right: '0%',
      bottom: '0%',
    },
    legend: {
      orient: 'vertical',
      left: '85%',
      align: 'right',
      top: 'center',
      textStyle: {color: 'white', fontSize: px(12)},
      itemWidth: px(16),
      itemHeight: px(10),
      itemGap: px(10),
    },
    series: [
      {
        center: ['40%', '50%'],
        type: 'pie',
        radius: '80%',
        label: {
          show: true,
          color: '#fff',
          fontSize: px(12),
          formatter(data: any) {
            return Math.ceil((data.value * 100)).toString() + '%';
          }
        },
        labelLine: {show: true},
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption(option as EChartOption);

    function update() {
      const data = option.series[0].data;
      data[8].value = 1;
      for (let i = 0; i < 8; i++) {
        data[i].value = 0.05 + Math.random() * 0.1;
        data[8].value -= data[i].value as number;
      }
      myChart.setOption(option as EChartOption);
    }

    setInterval(function () {
      update();
    }, 2000);

  }, []);
  return (
    <>
      <div>
        <h2>售出产品金额占比</h2>
        <div className="chart12">
          <div className="chart">
            <div className="main" ref={divRef}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart7;