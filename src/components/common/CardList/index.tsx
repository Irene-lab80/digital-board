import React from 'react';
import Card from './Card';

type UserListPropsType = {
  data: {
    id: number;
    title: string;
    key: number;
    tag: string;
    description: string ;
    price: number ;
    date: string ;
    views: number ;
    src: string ;
  }[];
};

const CardList = ({ data }: UserListPropsType) => (
  <>
    {data.map((el) => (
      <Card
        key={el.id}
        id={el.id}
        tag={el.tag}
        title={el.title}
        description={el.description}
        price={el.price}
        date={el.date}
        views={el.views}
        src={el.src}
      />
    ))}
  </>
);

export default CardList;
