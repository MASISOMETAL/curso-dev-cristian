import styles from "./about-me.module.css"

export default function AboutMe() {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/yo.jpg?height=400&width=400" alt="Instructor" className={styles.image} />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Acerca de Mi</h2>

          <p className={styles.description}>
            ¡Hola! Soy un desarrollador web y mobile apasionado y educador, en mis tiempos libres dedico a crear soluciones
            modernas y efectivas, con un codigo limpio y un diseño cautivador.
          </p>

          <p className={styles.description}>
            Mi trayectoria como docente comenzó hace 3 años, cuando descubrí mi pasión por compartir conocimiento y ayudar a
            otros a crecer en sus carreras de desarrollo web. Desde entonces, he enseñado a muchos estudiantes a través
            de mis cursos en línea y talleres.
          </p>

          <p className={styles.description}>
            Creo en el aprendizaje práctico y orientado a la acción, que te prepara para los desafíos del mundo real.
            Mis cursos están diseñados para brindarte tanto el conocimiento teórico como las habilidades prácticas que
            necesitas para triunfar como desarrollador web.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Estudiantes</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Cursos Dictados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

