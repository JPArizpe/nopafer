import style from '../styles/hero.module.scss';
import logo from '../assets/images/logo.png';

import Image from 'next/image'

export default function Hero({avisos, hideLogo}) {

  const logoMarkup = (
    <div className={style.logoContainer}>
      <Image
        className={style.logo}
        src={logo}
        alt="logo"
      />
    </div>
  )

  return (
    <div>
      <div className={`${avisos ? style.avisos : style.home} ${style.hero}`}>
        {!hideLogo && logoMarkup}
      </div>
    </div>
  );
}