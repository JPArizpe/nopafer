/* eslint-disable @next/next/no-img-element */
import style from '../styles/card.module.scss';

import Readmore from './readmore';
import Image from 'next/image'

export default function Card(props) {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardImage} style={{backgroundImage: `url(${props.image})`}}>
          <Image
            className={style.icon}
            src={props.icon}
            width={50}
            height={50}
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