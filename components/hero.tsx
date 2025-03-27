import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Domina el Desarrollo Web</h1>
          <p className={styles.subtitle}>Aprende HTML, CSS y JavaScript en un curso integral</p>
          <div className={styles.cta}>
            <a href="#courses" className={styles.primaryButton}>
              Explorar Cursos
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contactame
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/th.jpg?height=400&width=500" alt="Web Development Course" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

