'use client'

import Header from "@/components/header"
import Hero from "@/components/hero"
import CourseOverview from "@/components/course-overview"
import CourseModules from "@/components/course-modules"
import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { useState } from "react"

export default function Home() {

  const [activeCourse, setActiveCourse] = useState("html")

  return (
    <main>
      <Header />
      <Hero />
      <CourseOverview setActiveCourse={setActiveCourse} />
      <CourseModules activeCourse={activeCourse} setActiveCourse={setActiveCourse} />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}

