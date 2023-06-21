import Title from './title';
import Readmore from './readmore';
import Form from './form';

import assets from '../assets/text/content.json';
import style from '../styles/mail.module.scss';
import sectionBackground from '../images/sectionBackground.png';

export default function Mail() {

  const content = assets.contacto.content.map((item, index) => <p className={style.description} key={index}>{item}</p>);

  const contacto = assets.contacto.contactos.map((contacto, index) => {
    return (
      <div className={style.contact} key={index}>
        <p>{contacto.name}<i>{contacto.puesto}</i></p>
        <p>{contacto.correo}</p>
      </div>
    )
  })

  return (
    <>
      <div className={style.section} style={{backgroundImage: `url(${sectionBackground.src})`}}>
        <div className={`maxWidth ${style.sectionMargin}`}>
          <div className={style.seeMore}>
            <Readmore text='Ver más'/>
          </div>
          <Title title={assets.contacto.title} color="white"/>
          <div className={style.form}>
            <div className={style.contactLeft}>
              {content}
              <h4 style={{color: 'white', textTransform: 'uppercase'}}>{assets.contacto.listTitle}</h4>
              {contacto}
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