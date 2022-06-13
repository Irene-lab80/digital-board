import React from 'react';
import Card from './Card';
import { data } from '../../../helpers';

// TODO: remove any
const Cards: any = () => (
  data.map((el) => (
    <Card
      key={el.id}
      tag={el.tag}
      title={el.title}
      description={el.description}
      price={el.price}
      date={el.date}
      viewNumber={el.viewNumber}
      imgPath={el.src}
    />
  ))
);

export default Cards;
