import Title from './title';
import Card from './card';
import Section from './section';
import Mail from './mail';
import Icon from './icon';
import Aviso from './aviso';
import Readmore from './readmore';

import nopalSVG from '../images/nopal.svg';
import grindSVG from '../images/grind.svg';
import farmSVG from '../images/farm.svg';
import folletoSVG from '../images/folleto.svg';
import multimediaSVG from '../images/multimedia.svg';
import tecnicoSVG from '../images/tecnico.svg';
import tesisSVG from '../images/tesis.svg';

import nopal from '../images/nopalImage.png';
import grind from '../images/grindImage.png';
import farm from '../images/farmImage.png';
import sectionBackground from '../images/sectionBackground.png';
import aviso1 from '../images/aviso1.png';
import aviso2 from '../images/aviso2.png';
import aviso3 from '../images/aviso3.png';
import aviso4 from '../images/aviso4.png';

import style from '../styles/landing.module.scss';

export default function Landing() {
  return (
    <>
      <div className="container maxWidth">
        <Title title="Inicio" />
        <div className={style.textContent}>
          <p>
            En la Ley General en Materia de Humanidades, Ciencias, Tecnologías e
            Innovación (HCTI) propuesta por el CONACyT, que reconoce el derecho
            constitucional de toda persona a gozar de los beneficios del
            desarrollo científico y la innovación tecnológica. Se justifica la
            iniciativa del Nopafer (Nopal Fermentado) con seis veces más de
            proteína cruda que el usado al inicio (materia prima), mediante la
            Tecnología (Equipo y Proceso) de Enriquecimiento Proteico de Nopal
            para tener forraje disponible y de mayor contenido nutricional no
            solo en la época de sequía sino todo el año, al igual que el Nopafer
            para la posible alimentación humana.
          </p>
        </div>
        <div className={style.textContent}>
          <p>
            El uso eficiente de la tecnología de enriquecimiento proteico del
            nopal abarca tres componentes indispensables: 1-Materia Prima
            “Nopal”, 2-Tecnología “Equipo y Proceso” y 3- “Animales” a
            alimentar.
          </p>
        </div>

        <div className={style.cards}>
          <Card
            title="El Nopal"
            description="Cultivado (sin o poca espina) o silvestre (con espina) sin riesgo registrado en la alimentación animal…"
            image={nopal.src}
            icon={nopalSVG}
            alt="Nopal"
          />
          <Card
            title="La Tecnología"
            description="Es una integración de la máquina automatizada (fermentador) formada por varios dispositivos, con el proceso de fermentación..."
            image={grind.src}
            icon={grindSVG}
            alt="Nopal"
          />
          <Card
            title="El animal"
            description="Es el de diferente tipo de ganado: bovino, ovino y caprino los que se han evaluado por tres meses con mejoría significativa en condición corporal y peso vivo…"
            image={farm.src}
            icon={farmSVG}
            alt="Nopal"
          />
        </div>
      </div>

      <div className="container">
        <Section
          backgroundImage={sectionBackground.src}
          title="acerca de"
          color="white"
        />
      </div>

      <div className={`container maxWidth ${style.textContent}`}>
        <Title title="Productos" />
        <p>
          Los productos de la tecnología de enriquecimiento proteico que se
          mencionan en los diferentes rubros en algunos casos se encuentren
          publicados en revistas u otro tipo de medio de información electrónica
          resguardada por lo que se indica solo la referencia para que se pueda
          realizar la búsqueda y acceder a estos, generalmente de manera
          gratuita. En aquellos productos institucionales como informes,
          folletos y videos se ofrecen sin costo para su consulta (Para su uso
          se debe citar la fuente correspondiente).
        </p>
        <div className={style.productos}>
          <Icon icon={folletoSVG} text="Manuales y folletos" />
          <Icon icon={multimediaSVG} text="Elementos multimedia" />
          <Icon icon={tecnicoSVG} text="Informes técnicos" />
          <Icon icon={tesisSVG} text="Artículos y tesis" />
        </div>
      </div>

      <div className={`container ${style.sectionAvisos}`}>
        <div className="maxWidth">
          <Title title="avisos importantes" />
          <div className={style.avisos}>
            <Aviso
              description="Desde el inicio de las investigaciones en la tecnología mencionada se fueron modificando características del equipo (fermentador) y proceso a fin de eficientizar ambos componentes, asegurando particularmente que el producto final “Nopafer” no fuera dañino para consumo animal, hasta llegar a las recomendaciones que se mencionan en esta página de difusión, las que desde luego son innovaciones sujetas…"
              image={aviso1.src}
              alt="Nopal"
            />
            <Aviso
              description="En la aplicación correcta de esta tecnología se usan pencas anuales o bianuales (materia prima) que comúnmente presentan un porcentaje de proteína cruda del 5%, mientras que las procesadas “Nopafer”, presenta el 30%*. Ambas con un porcentaje de humedad de aproximadamente 90% (10% M.S.). La comparación con un forraje muy utilizado en la alimentación animal, como la  alfalfa..."
              image={aviso2.src}
              alt="Nopal"
            />
          </div>
          <div className={style.avisos}>
            <Aviso
              description="La información generada ha sido cuidadosamente analizada para su publicación y en su caso se han protegido los derechos de esta tecnología para que su uso sea libre en beneficio del productor en su predio. Existen no obstante un gran número de usos de esta tecnología para combinar otros forrajes o incluso la evaluación directa del Nopafer para consumo humano que falta por investigar…"
              image={aviso3.src}
              alt="Nopal"
            />
            <Aviso
              description="Para otros planes de aprovechamiento de esta tecnología y/o a mayor escala por asociaciones, empresas u de otro tipo de agrupación, es necesario seguir la normatividad que para tal efecto establece el Instituto Mexicano de la Propiedad Industrial (IMPI), mediante la formalización de convenios de uso que pretenden sobre todo que el beneficio se extienda a un mayor grupo de personas..."
              image={aviso4.src}
              alt="Nopal"
            />
          </div>
          <div className={style.seeMore}>
            <Readmore text="Ver más"/>
          </div>
        </div>
      </div>

      <div className="container">
        <Mail
          backgroundImage={sectionBackground.src}
          title="Contacto"
          color="white"
        />
      </div>

      <div className="container maxWidth">
        <div className={style.footer}>
          <p>Jorge F.M. 2023 - All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
