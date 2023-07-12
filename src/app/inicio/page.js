import Header from '../components/header';
import Hero from '../components/hero';
import Mail from '../components/mail';
import Footer from '../components/footer';

import style from '../styles/inicioPage.module.scss';
import Title from '../components/title';
import Banner from '../components/banner';
import Ventajas from '../components/ventajas';

import inicio1 from '../assets/images/inicio1.png';
import inicio2 from '../assets/images/inicio2.png';
import inicio3 from '../assets/images/inicio3.png';

import logo from '../assets/images/logo_mini.svg';

export default function Inicio() {
  return (
    <>
      <Header />
      <Hero logo={logo}/>

      <div className='container maxWidth'>
        <div className={style.inicio}>
          <Title className={style.mainTitle} title="inicio"/>
          <p>En la Ley General en Materia de Humanidades, Ciencias, Tecnologías e Innovación (HCTI) propuesta por el CONACyT, que reconoce el derecho constitucional de toda persona a gozar de los beneficios del desarrollo científico y la innovación tecnológica. Se justifica la producción del <strong>Nopafer</strong> (Nopal Fermentado) con seis veces más de proteína cruda que el usado al inicio (materia prima), mediante la Tecnología (Equipo y Proceso) de Enriquecimiento Proteico de Nopal para tener forraje disponible y de mayor contenido nutricional no solo en la época de sequía sino todo el año, al igual que el <strong>Nopafer</strong> para la posible alimentación humana.</p>
          <p>El uso eficiente de la tecnología de enriquecimiento proteico del nopal abarca tres componentes indispensables: 1-Materia Prima “Nopal”, 2-Tecnología “Equipo y Proceso” y 3- “Animales” a alimentar.</p>
          <div id="nopal"></div>
          <Banner image={inicio1}/>
          <p><strong>EL NOPAL</strong> cultivado (sin o poca espina) o silvestre (con espina) sin riesgo registrado en la alimentación animal, es producido en lote cercado, ya que en épocas tempranas de establecimiento de la planta, es muy consumida por roedores e incluso ganado. En huertas ya establecidas se puede cortar la penca anual o bianual, ya que estas no son muy fibrosas (leñadas), lo que además de mejorar la palatabilidad evita la perdida de filo de las cuchillas de corte.</p>
          <p>El corte (poda) debe ser recomendable a mediodía (pH= 5.5 ± 1) y en la época de frío antes de que inicie la brotación de primavera (El nopal cesa su crecimiento a temperaturas inferiores a 25° C., presentes en otoño e invierno). El nopal cortado se puede almacenar a la sombra de los árboles durante todo el año y se usa conforme se ocupe (se debe evitar el contacto de la penca cortada con suelo húmedo). </p>
          <div id="tecnologia"></div>
          <div className={style.divider}></div>
          <Banner image={inicio2} />
          <p><strong>LA TECNOLOGÍA</strong> es una integración de la máquina automatizada (fermentador) formada por varios dispositivos, con el proceso de fermentación que se usa para la producción de Nopafer y requiere de pencas de 1 o 2 años de edad para llegar a 100 kg o más diarios, de acuerdo a las necesidades del número de animales y el porcentaje en su dieta.</p>
          <p>Estas pencas se introducen a la <strong>*Máquina</strong> automatizada (fermentador) de 220 volts, que contiene tres dispositivos en secuencia que realizan: 1- El corte de las pencas en fracciones de aprox. 1 cm., que caen a un tanque para, 2- El fermentado (mezclado y aireado), y finalmente, 3.- El separado en jugo y bagazo. </p>
          <p>Simultáneamente <strong>*El proceso de fermentación</strong> semisólida aerobica se realiza en el nopal fraccionado (sustrato) por la adición de la levadura seca: Saccharomyces cerevisiae (1%), previa agregado de Urea: 1% y Sulfato de amonio: 0.1%, que consumidos por la levadura forman las proteínas, y después de 6 u 8 horas del proceso de fermentación, en intervalos de ½ de movimiento y ½ de reposo, se obtiene el “Nopafer” con mayor contenido promedio de proteína cruda del 4 ó 5% al 24 ó 30% (6 veces aprox.) y una reducción de carbohidratos no fibrosos (azúcar y almidón) del 52.6 al 23.6 % M.S. (la mitad aprox.) respecto al nopal usado inicialmente (materia prima). Es recomendable instalar la máquina en local techado donde se pueda conservar una temperatura de 25 ± 3 °C.</p>
          <p>“Para un mayor ahorro diario de la levadura (insumo de mayor costo)” se recomienda reciclarla hasta por una semana, usando el jugo (1 gal por c/100 kg de nopal procesado) de la fermentación anterior mantenido en refrigeración (8- 10 °C) y suministrado en lugar de levadura nueva, en este caso se usa la misma cantidad de nopal, urea y sulfato de amonio para cada fermentación. Cuando se recicla la levadura se sugiere monitorear el proceso de fermentación semanal al inicio y cada tres o seis meses, para ello se determina el contenido de proteína cruda en cuatro muestras frescas de 1/2 kg: Muestra 1- Solo el nopal picado antes del proceso, Muestra 2- inmediatamente después de fermentado (Nopafer), Muestra 3.- el Nopafer del dí a 3 y Muestra 4.- el Nopafer del día 7, antes de volver a empezar con la levadura nueva. </p>
          <p>Cada muestra (colocada en envase limpio con tapa) una vez obtenida se almacena en refrigeración y las 4 muestras de la semana se llevan al laboratorio cercano en recipiente con nieve seca o hielo. Finalmente, se recomienda lavar la máquina semanalmente, o sea cuando se vuelve a empezar el proceso de fermentación con levadura seca nueva.</p>
          <p><strong>*La Máquina (Título No.  4536) y el Proceso (Título No. 339696)</strong>, están debidamente registrados en el Instituto Mexicano de la Propiedad Industrial (IMPI) para asegurar su uso directo por el productor en su predio, en el caso de empresas y/u otro tipo de asociación se establece el convenio de uso respectivo para que se pueda realizar su aprovechamiento a mayor escala. </p>
          <div id="animal"></div>
          <div className={style.divider}></div>
          <Banner image={inicio3} />
          <p><strong>EL ANIMAL</strong> es el de diferente tipo de ganado: bovino, ovino y caprino, los que se han evaluado por tres meses con mejoría significativa en condición corporal y peso vivo, inclusive en porcinos se observó aumento en peso vivo.</p>
          <p>Particularmente se ha alimentado con Nopafer en la dieta, el ganado mayor (bovino de carne y leche) y menor (caprino y ovino) evaluados por tres meses en época de primavera o verano, los que mostraron en general mejora en condición corporal y aumento de peso, en bovino lechero se incrementó la producción de leche aún con dosis baja del nopal fermentado en el forraje y especialmente en ovinos se registró un aumento del índice de prolificidad (cuateo).</p>
          <p>Se detectó en su mayoría que el nopal fermentado en combinación con la dieta usual proporcionada por el productor tiene un mayor efecto una vez acostumbrado el ganado (1 o 2 semanas) al Nopafer, debido al incremento en su consumo (palatabilidad) respecto a la dieta original, esto último se ratificó en experimentos donde se igualó el contenido proteico de las dos dietas.</p>
          <p>El porcentaje de Nopafer en la dieta, una vez acostumbrado al producto, puede incrementar paulatinamente desde el 10 al 60% acorde a la respuesta del animal.   En porcinos existen pocas referencias con Nopafer y en todas estas se apreció un incremento de peso vivo, pero se necesita un estudio a fondo para determinar la mejora de dicho aumento en carne magra.</p>
          <p>Quedan pendientes los ensayos con Nopafer en la alimentación humana que abatiría en mucho la desnutrición prevaleciente en México y otros países.</p>
          <div className={style.divider}></div>
          <Title title="Ventajas"/>
          <Ventajas />
        </div>
      </div>

      <Mail />
      <Footer />
    </>
  )
}
