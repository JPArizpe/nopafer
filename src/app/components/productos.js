import Title from './title';
import Icon from './icon';

import assets from '../assets/text/content.json';
import style from '../styles/productos.module.scss';

export default function Productos() {

  const content = assets.productos.content.map((item, index) => <p key={index}>{item}</p>);
  const icons = assets.productos.cards.map((card, index) => {
    const icon = require(`../assets/images/${card.icon}`);
    return (
      <Icon
        key={index}
        icon={icon}
        text={card.title}
        alt={card.title}
      />
    )
  })

  return (
    <div className={style.textContent}>
      <Title title={assets.productos.title} />
      {content}
      <div className={style.productos}>
        {icons}
      </div>
    </div>
  )
}