import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
      <header className={styles.head}>
        <div className={styles.logo}>
          <Link href="/">Curso Desarrollo Web</Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.containerText}>
          <h1 className={styles.title}>Términos del servicio</h1>
        </div>
        <div className={styles.containerText}>
          <p className={styles.titleArticle}>1. Condiciones Generales</p>
          <p>
            Al utilizar esta página web y adquirir cualquiera de los cursos ofrecidos, el usuario declara haber leído,
            entendido y aceptado todos los términos y condiciones aquí expuestos. Estos términos establecen las reglas
            de uso de los servicios brindados y las responsabilidades del usuario y del instructor. Si no acepta alguno de
            los términos, se recomienda no adquirir los cursos ni interactuar con la plataforma.
          </p>
          <p className={styles.titleArticle}>2. Sobre el Servicio</p>
          <p>
            El curso ofrecido está orientado a la enseñanza de programación y se dicta a través de la plataforma Discord.
            Cada clase tiene una duración aproximada de entre 1 y 2 horas y se ajusta a los horarios y días previamente
            acordados con el alumno. El contenido y ritmo de aprendizaje están diseñados para garantizar que el estudiante
            alcance los objetivos establecidos.
          </p>
          <p className={styles.titleArticle}>3. Ajustes de Horario</p>
          <p>
            El instructor se compromete a ajustar sus horarios para adaptarse a las necesidades del alumno siempre que
            no afecten sus propias responsabilidades y necesidades personales. En caso de no llegar a un acuerdo mutuo,
            el instructor notificará al alumno con anticipación para reorganizar las clases.
          </p>
          <p className={styles.titleArticle}>4. Actividad del Alumno</p>
          <p>
            Si un alumno permanece inactivo durante un período mayor a dos meses sin tomar clases ni avisar previamente,
            el instructor se reserva el derecho de dar de baja al alumno del curso, con la finalidad de optimizar la gestión
            de los servicios y recursos disponibles.
          </p>
          <p className={styles.titleArticle}>5. Límites de Responsabilidad</p>
          <p>
            El instructor no será responsable por el mal uso de los materiales del curso ni por el incumplimiento de los
            términos por parte de los alumnos. Al adquirir el curso, el usuario acepta que el instructor no garantiza resultados
            específicos ni será responsable por problemas ajenos a la enseñanza directa, como la calidad del equipo tecnológico
            del alumno o problemas de conexión a internet.
          </p>
          <p className={styles.titleArticle}>6. Conducta del Alumno</p>
          <p>
            Se espera que los alumnos mantengan una conducta respetuosa y profesional durante las clases y cualquier interacción
            con el instructor. Está prohibido el uso de lenguaje ofensivo, discriminatorio o cualquier comportamiento que afecte
            negativamente el ambiente de aprendizaje.
          </p>
          <p className={styles.titleArticle}>7. Inscripción</p>
          <p>
            Para inscribirse en el curso, el interesado debe enviar un mensaje vía WhatsApp o correo electrónico al instructor,
            indicando su nombre completo y disponibilidad horaria. No se requieren trámites adicionales para formalizar la
            inscripción.
          </p>
          <p className={styles.titleArticle}>8. Requisitos del Alumno</p>
          <p>
            Para aprovechar el curso, los alumnos deben cumplir con los siguientes requisitos:
          </p>
          <ul>
            <li>Contar con acceso a internet estable.</li>
            <li>Tener una computadora en buen estado capaz de ejecutar herramientas de programación.</li>
            <li>Poseer conocimientos básicos sobre el uso de una computadora, como la navegación web, instalación de programas
              y manejo de archivos.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default page