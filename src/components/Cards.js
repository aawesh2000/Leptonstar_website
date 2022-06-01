import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Coming Soon..'
              label='Coming Soon..'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Coming Soon..'
              label='Coming Soon..'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Coming Soon..'
              label='Coming Soon..'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Coming Soon..'
              label='Coming Soon..'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Coming Soon..'
              label='Coming Soon..'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
