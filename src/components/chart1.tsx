import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const px = (n: number) => n / 2420 * (window as any).pageWidth;
const Chart1: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      textStyle: {
        fontSize: px(18),
        color: '#79839e',
      },
      grid: {
        containLabel: true,
        left: '2%',
        top: '10%',
        right: '5%',
        bottom: '2%',
      },
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
          fontSize: px(16),
          formatter(val: string) {
            const val2 = Array.from(val);
            if (val2.length > 2) {
              val2.splice(2, 0, '\n');
              return val2.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: px(18),
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
          name: '销量',
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