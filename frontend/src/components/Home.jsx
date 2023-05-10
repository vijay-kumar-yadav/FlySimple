import React from 'react';
import backhome from '../assets/homeBack.gif';
import exchangeIcon from '../assets/exchange.png';
import searchIcon from '../assets/search.png';
import '../styles/_home.scss';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='home__head'>
          <img className='home__img' src={backhome} alt='title background' />
          <div className='home__overlay'>
            <span>Fly Simple</span>
          </div>
        </div>
        <div className='home__body'>
          <div className='home__wrapper'>
            <div className='home__source'>
              <input className='home__input' type='text' placeholder='Source' />
            </div>
            <div className='home__exchange'>
              <img
                className='home__exchange-img'
                src={exchangeIcon}
                alt='exchange'
              />
            </div>
            <div className='home__destination'>
              <input
                className='home__input'
                type='text'
                placeholder='Destination'
              />
            </div>
          </div>
          <div className='home__date'>
            <input className='home__input home__date-input' type='date' placeholder='Date' />
          </div>
          <div className='home__explore'>
            <button className='home__search-btn'>
              <img
                className='home__search-icon'
                src={searchIcon}
                alt='search'
              />
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
