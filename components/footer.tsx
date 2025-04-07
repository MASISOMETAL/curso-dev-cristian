import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Curso Desarrollo Web</h3>
            <p className={styles.tagline}>Aprende desarrollo web desde cero</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Cursos</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#courses">Fundamentos de HTML</a>
                </li>
                <li>
                  <a href="#courses">Dominio de CSS</a>
                </li>
                <li>
                  <a href="#courses">Fundamentos de JavaScript</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Recursos</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="https://developer.mozilla.org/es/" target="_blank">MDN</a>
                </li>
                <li>
                  <a href="https://www.eniun.com/resumen-tabla-propiedades-css-valores/" target="_blank">Tutorial CSS</a>
                </li>
                <li>
                  <a href="https://www.svgrepo.com/" target="_blank">Iconos SVG</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Conexiones</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="https://portfolio-cristian-farias.netlify.app/" target="_blank">Mi Portfolio</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/cristianmasisofarias/" target="_blank">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {currentYear} Curso Desarrollo Web. Todos los derechos reservados.</p>
          <div className={styles.legal}>
            <a href="#">Politicas y Privacidad</a>
            <Link href="/terminos-del-servicio">Terminos del Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

