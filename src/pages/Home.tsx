import React from 'react';
import '../style/Home.scss';
import headerBg from '../images/header.png';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
      </div>
    </>
  );
};

export default Home;