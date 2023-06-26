'use client'
import style from '../styles/icon.module.scss';
import { useState } from 'react';
import Image from 'next/image'

function Icon(props) {
  const [over, setOver] = useState(false);

  return (
    <>
      <div className={style.iconLayout}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <Image
          className={style.icon}
          src={over ? props.hoverIcon : props.icon}
          width={75}
          height={75}
          alt={props.alt}
        />
        <a href={props.url}>{props.text}</a>
      </div>
    </>
  );
}

const ClientIcon = typeof window !== 'undefined' ? Icon : null;

export default ClientIcon;
