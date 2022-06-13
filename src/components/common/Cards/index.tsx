import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Card from './Card';
import { data } from '../../../helpers';

// TODO: remove any
const Cards: any = () => {
  const arrayOfCards = data.map((el) => (
    <Card
      key={el.id}
      tag={el.tag}
      title={el.title}
      description={el.description}
      price={el.price}
      date={el.date}
      views={el.views}
      src={el.src}
      />
  ));

  const arrayOfCardTablet = [];
  const arrayOfCardMobile = [];

  for (let i = 0; i < 6; i += 1) {
    while (i < 6) {
      arrayOfCardTablet.push(arrayOfCards[i]);
      i += 1;
    }
  }

  for (let i = 0; i < 3; i += 1) {
    while (i <= 2) {
      arrayOfCardMobile.push(arrayOfCards[i]);
      i += 1;
    }
  }

  // TODO: remove any
  type PropsType = {
    children: any
  }

  const Desktop: React.FC<PropsType> = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet: React.FC<PropsType> = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile: React.FC<PropsType> = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <>
      <Desktop>{arrayOfCards}</Desktop>
      <Tablet>{arrayOfCardTablet}</Tablet>
      <Mobile>{arrayOfCardMobile}</Mobile>
    </>
  );
};

export default Cards;
