import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './ProductSlider.module.scss';

type ProductSliderProps = {
  cname: string;
  src: string | undefined;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ cname, src }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1: any = useRef(null); // TODO: remove any??
  const slider2: any = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (

    <div className={cname}>
      <Slider
        className={style.wrapper}
        autoplay={false}
        infinite
        speed={500}
        lazyLoad="progressive"
        asNavFor={nav2}
        ref={slider1}>

        <div className={style.slide}>
          <img alt="img" className={style.img} src={`../${src}`} width={766} />
        </div>
        <div className={style.slide}>
          <img alt="img" className={style.img} src={`../${src}`} width={766} />
        </div>
        <div className={style.slide}>
          <img alt="img" className={style.img} src={`../${src}`} width={766} />
        </div>
        <div className={style.slide}>
          <img alt="img" className={style.img} src={`../${src}`} width={766} />
        </div>
      </Slider>

      <Slider
        centerMode
        focusOnSelect
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={4}
        swipeToSlide
        className={style.thumbnailswrapper}>
        <div className={style.thumbnailSlide}>
          <img alt="img" className={style.thumbnailImg} src={`../${src}`} width={162} />
        </div>
        <div className={style.thumbnailSlide}>
          <img alt="img" className={style.thumbnailImg} src={`../${src}`} width={162} />
        </div>
        <div className={style.thumbnailSlide}>
          <img alt="img" className={style.thumbnailImg} src={`../${src}`} width={162} />
        </div>
        <div className={style.thumbnailSlide}>
          <img alt="img" className={style.thumbnailImg} src={`../${src}`} width={162} />
        </div>

      </Slider>

    </div>
  );
};

export default ProductSlider;
