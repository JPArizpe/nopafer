import style from '../styles/readmore.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Readmore({text = "Leer más...", filled}) {
  return (
    <>
      <div className={`${style.readmore} ${(filled && style.filled)}`}>
        <p>{text}</p>
        <div className={style.arrow}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </>
  )
}