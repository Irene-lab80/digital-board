/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import CardSmall from './CardSmall';
import { data } from '../../../helpers';

type CardsSmallType = {
  bigTag: string | undefined;
  id: number | undefined;
}

// TODO: leave only two first cards by date
const CardsSmall = ({ bigTag, id }: CardsSmallType) => {
  const newData = data.filter(((el) => el.tag.toString() === bigTag && el.id !== id));
  const arrayOfCards = newData.map((el) => (
    <CardSmall
      id={el.id}
      key={el.id}
      title={el.title}
      src={el.src}
      // date={el.date}
      />
  ));

  return <>{ arrayOfCards }</>;
};

export default CardsSmall;
