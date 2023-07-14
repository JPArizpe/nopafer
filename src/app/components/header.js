import style from '../styles/nav.module.scss';

import Link from "next/link"
import Hamburger from './hamburguer';

export default function Header() {
  return (
    <nav className={`${style.nav} ${style.sticky}`}>
      <div className={style.container}>
        <ul className={style.navItem}>
          <li><Link href={{ pathname: "/", hash: 'head' }} legacyBehavior scroll={true}>Home</Link></li>
          <li><Link href={{ pathname: "/inicio", hash: 'head' }} legacyBehavior scroll={true}>Inicio</Link></li>
          <li><Link href={{ pathname: "/acerca", hash: 'head' }} legacyBehavior scroll={true}>Acerca de</Link></li>
          <li><Link href={{ pathname: "/productos", hash: 'head' }} legacyBehavior scroll={true}>Productos</Link></li>
          <li><Link href={{ pathname: "/avisos", hash: 'head' }} legacyBehavior scroll={true}>Avisos importantes</Link></li>
          <li><Link href={{ pathname: "/cotizacion", hash: 'head' }} legacyBehavior scroll={true}>Cotización de Maquinaria</Link></li>
          <li><Link href={{ pathname: "/contacto", hash: 'head' }} legacyBehavior scroll={true}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  )
}