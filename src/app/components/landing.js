import Inicio from './inicio';
import Acerca from './acerca';
import { Productos } from './productos';
import Avisos from './avisos';
import Footer from './footer';

import Mail from './mail';
import sectionBackground from '../images/sectionBackground.png';


export default function Landing() {
  return (
    <>
      <div className="container maxWidth">
        <Inicio />
      </div>

      <div className="container">
        <Acerca />
      </div>

      <div className="container maxWidth">
        <Productos />
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
