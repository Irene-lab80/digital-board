import React from 'react';
import { Link } from 'react-router-dom';

type UserListItemPropsType = {
  id: number;
  title: string;
  key: number
};

const Card = ({ id, title, key }: UserListItemPropsType) => (
  <li key={key}>
    <Link to={`/product/${id}`}>
      <h2>{title}</h2>
    </Link>
  </li>
);

export default Card;
