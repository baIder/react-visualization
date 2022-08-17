import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {baseEchartsOptions} from '../models/base-echarts-options';
import china from '../geo/china.json';

const Chart6: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
  echarts.registerMap('CN', china);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
      grid: {
        containLabel: true,
        left: '0%',
        top: '0%',
        right: '0%',
        bottom: '0%',
      },
      xAxis: {show: false},
      yAxis: {show: false},
      series: [{
        type: 'map',
        map: 'CN', // 自定义扩展图表类型
        data: [
          {name: '甘肃省', value: 1},
        ],
        label: {show: false, color: 'white'},
        itemStyle: {
          areaColor: '#010D3D',
          color: colors['甘肃省'],
          borderColor: '#01A7F7',
        },
        emphasis: {
          label: {
            show: true,
            color: '#fff'
          }
        }
      }, {
        type: 'map',
        map: 'CN', // 自定义扩展图表类型
        data: [
          {name: '四川省', value: 100},
        ],
        itemStyle: {
          areaColor: '#010D3D',
          color: colors['四川省'],
          borderColor: '#01A7F7',
        },
        emphasis: {
          label: {
            show: true,
            color: '#fff'
          }
        }
      }, {
        type: 'map',
        map: 'CN', // 自定义扩展图表类型
        data: [
          {name: '青海省', value: 100},
        ],
        itemStyle: {
          areaColor: '#010D3D',
          color: colors['青海省'],
          borderColor: '#01A7F7',
        },
        emphasis: {
          label: {
            show: true,
            color: '#fff'
          }
        }
      },]
    });
  }, []);
  return (
    <>
      <div className="bordered 籍贯">
        <h2>全市犯罪人员籍贯分布地</h2>
        <div className="wrapper">
          <div ref={divRef} className="chart"/>
          <div className="legend bordered">
            <span className="icon" style={{background: colors['甘肃省']}}/>甘肃籍
            <span className="icon" style={{background: colors['四川省']}}/>四川籍
            <span className="icon" style={{background: colors['青海省']}}/>青海籍
          </div>
          <div className="notes">此地图仅显示了中国的部分区域</div>
        </div>
      </div>
    </>
  );
};

export default Chart6;