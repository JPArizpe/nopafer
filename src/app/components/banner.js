import Image from 'next/image'

import style from '../styles/banner.module.scss';

export default function Banner({image}) {
  return (
    <>
      <Image
        className={style.banner}
        src={image}
        alt="aviso"
      />
    </>
  )
}