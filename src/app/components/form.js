import style from '../styles/form.module.scss';

export default function Form() {
  return (
    <>
      <div className={style.formGroup}>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Correo" />
        <textarea rows="10" placeholder="Mensaje"></textarea>
        <button className={style.enviar}>Enviar</button>
      </div>
    </>
  )
}