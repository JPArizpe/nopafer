import Inicio from './inicio';
import Acerca from './acerca';
import Avisos from './avisos';
import Footer from './footer';

import Mail from './mail';
import sectionBackground from '../images/sectionBackground.png';

import dynamic from 'next/dynamic';

import style from '../styles/landing.module.scss';

export default function Landing() {

  const Productos = dynamic(() => import('./productos'), { ssr: false });

  return (
    <div>
      <div className={`${style.container} ${style.maxWidth}`}>
        <Inicio />
      </div>

      <div className={`${style.container}`}>
        <Acerca />
      </div>

      <div className={`${style.container} ${style.maxWidth}`}>
        {Productos && <Productos />}
      </div>

      <div className={`${style.container}`}>
        <Avisos />
      </div>

      <div className={`${style.container}}`}>
        <Mail
          backgroundImage={sectionBackground.src}
          title="Contacto"
          color="white"
          seemore={true}
        />
      </div>

      <div className={`${style.container} ${style.maxWidth}`}>
        <Footer />
      </div>
    </div>
  );
}
