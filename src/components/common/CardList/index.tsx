import React, { useEffect, useState } from 'react';
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

const CardList = ({ data }: UserListPropsType) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  let imagePerPage = 9;
  if (width < 1200) {
    imagePerPage = 6;
  }

  if (width < 768) {
    imagePerPage = 3;
  }

  const [next, setNext] = useState(imagePerPage);

  const handleMoreImage = () => {
    setNext(next + imagePerPage);
  };

  return (
    <>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>Вся лента</h2>
      </div>
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
        <CustomButton onClick={() => {}} buttonStyle="btn--outline" type>
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
