import style from '../styles/table.module.scss';

export default function Ventajas() {
  return (
    <table className={style.tg}>
      <thead>
        <tr>
          <th className={style.tg0lax}></th>
          <th className={style.tg0x09}>Ventajas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={style.tg0lax}>EL NOPAL</td>
          <td className={style.tg0lax}>Con alto contenido de proteína y energía, derivado del uso del nopal sin o con espinas, con amplias ventajas adaptativas, productivas y de ahorro de agua respecto a otros forrajes como la alfalfa, además de su disponibilidad todo el año.</td>
        </tr>
        <tr>
          <td className={style.tg0lax}>LA TECNOLOGÍA (MÁQUINA Y PROCESOS)</td>
          <td className={style.tg0lax}>Automatizada con primacías económicas en ahorro de tiempo, mano de obra y producción de alimento forrajero, con mayor contenido de proteína, en el mismo predio.</td>
        </tr>
        <tr>
          <td className={style.tg0lax}>ANIMAL</td>
          <td className={style.tg0lax}>Atendido en cantidad y requisitos nutritivos particularmente en épocas críticas de sequía, a menor costo y con mejora significativa en características de producción y reproducción en su caso.</td>
        </tr>
        <tr>
          <td className={style.tg0lax}>INFORMACIÓN GENERADA Y DIFUNDIDA </td>
          <td className={style.tg0lax}>Talleres demostrativos en campo directamente con el productor, Congresos, Artículos de divulgación y científicos, Videos, Tesis de Licenciatura y Posgrado.</td>
        </tr>
      </tbody>
    </table>
  );
}
