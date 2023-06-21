/* eslint-disable @next/next/no-img-element */
import style from '../styles/card.module.scss';

import Readmore from './readmore';
import Image from 'next/image'

export default function Card(props) {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardImage}>
          <div className={style.iconContainer}>
            <Image
              className={style.icon}
              src={props.icon}
              alt={props.alt}
            />
          </div>
          <Image
            className={style.bgImage}
            src={props.image}
            alt={props.alt}
          />
        </div>
        <div className={style.cardBody}>
          <h1>{props.title}</h1>
          <p className={style.description}>{props.description}</p>
          <Readmore filled/>
        </div>
      </div>
    </>
  )
}