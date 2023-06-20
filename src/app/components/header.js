import style from '../styles/nav.module.scss';

export default function Header() {
  return (
    <nav className={`${style.nav} ${style.sticky}`}>
      <div className={style.container}>
        <ul className={style.navItem}>
          <li><a href="">Home</a></li>
          <li><a href="">Inicio</a></li>
          <li><a href="">Acerca de</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">Avisos importantes</a></li>
          <li><a href="">Cotización de Maquinaria</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}