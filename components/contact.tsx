"use client"

import type React from "react"

import { useState } from "react"
import styles from "./contact.module.css"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitError(false)

    try {

      const response = await fetch("")

      setIsSubmitting(false)
      setSubmitMessage("¡Gracias por tu mensaje! Te responderé pronto.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitMessage("¡Ha ocurrido un error con el mensaje! intentalo mas tarde")
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Ponte en contacto</h2>
          <p className={styles.description}>¿Tienes preguntas sobre los cursos? ¿Quieres saber más? ¡Envíame un mensaje!</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoValue}>cristianmasisofarias@gmail.com</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Telefono</h3>
              <p className={styles.infoValue}>+549 115018 2234</p>
            </div>

            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Redes sociales</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  Twitter
                </a>
                <a href="#" className={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="#" className={styles.socialLink}>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <p className={`${styles.submitMessage} ${submitError ? styles.error : styles.success}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

