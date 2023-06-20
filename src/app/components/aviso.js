/* eslint-disable @next/next/no-img-element */
import style from '../styles/aviso.module.scss';

import Readmore from './readmore';

export default function Aviso(props) {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardImage} style={{backgroundImage: `url(${props.image})`}}>
        </div>
        <div className={style.cardBody}>
          <p className={style.description}>{props.description}</p>
          <Readmore filled/>
        </div>
      </div>
    </>
  )
}