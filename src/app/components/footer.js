import assets from '../assets/text/content.json';
import style from '../styles/footer.module.scss';

export default function Footer() {
  return (
    <div className={style.footer}>
      <p>{assets.footer.title}</p>
    </div>
  )
}