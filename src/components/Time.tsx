import React, {useEffect, useRef} from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 导入本地化语言

const Time: React.FC = () => {
  dayjs.locale('zh-cn'); // 使用本地化语言

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const now = dayjs().format('YYYY[年]MM[月]DD[日] HH:MM');
    if (divRef.current !== null) divRef.current.innerText = now.toString();
    setInterval(() => {
      const now = dayjs().format('YYYY[年]MM[月]DD[日] HH:MM');
      if (divRef.current !== null) divRef.current.innerText = now.toString();
    }, 1000);
  }, []);
  return (
    <>
      <div className="time" ref={divRef}>Time</div>
    </>
  );
};

export default Time;