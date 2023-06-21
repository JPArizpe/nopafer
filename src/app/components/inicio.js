import Title from './title';
import Card from './card';

import assets from '../assets/text/content.json';
import style from '../styles/inicio.module.scss';

export default function Inicio() {

  const content = assets.inicio.content.map((item, index) => <p key={index}>{item}</p>);
  const cards = assets.inicio.cards.map((card, index) => {
    const bgImage = require(`../assets/images/${card.img}`);
    const icon = require(`../assets/images/${card.icon}`);
    return (
      <Card
        key={index}
        title={card.title}
        description={card.content[0]}
        image={bgImage}
        icon={icon}
        alt={card.title}
      />
    )
  })

  return (
    <>
      <Title title={assets.inicio.title}/>
      <div className={style.textContent}>
        {content}
      </div>
      <div className={style.cards}>
        {cards}
      </div>
    </>
  )
}