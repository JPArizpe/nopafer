import style from '../styles/mail.module.scss';

import Title from './title';
import Readmore from './readmore';

export default function Mail({backgroundImage, title, text = [], color = 'black'}) {
  return (
    <>
      <div className={style.section} style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className={`maxWidth ${style.sectionMargin}`}>
          <Title title={title} color="white"/>
          <div>
            <div className={style.contactLeft}>
              <p>Favor de llenar el siguiente formulario, nosotros nos pondremos en contacto contigo lo más pronto posible para brindarle la información que necesitas.</p>
              <h4 style={{color: 'white'}}>CONTACTO DIRECTO</h4>
              <div className={style.contact}>
                <p>Arnoldo Flores Hernández.<i>Coordinador Técnico</i></p>
                <p>aflores@nopafer.com</p>
              </div>
              <div className={style.contact}>
                <p>Francisco Javier Macías Rodríguez.<i>Colaborar Técnico - Académicos</i></p>
                <p>fmacias@nopafer.com</p>
              </div>
              <div className={style.contact}>
                <p>Oscar Sabag Martínez.<i>Colaborador Técnico - Productores</i></p>
                <p>osabag@nopafer.com</p>
              </div>
              <div className={style.contact}>
                <p>Jorge Isaac Flores Martínez.<i>Mercadotécnica y diseño</i></p>
                <p>jflormtz@nopafer.com</p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}