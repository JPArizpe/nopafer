import Inicio from './inicio';
import Acerca from './acerca';
import Avisos from './avisos';
import Footer from './footer';

import Mail from './mail';
import sectionBackground from '../images/sectionBackground.png';

import dynamic from 'next/dynamic';


export default function Landing() {

  const Productos = dynamic(() => import('./productos'), { ssr: false });

  return (
    <>
      <div className="container maxWidth">
        <Inicio />
      </div>

      <div className="container">
        <Acerca />
      </div>

      <div className="container maxWidth">
        {Productos && <Productos />}
      </div>

      <div className="container">
        <Avisos />
      </div>

      <div className="container">
        <Mail
          backgroundImage={sectionBackground.src}
          title="Contacto"
          color="white"
          seemore={true}
        />
      </div>

      <div className="container maxWidth">
        <Footer />
      </div>
    </>
  );
}
