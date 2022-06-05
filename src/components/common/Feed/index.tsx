import React from 'react';
import Card from '../Card';
import style from './Feed.module.scss';

const Feed = () => (
  <div className={style.feedwrapper}>
    <h2>Вся лента</h2>
    <div className={style.cardsWrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Feed;
