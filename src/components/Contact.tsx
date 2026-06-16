import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Contact",
    subheading: "Book a Consultation",
    email: "WhatsApp / Telegram",
    phone: "Phone",
    message: "Your message",
    send: "Send Message",
    location: "Address",
    name: "Your Name",
    successMessage: "Message sent! I will get back to you shortly.",
    locationValue: "Rostov-on-Don, 1st Konnoy Armii St., 15A, 3rd floor, office 304",
    phoneValue: "8 (906) 181-00-42",
  },
  de: {
    heading: "Kontakt",
    subheading: "Beratung buchen",
    email: "WhatsApp / Telegram",
    phone: "Telefon",
    message: "Ihre Nachricht",
    send: "Nachricht senden",
    location: "Adresse",
    name: "Ihr Name",
    successMessage: "Nachricht gesendet! Ich melde mich in Kurze.",
    locationValue: "Rostow am Don, 1. Konnoy-Armii-Str., 15A, 3. OG, Buro 304",
    phoneValue: "8 (906) 181-00-42",
  },
  ru: {
    heading: "Контакты",
    subheading: "Запись на консультацию",
    email: "WhatsApp / Telegram",
    phone: "Телефон",
    message: "Ваше сообщение",
    send: "Отправить",
    location: "Адрес",
    name: "Ваше имя",
    successMessage: "Сообщение отправлено! Свяжусь с вами в ближайшее время.",
    locationValue: "г. Ростов-на-Дону, ул. 1-й Конной Армии, 15А, 3 этаж, каб. 304",
    phoneValue: "8 (906) 181-00-42",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:akimkruglov@example.com?subject=${encodeURIComponent(`Запись на консультацию от ${formData.name}`)}&body=${encodeURIComponent(`Имя: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.email}</small>
              <p className="text-charcoal">8 (906) 181-00-42</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.phone}</small>
              <p className="text-charcoal">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            {submitted && (
              <div className="p-4 bg-gold/10 border border-gold/20 text-charcoal rounded text-sm">
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-warm-white py-3 font-medium hover:bg-charcoal/90 transition-colors duration-300"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}