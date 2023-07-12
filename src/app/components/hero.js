import style from '../styles/hero.module.scss';

import Image from 'next/image'

export default function Hero({avisos, hideLogo, productos, acerca, logo}) {

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
      <div className={`${avisos ? style.avisos : style.home} ${style.hero} ${productos ? style.productos : style.home} ${acerca ? style.acerca : style.home}`}>
        {!hideLogo && logoMarkup}
      </div>
    </div>
  );
}