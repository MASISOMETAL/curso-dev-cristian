"use client"

import styles from "./course-modules.module.css"
import { coursesData } from "@/data/info"

interface Params {
  activeCourse: string
  setActiveCourse: React.Dispatch<React.SetStateAction<string>>
}

export default function CourseModules({activeCourse, setActiveCourse}: Params) {

  const handleCourseChange = (courseId: string) => {
    setActiveCourse(courseId)
  }

  const activeCourseData = coursesData.find((course) => course.id === activeCourse)

  return (
    <section id="modules" className={styles.courseModules}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Course Modules</h2>
          <p className={styles.description}>Explore the comprehensive curriculum for each course</p>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {coursesData.map((course) => (
              <button
                key={course.id}
                className={`${styles.tab} ${activeCourse === course.id ? styles.activeTab : ""}`}
                onClick={() => handleCourseChange(course.id)}
              >
                {course.title}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            <h3 className={styles.courseTitle}>{activeCourseData?.title}</h3>
            <div className={styles.modulesList}>
              {activeCourseData?.modules.map((module) => (
                <div key={module.id} className={styles.moduleCard}>
                  <div className={styles.moduleHeader}>
                    <span className={styles.moduleNumber}>Modulo {module.id}</span>
                    <h4 className={styles.moduleTitle}>{module.title}</h4>
                  </div>
                  <p className={styles.moduleDescription}>{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

