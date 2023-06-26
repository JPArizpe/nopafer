import style from '../styles/hamburger.module.scss';

export default function Hamburger() {
  return (
    <>
      <div className={style.hamburger}>
        <div className={`${style.burger} ${style.burger1}`}></div>
        <div className={`${style.burger} ${style.burger2}`}></div>
        <div className={`${style.burger} ${style.burger3}`}></div>
      </div>
    </>
  )
}