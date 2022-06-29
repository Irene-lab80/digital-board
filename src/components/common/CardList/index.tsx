import React, { useState } from 'react';
import CustomButton from '../CustomButton';
import LoadSvg from '../svg/LoadSvg';
import Card from './Card';
import style from './CardList.module.scss';

type UserListPropsType = {
  data: {
    id: number | undefined;
    title: string | undefined;
    key: number | undefined;
    tag: string | undefined;
    description: string | undefined;
    price: number | undefined;
    date: string | undefined;
    views: number | undefined;
    src: string | undefined;
  }[];
};

const imagePerRow = 9;

const CardList = ({ data }: UserListPropsType) => {
  const [next, setNext] = useState(imagePerRow);

  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };

  return (
    <>
      <div className={style.cardsWrapper}>
        {data?.slice(0, next)?.map((el) => (
          <Card
            key={el?.id}
            id={el?.id}
            tag={el?.tag}
            title={el?.title}
            description={el?.description}
            price={el?.price}
            date={el?.date}
            views={el?.views}
            src={el?.src}
      />
        ))}
      </div>
      <div className={style.btnWrapper}>
        {next < data?.length && (
        <CustomButton onClick={() => {}} buttonStyle="btn--outline">
          <LoadSvg />
          <button type="button" className={style.btnText} onClick={handleMoreImage}>
            Загрузить еще
          </button>
        </CustomButton>
        )}
      </div>
    </>
  );
};

export default CardList;
