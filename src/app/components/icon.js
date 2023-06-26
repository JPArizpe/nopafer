import style from '../styles/icon.module.scss';

import Image from 'next/image'

export default function Icon({ icon, text, alt='icon', url=""}) {
  return (
    <>
      <div className={style.iconLayout}>
        <Image
          className={style.icon}
          src={icon}
          width={75}
          height={75}
          alt={alt}
        />
        {/* <p>{text}</p> */}
        <a href={url}>{text}</a>
      </div>
    </>
  );
}
