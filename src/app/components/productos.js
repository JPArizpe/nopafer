import Title from './title';
import dynamic from 'next/dynamic';

import assets from '../assets/text/content.json';
import style from '../styles/productos.module.scss';

export default function Productos() {

  const IconComponent = dynamic(() => import('./icon'), {
    ssr: false
  });

  const content = assets.productos.content.map((item, index) => <p key={index}>{item}</p>);
  const icons = assets.productos.cards.map((card, index) => {
    const icon = require(`../assets/images/${card.icon}`);
    const hoverIcon = require(`../assets/images/${card.hover}`);
    return (
      <IconComponent
        key={index}
        icon={icon}
        hoverIcon={hoverIcon}
        text={card.title}
        alt={card.title}
        url={card.url}
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