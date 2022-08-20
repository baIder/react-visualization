import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {baseEchartsOptions} from '../models/base-echarts-options';
import china from '../geo/china.json';
import Time from './Time';

const Chart6: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  echarts.registerMap('CN', china);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        //天津color3
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '天津市', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',
            color: colors[3],
            borderColor: '#01A7F7',
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff'
            }
          }
        },
        //四川西南color4
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors[4],
            borderColor: '#01A7F7',
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff'
            }
          }
        },
        //青海 华北 2
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '青海省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors[2],
            borderColor: '#01A7F7',
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff'
            }
          }
        },
        //浙江 杭州 5
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '浙江省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors[5],
            borderColor: '#01A7F7',
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff'
            }
          }
        },
        //广东  华东1
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '广东省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors[1],
            borderColor: '#01A7F7',
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff'
            }
          }
        },
      ]
    });
  }, []);
  return (
    <>
      <div className="bordered map">
        {/*<h2>全市犯罪人员籍贯分布地</h2>*/}
        <div className="wrapper">
          <Time/>
          <div ref={divRef} className="chart"/>
          <div className="legend bordered">
            <span className="icon" style={{background: colors[1]}}/>华东分公司
            <span className="icon" style={{background: colors[2]}}/>华北分公司
            <span className="icon" style={{background: colors[3]}}/>天津分公司
            <span className="icon" style={{background: colors[4]}}/>西南分公司
            <span className="icon" style={{background: colors[5]}}/>杭州分公司
          </div>
          <div className="notes">此地图仅显示了中国的部分区域</div>
        </div>
      </div>
    </>
  );
};

export default Chart6;