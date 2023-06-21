import Header from '../components/header';
import Hero from '../components/hero';
import Mail from '../components/mail';
import Footer from '../components/footer';

import style from '../styles/acercaPage.module.scss';
import Title from '../components/title';

export default function Acerca() {
  return (
    <>
      <Header />
      <Hero />

      <div className='container maxWidth'>
        <div className={style.acerca}>
          <Title title="acerca de"/>
          <p>La Tecnología de Enriquecimiento Proteico de Nopal tiene el propósito de contribuir a la difícil problemática de escases de forraje y de buena calidad que cotidianamente padecen los productores ganaderos que habitan en las zonas áridas de México.</p>
          <p>Esta iniciativa abarca el nopal como materia prima, la tecnología propiamente dicha que incluye el equipo y proceso, y finalmente el ganado a alimentar.</p>
          <p>En el año 2008 el Dr. Arnoldo Flores Hernández de la Universidad Autónoma Chapingo- Unidad de Zonas Áridas, Bermejillo, Dgo., inició con el diseño y funcionamiento de la máquina (fermentador) en secuencia al proceso de fermentación del nopal, posteriormente y una vez creada dicha tecnología (máquina y proceso), se integraron los factores de disponibilidad de materia prima y animales  a alimentar y se concluyó con 2 eventos demostrativos en la Comarca Lagunera en el 2012.</p>
          <p>A partir de entonces se realizaron eventos demostrativos de transferencia de dicha tecnología hasta el año 2020 en diferentes municipios de la región centro norte en los estados de Coahuila, Durango y Zacatecas. </p>
          <p>Todo ello apoyadas por las instituciones: Consejo de Ciencia y Tecnología del Estado de Durango (COCyTED) y La Universidad Autónoma Chapingo (UACh) y en casos particulares por la Comisión Nacional de Áreas Naturales Protegidas (CONANP).</p>
          <p>En todas las etapas demostrativas, de transferencia y adopción de esta tecnología han participado productores, técnicos y/u organizaciones de productores, durante 3 meses en el predio del productor, cuyo requisito de participación fue disponibilidad de nopal (materia prima), un local con electricidad (últimamente de 220 volts) y el tipo de ganado predominante o de mayor interés en esa región.</p>
          <p>En el caso de instituciones de educación agrícola y/o del estado u empresas agropecuarias los criterios variaron según el propósito de la investigación, respetando al menos 1 mes de estudio y experimentos de al menos 3 repeticiones, en todos los trabajos con productores, tesis o de otro tipo, los resultados del análisis bromatológicos fueron realizados en instituciones y/o laboratorios reconocidos y en caso de resultados fuera del rango se comparó con dos laboratorios diferentes para evitar errores.</p>
          <p>En todas estas actividades se agradece la participación de un número importante de: Productores, Técnicos y Profesores- Investigadores de la UACh y el de muchas otras instituciones, empresas y/o agrupación de productores, a los que se les menciona y reconoce su importante colaboración en los informes técnicos, artículos técnicos, científicos y de difusión, folletos y videos en los que colaboraron. </p>
          <p>En la sección de contacto se encuentra la dirección electrónica del Dr. Francisco Javier Macías Rodríguez (CRUCEN- UACh, Zac.), del productor Oscar Sabag Martínez (Jerez Zac.), así como las de un Servidor, que seguimos colaborando activamente en la orientación, asesoría y demás, requeridos para continuar difundiendo el uso correcto de esta tecnología en beneficio directo del productor rural, ello por la aceptación tanto por los productores que asistieron a los diferentes talleres demostrativos como por los demás productores, técnicos y académicos que han podido comprobar de alguna manera sus beneficios mediante evidencias obtenidas con el uso de equipo rústico con que cuentan y con el proceso recomendado en la información publicada.</p>
          <p>La tecnología de enriquecimiento proteico del nopal se desarrolló con el propósito de beneficiar a los productores del sector agropecuario en su predio acorde al estatuto que crea a la Universidad Autónoma Chapingo y no persigue un afán de lucro.</p>
        </div>
      </div>

      <Mail />
      <Footer />
    </>
  )
}
