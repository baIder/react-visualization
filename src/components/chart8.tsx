import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from './px';
import {baseEchartsOptions} from '../models/base-echarts-options';

const Chart8: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const myChart = echarts.init(divRef.current as HTMLDivElement);
    myChart.setOption({
      ...baseEchartsOptions,
    });
  }, []);
  return (
    <>
      <div className="年龄段-图2">
        <div className="chart" ref={divRef}></div>
      </div>
    </>
  );
};

export default Chart8;