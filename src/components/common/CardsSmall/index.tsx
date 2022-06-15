import React from 'react';
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import CardSmall from './CardSmall';
import { data } from '../../../helpers';

moment.locale('ru');

const CardsSmall = () => {
  const newData = data.filter(((el) => el.tag === 'Техника'));
  // array.sort(function(a,b){
  //   return new Date(b.date) - new Date(a.date);
  // });
  const arrayOfCards = newData.map((el) => (
    <CardSmall
      id={el.id}
      key={el.id}
      title={el.title}
      src={el.src}
      date={el.date}
      />
  ));

  // const arrayOfCardTablet = [];
  // const arrayOfCardMobile = [];

  // for (let i = 0; i < 6; i += 1) {
  //   while (i < 6) {
  //     arrayOfCardTablet.push(arrayOfCards[i]);
  //     i += 1;
  //   }
  // // }

  // for (let i = 0; i < 3; i += 1) {
  //   while (i <= 2) {
  //     arrayOfCardMobile.push(arrayOfCards[i]);
  //     i += 1;
  //   }
  // }

  // TODO: remove any
  type PropsType = {
    children: any
  }

  const Desktop: React.FC<PropsType> = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  // const Tablet: React.FC<PropsType> = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  //   return isTablet ? children : null;
  // };
  // const Mobile: React.FC<PropsType> = ({ children }) => {
  //   const isMobile = useMediaQuery({ maxWidth: 767 });
  //   return isMobile ? children : null;
  // };
  return (
  // <h1>cards</h1>
    <>
      <Desktop>{arrayOfCards}</Desktop>
      {/* <Tablet>{arrayOfCardTablet}</Tablet> */}
      {/* <Mobile>{arrayOfCardMobile}</Mobile> */}
    </>
  );
};

export default CardsSmall;
