import React, {useEffect, useRef, useState} from 'react';

const RealtimeData: React.FC = () => {
  const [income, setIncome] = useState(4000);
  const [profit, setProfit] = useState(2000);
  const [stock, setStock] = useState(50);
  const stockRef = useRef<HTMLDivElement>(null);
  const randomIncrement = () => {
    return Math.floor(1 + Math.random() * 9);
  };
  useEffect(() => {
    setInterval(() => {
      setIncome(n => n + randomIncrement());
      setProfit(n => n + randomIncrement());
    }, 100);
    setInterval(() => {
      setStock(n => {
        const x = Number((-0.3 + Math.random()).toFixed(2));
        if (stockRef.current !== null) {
          stockRef.current.classList.remove('up');
          stockRef.current.classList.remove('down');
          if (x > 0) {
            stockRef.current.classList.add('up');
          } else {
            stockRef.current.classList.add('down');
          }
        }
        return n + x;
      });
    }, 1000);
  }, []);
  return (
    <>
      <div className="bordered">
        <span>今日营业额</span>
        <div className="data">{income} 万</div>
      </div>
      <div className="bordered">
        <span>今日利润</span>
        <div className="data">{profit} 万</div>
      </div>
      <div className="bordered">
        <span>实时股价</span>
        <div className="stock" ref={stockRef}>{stock.toFixed(2)}</div>
      </div>
    </>
  );
};

export default RealtimeData;