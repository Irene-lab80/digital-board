import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import style from './Feed.module.scss';
import { data } from '../../../helpers';
import CustomButton from '../CustomButton';

const Feed = () => (
  <div className={style.feedwrapper}>
    <h2>Вся лента</h2>
    <div className={style.cardsWrapper}>
      { data.map((el) => (
        <Link to="product">
          <Card
            tag={el.tag}
            title={el.title}
            description={el.description}
            price={el.price}
            date={el.date}
            viewNumber={el.viewNumber}
            imgPath={el.src}
          />
        </Link>
      ))}
    </div>
    <div className={style.btnWrapper}>
      <CustomButton buttonStyle="btn--outline">
        <span className="icon--more" />
        {' '}
        Загрузить еще
      </CustomButton>
    </div>
  </div>
);

export default Feed;
