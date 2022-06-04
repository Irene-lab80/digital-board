import React from 'react';
import Card from '../Card';
import style from './Feed.module.scss';

const Feed = () => (
  <div className={style.wrapper}>
    <h2>Вся лента</h2>
    <Card />
  </div>
);

export default Feed;
