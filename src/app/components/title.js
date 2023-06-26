import style from '../styles/title.module.scss';

export default function Title({title, color = 'black', center = false}) {
  return (
    <>
      <div className={`${style.title} ${center && style.center}`}>
        <h1 style={{color}}>{title}</h1>
      </div>
    </>
  )
}
