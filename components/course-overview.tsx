import styles from "./course-overview.module.css"

interface CourseCardProps {
  title: string
  description: string
  icon: string
  color: string
  setActiveCourse: React.Dispatch<React.SetStateAction<string>>
  courseId: string
}

interface Params {
  setActiveCourse: React.Dispatch<React.SetStateAction<string>>
}

function CourseCard({ title, description, icon, color, setActiveCourse, courseId }: CourseCardProps) {

  const handleCourseChange = (courseId: string) => {
    setActiveCourse(courseId)
  }

  return (
    <div className={styles.card} style={{ borderTopColor: color }}>
      <div className={styles.iconContainer} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href="#modules" className={styles.cardLink} onClick={() => handleCourseChange(courseId)}>
        Ver Módulos
      </a>
    </div>
  )
}

export default function CourseOverview({ setActiveCourse }: Params) {
  return (
    <section id="courses" className={styles.courseOverview}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Tres Cursos en Uno</h2>
          <p className={styles.description}>
            Obtén una educación integral en desarrollo web con estos tres cursos esenciales
          </p>
        </div>

        <div className={styles.courses}>
          <CourseCard
            title="Fundamentos de HTML"
            description="Aprende los cimientos de la web. Domina los elementos de HTML5, el marcado semántico y la estructura adecuada de documentos."
            icon="HTML"
            color="#E44D26"
            setActiveCourse={setActiveCourse}
            courseId="html"
          />

          <CourseCard
            title="Dominio de CSS"
            description="Crea diseños hermosos y responsivos. Aprende sobre layouts, animaciones y técnicas modernas de CSS.."
            icon="CSS"
            color="#264DE4"
            setActiveCourse={setActiveCourse}
            courseId="css"
          />

          <CourseCard
            title="Fundamentos de JavaScript"
            description="Dale vida a tus sitios web con interactividad. Aprende conceptos fundamentales, manipulación del DOM y características modernas de JavaScript."
            icon="JS"
            color="#F7DF1E"
            setActiveCourse={setActiveCourse}
            courseId="js"
          />
        </div>
      </div>
    </section>
  )
}

