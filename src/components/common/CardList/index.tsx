import React from 'react';
import Card from './UserListItem';

type UserListPropsType = {
  data: { id: number; title: string}[];
};

const CardList = ({ data }: UserListPropsType) => (
  <>
    {data.map((el) => (
      <Card key={el.id} title={el.title} id={el.id} />
    ))}
  </>
);

export default CardList;
