import style from '../styles/readmore.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link"

export default function Readmore({text = "Leer más...", filled, url=""}) {
  return (
    <>
      <div className={`${style.readmore} ${(filled && style.filled)}`}>
        {/* <p>{text}</p> */}
        <Link href={url}>{text}</Link>
        <div className={style.arrow}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </>
  )
}