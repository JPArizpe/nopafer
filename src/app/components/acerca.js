import assets from '../assets/text/content.json';
import style from '../styles/section.module.scss';
import sectionBackground from '../images/sectionBackground.png';

import Title from './title';
import Readmore from './readmore';

export default function Acerca() {

  const pasedContent = assets.acerca.content.map((item, index) => <p key={index}>{item}</p>);

  return (
    <>
      <div className={style.section} style={{backgroundImage: `url(${sectionBackground.src})`}}>
        <div className={`maxWidth ${style.sectionMargin}`}>
          <Title title={assets.acerca.title} color="white" className={style.sectionTitle} />
          {pasedContent}
          <div className={style.readmore}>
            <Readmore />
          </div>
        </div>
      </div>
    </>
  )
}