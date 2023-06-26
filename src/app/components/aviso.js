import style from '../styles/aviso.module.scss';

import Image from 'next/image'
import Readmore from './readmore';

export default function Aviso(props) {
  return (
    <>
      <div className={style.cardContainer}>
        <Image
          className={style.cardImage}
          src={props.image}
          alt={props.alt}
        />
        <div className={style.cardBody}>
          <p className={style.description}>{props.description}</p>
          <Readmore filled url={props.url}/>
        </div>
      </div>
    </>
  )
}