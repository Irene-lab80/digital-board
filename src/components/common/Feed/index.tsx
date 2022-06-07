import React from 'react';
import Card from '../Card';
import style from './Feed.module.scss';
import { data } from '../../../helpers';

const Feed = () => (
  <div className={style.feedwrapper}>
    <h2>Вся лента</h2>
    <div className={style.cardsWrapper}>
      <Card
        tag="Техника"
        title="Стиральная машина Bosch"
        description="Машина в хорошем состоянии. Возможен разумный торг"
        price="22 500 Р"
        date="14 апреля 2021"
        viewNumber="365"
      />
      <Card
        tag="Одежда"
        title="Шапочка"
        description="Шапочка детская на ребенка 7-10 лет. 60% шерст, 40% вискоза"
        price="500 Р"
        date="14 апреля 2021"
        viewNumber="356"
      />
      <Card
        tag="Одежда"
        title="Наушники"
        description="Наушники почти новые. Срок эксплуатации - меньше месяца"
        price="4 500 Р"
        date="14 апреля 2021"
        viewNumber="356"
      />
    </div>
  </div>
);

export default Feed;
