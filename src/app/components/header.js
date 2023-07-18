"use client";
import React from 'react';
import style from '../styles/nav.module.scss';

import Link from "next/link"
import { Burger, Menu } from './hamburger';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <nav className={`${style.nav} ${style.sticky}`}>
      {/* <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div> */}
      <div className={style.container}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        {/* <ul className={style.navItem}>
          <li><Link href={{ pathname: "/", hash: 'head' }} legacyBehavior scroll={true}>Home</Link></li>
          <li><Link href={{ pathname: "/inicio", hash: 'head' }} legacyBehavior scroll={true}>Inicio</Link></li>
          <li><Link href={{ pathname: "/acerca", hash: 'head' }} legacyBehavior scroll={true}>Acerca de</Link></li>
          <li><Link href={{ pathname: "/productos", hash: 'head' }} legacyBehavior scroll={true}>Productos</Link></li>
          <li><Link href={{ pathname: "/avisos", hash: 'head' }} legacyBehavior scroll={true}>Avisos importantes</Link></li>
          <li><Link href={{ pathname: "/cotizacion", hash: 'head' }} legacyBehavior scroll={true}>Cotización de Maquinaria</Link></li>
          <li><Link href={{ pathname: "/contacto", hash: 'head' }} legacyBehavior scroll={true}>Contacto</Link></li>
        </ul> */}
      </div>
    </nav>
  )
}