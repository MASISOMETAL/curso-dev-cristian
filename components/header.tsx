"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import styles from "./header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Curso Desarrollo Web</Link>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li>
              <a href="#courses">Cursos</a>
            </li>
            <li>
              <a href="#modules">Modulos</a>
            </li>
            <li>
              <a href="#about">Acerca de mi</a>
            </li>
            <li>
              <a href="#contact">Contactame</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

