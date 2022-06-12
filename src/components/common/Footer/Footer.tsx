import React from 'react';
import Logo from '../Logo/Logo';
import style from './Footer.module.scss';
import fbIcon from '../../../assets/images/fb-icon.svg';
import igIcon from '../../../assets/images/ig-icon.svg';
import vkIcon from '../../../assets/images/vk-icon.svg';

const Footer = () => (
  <div className={style.footer__wrapper}>
    <footer className={style.footer}>
      <div className={style.footer__left}>
        <div className={style.footer__logo}>
          <Logo />
        </div>
        <div className={style.footer__text}>Доска объявлений</div>
      </div>
      <div className={style.footer__copyright}>© ООО «Доска диджитал», 2022</div>
      <div className={style.footer__socials}>
        <a className={style.footer__link} href="http://facebook.com">
          <img src={fbIcon} alt="facebook icon" />
        </a>
        <a className={style.footer__link} href="http://instagram.com">
          <img src={igIcon} alt="facebook icon" />
        </a>
        <a className={style.footer__link} href="http://vk.com">
          <img src={vkIcon} alt="facebook icon" />
        </a>
      </div>
    </footer>
  </div>
);

export default Footer;
