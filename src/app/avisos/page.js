import Header from '../components/header';
import Hero from '../components/hero';
import Mail from '../components/mail';
import Footer from '../components/footer';

import style from '../styles/inicioPage.module.scss';
import Title from '../components/title';
import Banner from '../components/banner';

import avisos1 from '../assets/images/avisos1.png';
import avisos2 from '../assets/images/avisos2.png';
import avisos3 from '../assets/images/avisos3.png';
import avisos4 from '../assets/images/avisos4.png';
import avisos5 from '../assets/images/avisos5.png';

export default function AvisosImportantes() {
  return (
    <>
      <Header />
      <Hero avisos={true} hideLogo={true} />

      <div className='container maxWidth'>
        <div className={style.inicio}>
          <div id="aviso1"></div>
          <Title className={style.mainTitle} title="avisos importantes"/>
          <Banner image={avisos1} />
          <p>Desde el inicio de las investigaciones en la tecnología mencionada se fueron modificando características del equipo (fermentador) y proceso a fin de eficientizar ambos componentes, asegurando particularmente que el producto final “Nopafer” no fuera dañino para consumo animal, hasta llegar a las recomendaciones que se mencionan en esta página de difusión, las que desde luego son innovaciones sujetas a una mayor mejora.</p>
          <div id="aviso2"></div>
          <div className={style.divider}></div>
          <Banner image={avisos2} />
          <p>En la aplicación correcta de esta tecnología se usan pencas anuales o bianuales (materia prima) que comúnmente presentan un porcentaje de proteína cruda del 5%, mientras que las procesadas “Nopafer”, presenta el 30%*. Ambas con un porcentaje de humedad de aproximadamente 90% (10% M.S.). La comparación con un forraje muy utilizado en la alimentación animal, como la  alfalfa, arrojó valores en un estudio con alfalfa recién cortada del 24% de proteína cruda pero con un contenido de humedad del 70% (30% M.S.).</p>
          <p>Con base en lo anterior es correcto interpretar que el nopal es superior en porcentaje de proteína que la alfalfa, pero si checamos que el contenido de proteína se expresa en la cantidad de materia seca (M.S.), se tiene entonces que la alfalfa contiene más proteína (72g por 1 kg) que el nopafer (30g por 1 Kg).</p>
          <p>Estos cálculos muestran que el forraje de alfalfa aporta poco más del doble del contenido de proteína que el Nopafer.</p>
          <p>Entonces porque se recomienda esta tecnología. Dos razones prioritarias se señalan, entre otras más:</p>
          <p >A. El consumo de agua por cultivo en condiciones de producción intensiva en riego por goteo resultan en una diferencia de lámina de riego anual aproximada de los 60 cm en nopal y de 180 cm en alfalfa.</p>
          <p>B. El rendimiento anual de nopal se calcula en 160 ton anuales mientras que en alfalfa varia de 67 a 81 ton anuales en la región de la comarca lagunera.</p>
          <p>*En el inicio de la investigación se realizó el estudio con los medios de cultivo para determinar la relación entre el crecimiento de la población de levadura (hongo unicelular) y el incremento del porcentaje de proteína cruda, con resultado de una alta correlación positiva entre ambos factores (a mayor número de levaduras mayor porcentaje de proteínas y viceversa), con un máximo de crecimiento de la levadura y proteína a las 8 o 10 h del proceso de fermentación en condiciones normales de temperatura (25 ± 3 °C) y pH (5.5 ± 1).</p>
          <div className={style.divider}></div>
          <div id="aviso3"></div>
          <Banner image={avisos3} />
          <p>La información generada ha sido cuidadosamente analizada para su publicación y en su caso se han protegido los derechos de esta tecnología para que su uso sea libre en beneficio del productor en su predio.</p>
          <p>Existen no obstante un gran número de usos de esta tecnología para combinar otros forrajes o incluso la evaluación directa del Nopafer para consumo humano que falta por investigar.</p>
          <div className={style.divider}></div>
          <div id="aviso4"></div>
          <Banner image={avisos4} />
          <p>Para otros planes de aprovechamiento de esta tecnología y/o a mayor escala por asociaciones, empresas u de otro tipo de agrupación, es necesario seguir la normatividad que para tal efecto establece el Instituto Mexicano de la Propiedad Industrial (IMPI), mediante la formalización de convenios de uso que pretenden sobre todo que el beneficio se extienda a un mayor grupo de personas.</p>
          <p>Se destaca en todo ello que la tecnología generada se realizó considerando el propósito de beneficiar a los productores del sector agropecuario en su predio acorde al estatuto que crea a la Universidad Autónoma Chapingo y no persigue un afán de lucro.</p>
          <div className={style.divider}></div>
          <div id="aviso5"></div>
          <Banner image={avisos5} />
          <p>En el caso de que se use nopal seco por problemas de riego o sequia se recomienda agregar 20 litros por c/100 kg del nopal cortado para mejorar la consistencia de la mezcla y su fermentación.</p>
        </div>
      </div>

      <Mail />
      <Footer />
    </>
  )
}
