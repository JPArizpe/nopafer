import Title from './title';
import Readmore from './readmore';
import Form from './form';

import assets from '../assets/text/content.json';
import style from '../styles/mail.module.scss';
import sectionBackground from '../assets/images/contacto.png';

export default function Mail({seemore, full}) {

  const content = assets.contacto.content.map((item, index) => <p className={style.description} key={index}>{item}</p>);

  const contacto = assets.contacto.contactos.map((contacto, index) => {
    return (
      <div className={style.contact} key={index}>
        <p>{contacto.name}. <i>{contacto.puesto}</i></p>
      </div>
    )
  })

  return (
    <>
      <div className={`${style.section} ${full && style.full}`} style={{backgroundImage: `url(${sectionBackground.src})`}}>
        <div className={`maxWidth ${style.sectionMargin}`}>
          <div className={style.seeMore}>
            {seemore && <Readmore text='Ver más' url="/avisos"/>}
          </div>
          <Title title={assets.contacto.title} color="white"/>
          <div className={style.form}>
            <div className={style.contactLeft}>
              <h3 style={{color: 'white', textTransform: 'uppercase'}}>Directorio</h3>
              {contacto}
              <h4 style={{color: 'white', textTransform: 'uppercase'}}>Contacto</h4>
              {content}
              <p>Lic. Jorge Flores Mtz. <i>Comunicación y diseño</i></p>
              <p className={style.email}>info@nopafer.com</p>
            </div>
            <div className={style.contactRight}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}