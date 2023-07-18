import Title from './title';
import Aviso from './aviso';

import assets from '../assets/text/content.json';
import style from '../styles/avisos.module.scss';

export default function Avisos() {

  const avisos = assets.avisos.cards.map((card, index) => {
    const image = require(`../assets/images/${card.img}`);
    return (
      <Aviso
        key={index}
        description={card.text}
        image={image}
        alt={card.text}
        url={card.url}
      />
    )
  });

  return (
    <div className={style.avisosContainer}>
      <div className={style.sectionAvisos}>
        <div className="maxWidth">
          <Title title={assets.avisos.title} />
          <div className={style.avisos}>
            {avisos}
          </div>
        </div>
      </div>
    </div>
  )
}