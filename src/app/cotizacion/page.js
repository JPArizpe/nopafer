import Header from '../components/header';
import Hero from '../components/hero';
import Mail from '../components/mail';
import Footer from '../components/footer';

import style from '../styles/acercaPage.module.scss';
import Title from '../components/title';

import logo from '../assets/images/logo_mini.svg';

export default function Cotizacion() {
  return (
    <>
      <Header />
      <Hero acerca={true} logo={logo} />

      <div className='container maxWidth'>
        <div className={style.acerca}>
          <Title title="Cotización de maquinaria"/>
          <p>La Máquina (fermentador) de 220 Volts., con partes de acero inoxidable en las áreas de contacto con el nopal desde el corte, el fermentado y el separado en jugo y bagazo, recomendable para un proceso eficiente de enriquecimiento proteico, se encuentra en etapa de cálculo para el año 2023.</p>
          <p>El Proceso requiere de tres ingredientes por cada 100kg de nopal a procesar: 1 kg o (2 paquetes de 450gr) de levadura seca (Saccharomyces cereviciae)*, 1 kg de urea, 100 gr de sulfato de amonio.</p>
          <p>*La levadura es el insumo más caro por eso es importante reciclar la levadura hasta por una semana (ver el punto Tecnología de esta página).</p>
        </div>
      </div>

      <Mail />
      <Footer />
    </>
  )
}
