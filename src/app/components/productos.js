"use client";

import Title from './title';
import assets from '../assets/text/content.json';
import style from '../styles/productos.module.scss';
import styleIcon from '../styles/icon.module.scss';
import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react';

export default function Productos() {

  const [over1, setOver1] = useState(false);
  const [over2, setOver2] = useState(false);
  const [over3, setOver3] = useState(false);
  const [over4, setOver4] = useState(false);

  const icon1 = require(`../assets/images/folletosIcon.svg`);
  const hoverIcon1 = require(`../assets/images/hover_folletosIcon.svg`);

  const icon2 = require(`../assets/images/multimediaIcon.svg`);
  const hoverIcon2 = require(`../assets/images/hover_multimediaIcon.svg`);

  const icon3 = require(`../assets/images/tecnicosIcon.svg`);
  const hoverIcon3 = require(`../assets/images/hover_tecnicosIcon.svg`);

  const icon4 = require(`../assets/images/tesisIcon.svg`);
  const hoverIcon4 = require(`../assets/images/hover_tesisIcon.svg`);

  return (
    <div className={style.textContent}>
      <Title title={assets.productos.title} />
      <div className={style.productos}>

          <div className={styleIcon.iconLayout}
            onMouseOver={() => setOver1(true)}
            onMouseOut={() => setOver1(false)}
          >
            <Link href={assets.productos.cards[0].url}>
              <Image
                className={styleIcon.icon}
                src={over1 ? hoverIcon1 : icon1 }
                width={75}
                height={75}
                alt={assets.productos.cards[0].title}
              />
              <p>{assets.productos.cards[0].title}</p>
            </Link>
          </div>


        <div className={styleIcon.iconLayout}
          onMouseOver={() => setOver2(true)}
          onMouseOut={() => setOver2(false)}
        >
          <Link href={assets.productos.cards[1].url}>
            <Image
              className={styleIcon.icon}
              src={over2 ? hoverIcon2 : icon2 }
              width={75}
              height={75}
              alt={assets.productos.cards[1].title}
            />
            <p>{assets.productos.cards[1].title}</p>
          </Link>
        </div>

        <div className={styleIcon.iconLayout}
          onMouseOver={() => setOver3(true)}
          onMouseOut={() => setOver3(false)}
        >
          <Link href={assets.productos.cards[2].url}>
            <Image
              className={styleIcon.icon}
              src={over3 ? hoverIcon3 : icon3 }
              width={75}
              height={75}
              alt={assets.productos.cards[2].title}
            />
            <p>{assets.productos.cards[2].title}</p>
          </Link>
        </div>

        <div className={styleIcon.iconLayout}
          onMouseOver={() => setOver4(true)}
          onMouseOut={() => setOver4(false)}
        >
          <Link href={assets.productos.cards[3].url}>
            <Image
              className={styleIcon.icon}
              src={over4 ? hoverIcon4 : icon4 }
              width={75}
              height={75}
              alt={assets.productos.cards[3].title}
            />
            <p>{assets.productos.cards[3].title}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}