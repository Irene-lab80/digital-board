import React from 'react';
import Card from '../Card';
import style from './Feed.module.scss';
import { data } from '../../../helpers';
import ButtonMain from '../ButtonMain';

const Feed = () => (
  <div className={style.feedwrapper}>
    <h2>Вся лента</h2>
    <div className={style.cardsWrapper}>
      <Card
        tag={data[0].tag}
        title={data[0].title}
        description={data[0].description}
        price={data[0].price}
        date={data[0].date}
        viewNumber={data[0].viewNumber}
        imgPath={data[0].src}
      />
      <Card
        tag={data[1].tag}
        title={data[1].title}
        description={data[2].description}
        price={data[1].price}
        date={data[1].date}
        viewNumber={data[1].viewNumber}
        imgPath={data[1].src}
      />
      <Card
        tag={data[2].tag}
        title={data[2].title}
        description={data[2].description}
        price={data[2].price}
        date={data[2].date}
        viewNumber={data[2].viewNumber}
        imgPath={data[2].src}
      />
      <Card
        tag={data[3].tag}
        title={data[3].title}
        description={data[3].description}
        price={data[3].price}
        date={data[3].date}
        viewNumber={data[3].viewNumber}
        imgPath={data[3].src}
      />
      <Card
        tag={data[4].tag}
        title={data[4].title}
        description={data[4].description}
        price={data[4].price}
        date={data[4].date}
        viewNumber={data[4].viewNumber}
        imgPath={data[4].src}
      />
      <Card
        tag={data[5].tag}
        title={data[5].title}
        description={data[5].description}
        price={data[5].price}
        date={data[5].date}
        viewNumber={data[5].viewNumber}
        imgPath={data[5].src}
      />
      <Card
        tag={data[6].tag}
        title={data[6].title}
        description={data[6].description}
        price={data[6].price}
        date={data[6].date}
        viewNumber={data[6].viewNumber}
        imgPath={data[6].src}
      />
      <Card
        tag={data[7].tag}
        title={data[7].title}
        description={data[7].description}
        price={data[7].price}
        date={data[7].date}
        viewNumber={data[7].viewNumber}
        imgPath={data[7].src}
      />
      <Card
        tag={data[8].tag}
        title={data[8].title}
        description={data[8].description}
        price={data[8].price}
        date={data[8].date}
        viewNumber={data[8].viewNumber}
        imgPath={data[8].src}
      />
      <ButtonMain buttonTitle="Загрузить еще" />
    </div>
  </div>
);

export default Feed;
