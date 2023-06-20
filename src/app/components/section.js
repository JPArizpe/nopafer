import style from '../styles/section.module.scss';

import Title from './title';
import Readmore from './readmore';

export default function Section({backgroundImage, title, text = [], color = 'black'}) {
  return (
    <>
      <div className={style.section} style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className={`maxWidth ${style.sectionMargin}`}>
          <Title title={title} color={color} className={style.sectionTitle} />
          <p>La Tecnología de Enriquecimiento Proteico de Nopal tiene el propósito de contribuir a la difícil problemática de escases de forraje y de buena calidad que cotidianamente padecen los productores ganaderos que habitan en las zonas áridas de México. Esta iniciativa abarca el nopal como materia prima, la tecnología propiamente dicha que incluye el equipo y proceso, y finalmente el ganado a alimentar.</p>
          <p>En el año 2008 el Dr. Arnoldo Flores Hernández de la Universidad Autónoma Chapingo- Unidad de Zonas Áridas, Bermejillo, Dgo., inició con el diseño y funcionamiento de la máquina (fermentador) en secuencia al proceso de fermentación del nopal, posteriormente y una vez creada dicha tecnología (máquina y proceso), se integraron los factores de disponibilidad de materia prima y animales a alimentar y se concluyó con 2 eventos demostrativos en la Comarca Lagunera en el 2012. A partir de entonces se realizaron eventos demostrativos de transferencia de dicha tecnología hasta el año 2020 en diferentes municipios de la región centro norte, en los estados de Coahuila, Durango y Zacatecas. Todo ello apoyadas por las instituciones: Consejo de Ciencia y Tecnología del Estado de Durango (COCyTED) y La Universidad Autónoma Chapingo (UACh) y en casos particulares por la Comisión Nacional de Áreas Naturales Protegidas (CONANP).</p>
          <p>En todas las etapas demostrativas, de transferencia y adopción de esta tecnología han participado productores, técnicos y/u organizaciones de productores, durante 3 meses en el predio del productor, cuyo requisito de participación fue disponibilidad de nopal (materia prima), un local con electricidad (últimamente de 220 volts) y el tipo de ganado predominante o de mayor interés en esa región.</p>
          <div className={style.readmore}>
            <Readmore />
          </div>
        </div>
      </div>
    </>
  )
}