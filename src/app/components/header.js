import style from '../styles/nav.module.scss';

import Link from "next/link"

export default function Header() {
  return (
    <nav className={`${style.nav} ${style.sticky}`}>
      <div className={style.container}>
        <ul className={style.navItem}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/inicio">Inicio</Link></li>
          <li><Link href="/acerca">Acerca de</Link></li>
          <li><Link href="">Productos</Link></li>
          <li><Link href="/avisos">Avisos importantes</Link></li>
          <li><Link href="">Cotización de Maquinaria</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}