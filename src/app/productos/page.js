import Header from '../components/header';
import Hero from '../components/hero';
import Title from '../components/title';
import Mail from '../components/mail';
import Footer from '../components/footer';

import style from '../styles/productosPage.module.scss';

export default function Productos() {
  return (
    <>
      <Header />
      <Hero hideLogo={true} productos={true} />

      <div className='container maxWidth'>
        <div className={style.inicio}>
          <Title title='Productos' center={true} />
          <p>Los productos de la tecnología de enriquecimiento proteico que se mencionan en los diferentes rubros, en algunos casos se encuentren publicados en revistas u otro tipo de medio de información electrónica resguardada por lo que se indica solo la referencia para que se pueda realizar la búsqueda y acceder a estos, generalmente de manera gratuita.</p>
          <div id="manuales"></div>
          <p>En aquellos productos institucionales como informes, folletos y videos se ofrecen sin costo para su consulta (Para su uso se debe citar la fuente correspondiente). </p>
          <Title title='manuales y folletos' />
          <p>Manual: ENRIQUECIMIENTO PROTEICO DEL NOPAL (OPUNTIA SPP) COMO FORRAJE EN EL NORTE DE MÉXICO. URUZA- UACh, 2015. (<a href='https://drive.google.com/file/d/1szuVZq9tazkR-qMNs9euoc0YuS3p_s0L/view?usp=drive_link' target='_blank'>Ver</a>)</p>
          <div className={style.divider}></div>
          <p>Folleto: VARIEDADES DE NOPAL SIN ESPINA, VERDURA - FORRAJE: CHAPINGO, NARRO Y ESCOBAR COMO MATERIA PRIMA PARA SU ENRIQUECIMIENTO PROTEICO EN LAS ZONAS ÁRIDAS DEL NORTE DEL PAÍS. URUZA- UACh, 2020. (<a href='https://drive.google.com/file/d/1agTDIBE4S-32pph7jQIfTwz9i43Qqook/view?usp=drive_link' target='_blank'>Ver</a>)</p>
          <div id="multimedia"></div>
          <div className={style.divider}></div>
          <p>Folleto: TRANSFERENCIA DE LA TECNOLOGÍA DE ENRIQUECIMIENTO PROTEICO DE NOPAL. Dirección de Centros Regionales Universitarios- UACh, 2020. (<a href='https://drive.google.com/file/d/1yrVqRn_3Gv_eMcKCIyHLc9Y-aO7zIpj9/view?usp=drive_link' target='_blank'>Ver</a>)</p>
          <Title title='multimedia' />
          <p>ENRIQUECIMIENTO PROTEICO DEL NOPAL (OPUNTIA SPP) COMO FORRAJE EN EL NORTE DE MÉXICO. URUZA-UACh, 2015. (<a href='https://drive.google.com/file/d/1jNm4iodl3QKfZjhUD3E2ygfhPvMoeJaB/view?usp=drive_link' target='_blank'>Ver</a>)</p>
          <div className={style.divider}></div>
          <p>EFECTIVA E INNOVADORA ALTERNATIVA DEL NOPAL, video producido por la Revista Despertar del Campo: </p>
          <a href='https://www.youtube.com/watch?v=6mk9188MKnQ&feature=youtu.be'>https://www.youtube.com/watch?v=6mk9188MKnQ&feature=youtu.be</a>
          <div id="informes"></div>
          <div className={style.divider}></div>
          <p>Con sopa de nopal alimentamos el ganado orgánico. Alma Coronel. Video Telepaisa: </p>
          <a href="https://www.youtube.com/watch?v=qmn9Xo2-gXg&ab_channel=telepaisa">https://www.youtube.com/watch?v=qmn9Xo2-gXg&ab_channel=telepaisa</a>
          <Title title='informes técnicos' />
          <p><strong>INFORMES TÉCNICOS QUE CULMINAN CON EVENTOS DEMOSTRATIVOS:</strong></p>
          <table className={style.tg}>
          <thead>
            <tr>
              <th className={style.tg266k}><strong>AÑO</strong></th>
              <th className={style.tg0lax}><strong>INSTITUCIÓN</strong></th>
              <th className={style.tg0x09}><strong>INSTITUCIÓN</strong></th>
              <th className={style.tg0lax}><strong>TIEMPO</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.tg0pky}>2009-12</td>
              <td className={style.tg0lax}><span>COCyTED</span></td>
              <td className={style.tg0lax}><span>Comarca Lag.: Dgo.,y Coah. (<a href='https://drive.google.com/file/d/1---DQCB8V_cvK8YUdeH1HivMfnFqiV_5/view?usp=drive_link' target='_blank'>Ver</a>)</span></td>
              <td className={style.tg0pky}>6 meses / 2 sitios</td>
            </tr>
            <tr>
              <td className={style.tg0pky}>2013</td>
              <td className={style.tg0lax}>CONANP-Tamps</td>
              <td className={style.tg0lax}>Matamoros, Tamps.  (<a href='https://drive.google.com/file/d/1u0gZXmxrT_V42XZPF2rmoCqHxG5tdipP/view?usp=drive_link' target='_blank'>Ver</a>)</td>
              <td className={style.tg0pky}>2 meses / 1 sitios</td>
            </tr>
            <tr>
              <td className={style.tg0pky}>2014</td>
              <td className={style.tg0lax}>DGIP- UACh</td>
              <td className={style.tg0lax}>Morelos,Zac.,y Cuatrocienegas, Coah.  (<a href='https://drive.google.com/file/d/1YCf38T4hgAoGqscGfOt9Xy4STNR3kq0Q/view?usp=drive_link' target='_blank'>Ver</a>)</td>
              <td className={style.tg0pky}>6 meses / 2 sitios</td>
            </tr>
            <tr>
              <td className={style.tg0lax}>2015</td>
              <td className={style.tg0lax}>DGIP- UACh</td>
              <td className={style.tg0lax}><span>Morelos,Dgo.,y Durango, Dgo.  (<a href='https://drive.google.com/file/d/1AYWUekDFh4Af-np08Dg2XtCR55DqntvR/view?usp=drive_link' target='_blank'>Ver</a>)</span></td>
              <td className={style.tg0lax}>6 meses / 2 sitios</td>
            </tr>
            <tr>
              <td className={style.tg0lax}>2017</td>
              <td className={style.tg0lax}>DGIP- UACh</td>
              <td className={style.tg0lax}>Cuatrocien, Coah.  (<a href='https://drive.google.com/file/d/1fld5H-vHoUPLtOqbZFk4RpTpdPAAhFdD/view?usp=drive_link' target='_blank'>Ver</a>)</td>
              <td className={style.tg0lax}>6 meses / 1 sitios</td>
            </tr>
            <tr>
              <td className={style.tg0pky}>2018</td>
              <td className={style.tg0lax}>COCyTED</td>
              <td className={style.tg0lax}>Poanas, Dgo.  (<a href='https://drive.google.com/file/d/1kczwx1l66iZXAgcSaCcR_LflbXfiNVjz/view?usp=drive_link' target='_blank'>Ver</a>)</td>
              <td className={style.tg0lax}>6 meses/1 sitios</td>
            </tr>
            <tr>
              <td className={style.tg0lax}>2019-20</td>
              <td className={style.tg0lax}>DGIP- UACh</td>
              <td className={style.tg0lax}>Jerez, Zac.  (<a href='https://drive.google.com/file/d/124lqlkfljUIAAyXlQs5FvKAjaWGgHWjK/view?usp=drive_link' target='_blank'>Ver</a>)</td>
              <td className={style.tg0lax}>6 meses/1 sitios</td>
            </tr>
          </tbody>
          </table>
          <div id="tesis"></div>
          <Title title='artículos y tesis' />
          <p><strong>ARTÍCULO 2018</strong> - ARNOLDO FLORES-HERNÁNDEZ; FRANCISCO J. MACÍAS-RODRÍGUEZ; GABRIEL GARCÍA-HERRERA; OSCAR ESQUIVEL-ARRIAGA; JORGE ORTIZ-SALAZAR; CESAR A. MEZA-HERRERA; ALICIA PALETA-OCHOA; CARLOS A. ROMERO-RODRÍGUEZ. VALIDACIÓN DE LA TECNOLOGÍA DE ENRIQUECIMIENTO PROTEICO DE NOPAL (Opuntia spp) EN EL CENTRO NORTE DE MÉXICO. CIENCIA E INNOVACIÓN, VOL. 1, NÚM. 2 / AGOSTO – DICIEMBRE DE 2018, PP. 363-370. ISSN- 2594-150X</p>
          <div className={style.divider}></div>
          <p><strong>ARTÍCULO 2019</strong> - CESAR A. MEZA-HERRERA; CARLOS A. ROMERO-RODRÍGUEZ, ADRIAN NEVÁREZ-DOMINGUEZ; ARNOLDO FLORES-HERNANDEZ; OMAG CANO-VILLEGAS; ULISES MACIAS-CRUZ; MIGUEL MELLADO; GUADALUPE CALDERON-LEYVA; DALIA CARRILLO-MORENO; FRANCISCO G. VELIZ-DERAS. THE OPUNTIA EFECT AND THE REACTIVATION OF OVARIAN FUNCTION AND BLOOD METABOLITE CONCENTRATIONS OF ANESTROUS GOATS EXPOSED TO ACTIVE MALES. ANIMALS 2019, 9. 550:1-12. DOI:10.3390/ani9080550, ISSN: 2076-2615</p>
          <div className={style.divider}></div>
          <p><strong>ARTÍCULO 2019</strong> - ARNOLDO FLORES-HERNÁNDEZ; FRANCISCO J. MACÍAS-RODRÍGUEZ; GABRIEL GARCÍA-HERRERA; JOSÉ LUIS ORTEGA-SÁNCHEZ; CESAR A. MEZA-HERRERA; BERNARDO MURILLO-AMADOR. QUALITY OF FERMENTED CACTUS PEAR (OPUNTIA SPP.) AND ITS EFFECT ON LIVE WEIGHT GAIN OF DORPER LAMBS. JPACD (2019) 21: 57-70. ISSN: 1938-6648</p>
          <div className={style.divider}></div>
          <p><strong>ARTÍCULO 2019</strong> - C. A. MEZA-HERRERA, C. E. SANTAMARIA-ESTRADA, A. FLORES-HERNANDEZ, O. CANO-VILLEGAS, C. GARCIA DE LA PENA, U. MACIAS-CRUZ, G. CALDERON-LEYVA, O. ANGEL-GARCIA, M. MELLADO, D. CARRILLO-MORENO, F.G. VELIZ-DERAS. THE OPUNTIA EFFECT UPON THE OUT-OF-SEASON EMBRYO IMPLANTATION RATE IN GOATS: CORPUS LUTEAL NUMBER, CORPUS LUTEAL DIAMETER AND SERUM PROGESTERONE CONCENTRATIONS. Livestock Science Volume 228, October 2019, 201-206 p. doi.org/10.1016/j.livsci.2019.09.002, ISSN: 1871-1413</p>
          <div className={style.divider}></div>
          <p><strong>ARTÍCULO 2019</strong> ARNOLDO FLORES HERNÁNDEZ, FCO. JAVIER MACÍAS RODRÍGUEZ, CESAR MEZA HERRERA, GABRIEL GARCÍA HERRERA, OSCAR ESQUIVEL ARRIAGA, JORGE ORTIZ SALAZAR, CRISTÓBAL HERNÁNDEZ BAUTISTA.  SEMI-SOLID FERMENTATION OF NOPAL (OPUNTIA SPP) FOR USE AS AN ANIMAL PROTEIN SUPPLEMENT. Revista de Geografía Agrícola núm. 63:87-100, doi.org/ 10.5154/ r.rga. 2019.63.04, ISSN: 2448-7368.</p>
          <div className={style.divider}></div>
          <p><strong>ARTÍCULO 2020</strong> - FRANCISCO G. VÉLIZ-DERAS, CÉSAR A. MEZA-HERRERA, SHARON HERRERA-HERNANDEZ, ARNOLDO FLORES-HERNÁNDEZ, JUAN M. GUILLÉN-MUÑOZ, CAYETANO NAVARRETE-MOLINA, SILVESTRE MORENO-AVALOS AND RAFAEL RODRIGUEZ-MARTINEZ. THE OPUNTIA EFFECT IMPROVES DAM-KID METABOLIC MARKERS, AUGMENTS COLOSTRUM QUALITY AND ENHANCES KID-TO-DAM BEHAVIORAL INTERACTIONS IN CROSSBRED GOATS AND THEIR OFFSPRING UNDER SEMIARID- RANGELAND CONDITIONS. Animals 2020, 10, 931; doi:10.3390/ani10060931. ISSN 2076-2615</p>
          <div className={style.divider}></div>
          <p><strong>ARTÍCULO 2021</strong> - AEROBIC SEMI-SOLID FERMENTATION OF OPUNTIA MEGACANTHA AS A FOOD SUPPLEMENT AND THEIR EFFECT ON DAIRY COWS (HOLSTEIN). ARNOLDO FLORES-HERNÁNDEZ, FRANCISCO JAVIER MACÍAS-RODRÍGUEZ, CÉSAR MEZA-HERRERA, GABRIEL GARCÍA-HERRERA, OSCAR ESQUIVEL-ARRIAGA, CRISTÓBAL HERNÁNDEZ-BAUTISTA, BERNARDO MURILLO-AMADOR. REVISTA JPACD (2021); 23 12-25. Electrónico ISSN: 1938-6648</p>
          <div className={style.divider}></div>
          <p><strong>TESIS 2011 OCT</strong> - FERMENTACIÓN SEMI SÓLIDA DE NOPAL FORRAJERO (OPUNTIA SP). MISAEL M. GÁMEZ AGUILAR, TESIS ING. AGRON. EN SIST. AGR. DE Z.A. URUZA-UACH, BERMEJILLO, DGO. 72p.</p>
          <div className={style.divider}></div>
          <p><strong>TESIS 2014 MARZO</strong> - ANALISIS DEL PROCESO DE FERMENTACION SEMISOLIDA PARA INCREMENTAR EL CONTENIDO DE PROTEINA DEL  NOPAL (Opuntia spp.) COMO FORRAJE. KARLA YESSICA ORTEGA REYES. TESIS MAESTRO EN CIENCIAS EN RECURSOS NATURALES Y MEDIO AMBIENTE EN ZONAS ARIDAS. URUZA- UACH, BERMEJILLO, DGO.66p.</p>
          <div className={style.divider}></div>
          <p><strong>TESIS 2015 AGOSTO</strong> - EFECTO DE LA SUPLEMENTACIÓN DE NOPAL (Opuntia Megacantha. Salm Dick) ENRIQUECIDO PROTEICAMENTE SOBRE LA REACTIVACIÓN OVÁRICA EN CABRAS ANÉSTRICAS EXPUESTAS AL EFECTO MACHO. CARLOS A. ROMERO MARTINEZ. TESIS ING. AGRON. EN SIST. PEC. DE Z.A. URUZA-UACH, BERMEJILLO, DGO.</p>
          <div className={style.divider}></div>
          <p><strong>TESIS 2016 ENERO</strong> - EFECTO DE LA SUPLEMENTACIÓN DE NOPAL ENRIQUECIDO (Opuntia megacantha- SALM-DYCK) SOBRE EL COMPORTAMIENTO REPRODUCTIVO EN CABRAS ANÉSTRICAS EXPUESTAS AL EFECTO MACHO BAJO CONDICIONES EXTENSIVAS. OMAG CANO VILLEGAS. TESIS MAESTRO EN CIENCIAS EN RECURSOS NATURALES Y MEDIO AMBIENTE EN ZONAS ARIDAS. URUZA- UACH, BERMEJILLO, DGO.</p>
          <div className={style.divider}></div>
          <p><strong>TESIS 2018 MAYO</strong> -  SUPLEMENTACIÓN DE NOPAL PROTEICAMENTE ENRIQUECIDO Y FUNCIÓN REPRODUCTIVA EN CABRAS: LUTEOGÉNESIS, PROGESTERONA SÉRICA Y TASA DE IMPLANTACIÓN EMBRIONARIA CARLOS ENRIQUE SANTAMARÍA ESTRADA. TESIS MAESTRIA EN RECURSOS NATURALES Y MEDIO AMBIENTE DE ZONAS ARIDAS. URUZA-UACH, BERMEJILLO, DGO.</p>
          <div className={style.divider}></div>
          <p><strong>TESIS 2018 MAYO</strong> - SUPLEMENTACIÓN DE NOPAL PROTEICAMENTE ENRIQUECIDO Y REACTIVACIÓN DE LA FUNCIÓN OVÁRICA EN CABRAS ANÉSTRICAS EXPUESTAS AL EFECTO MACHO: NIVELES SÉRICOS DE PROTEÍNA TOTAL Y UREA.  CARLOS ARNOLDO ROMERO RODRÍGUEZ. TESIS MAESTRIA EN RECURSOS NATURALES Y MEDIO AMBIENTE DE ZONAS ARIDAS. URUZA-UACH, BERMEJILLO, DGO.</p>
          <div className={style.divider}></div>
          <p><strong>TESIS 2019 MAYO</strong> - EFECTO DE LA SUPLEMENTACIÓN DE NOPAL (Opuntia megacantha) ENRIQUECIDO PROTEICAMENTE SOBRE LA REACTIVACION DE LA FUNCIÓN OVARICA EN CABRAS: ANESTRICAS EXPUESTAS AL EFECTO MACHO: NIVELES SÉRICOS DE GLUCOSA Y COLESTEROL. ADRIAN NEVAREZ DOMINGUEZ. TESIS MAESTRIA EN RECURSOS NATURALES Y MEDIO AMBIENTE DE ZONAS ARIDAS. URUZA-UACH, BERMEJILLO, DGO.</p>
        </div>
      </div>
      <Mail />
      <Footer />
    </>
  )
}