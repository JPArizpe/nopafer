import style from '../styles/nav.module.scss';

import Link from "next/link"
import Hamburger from './hamburguer';

export default function Header() {
  return (
    <nav className={`${style.nav} ${style.sticky}`}>
      <div className={style.container}>
        <ul className={style.navItem}>
          <li><Link href="/" legacyBehavior scroll={true}>Home</Link></li>
          <li><Link href="/inicio" legacyBehavior scroll={true}>Inicio</Link></li>
          <li><Link href="/acerca" legacyBehavior scroll={true}>Acerca de</Link></li>
          <li><Link href="/productos" legacyBehavior scroll={true}>Productos</Link></li>
          <li><Link href="/avisos" legacyBehavior scroll={true}>Avisos importantes</Link></li>
          <li><Link href="" legacyBehavior scroll={true}>Cotización de Maquinaria</Link></li>
          <li><Link href="/contacto" legacyBehavior scroll={true}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}