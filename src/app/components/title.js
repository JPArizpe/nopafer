import style from '../styles/title.module.scss';

export default function Title({title, color = 'black'}) {
  return (
    <>
      <div className={style.title}>
        <h1 style={{color}}>{title}</h1>
      </div>
    </>
  )
}
