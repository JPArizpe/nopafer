'use client'
import style from '../styles/icon.module.scss';
import { useState } from 'react';
import Image from 'next/image'

export default function Icon({ hoverIcon, icon, text, alt='icon', url=""}) {
  const [over, setOver] = useState(false);


  return (
    <>
      <div className={style.iconLayout}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <Image
          className={style.icon}
          src={over ? hoverIcon : icon}
          width={75}
          height={75}
          alt={alt}
        />
        <a href={url}>{text}</a>
      </div>
    </>
  );
}
