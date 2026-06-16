interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "How I Work",
    learnMore: "Learn More",
  },
  de: {
    heading: "Wie ich arbeite",
    learnMore: "Mehr erfahren",
  },
  ru: {
    heading: "Форматы работы",
    learnMore: "Подробнее",
  },
}

const services = {
  en: [
    {
      date: "Individual",
      time: "50 min",
      title: "Individual Consultations",
      venue: "Anxiety, stress, chronic tension, burnout, self-esteem, loneliness",
      location: "In-person / Online",
    },
    {
      date: "Family",
      time: "80 min",
      title: "Family Themes",
      venue: "Conflicts, divorce, misunderstanding in a couple, parenting difficulties",
      location: "In-person / Online",
    },
    {
      date: "Child & Teen",
      time: "50 min",
      title: "Child and Adolescent Psychology",
      venue: "Emotional swings, aggression, withdrawal, difficulties at school and socialisation",
      location: "In-person",
    },
    {
      date: "Military",
      time: "50 min",
      title: "Work with Military Personnel",
      venue: "Adaptation after service, PTSD, relationship difficulties, return to civilian life",
      location: "In-person / Online",
    },
    {
      date: "Reintegration",
      time: "50 min",
      title: "Support for People with Incarceration Experience",
      venue: "Resocialisation, return to society, guilt, trauma, aggression",
      location: "In-person",
    },
  ],
  de: [
    {
      date: "Einzel",
      time: "50 Min.",
      title: "Einzelberatungen",
      venue: "Angst, Stress, chronische Anspannung, Burnout, Selbstwert, Einsamkeit",
      location: "Prasenz / Online",
    },
    {
      date: "Familie",
      time: "80 Min.",
      title: "Familienthemen",
      venue: "Konflikte, Scheidung, Missverstandnisse in der Partnerschaft, Erziehungsschwierigkeiten",
      location: "Prasenz / Online",
    },
    {
      date: "Kind & Jugend",
      time: "50 Min.",
      title: "Kinder- und Jugendpsychologie",
      venue: "Emotionale Schwankungen, Aggression, Ruckzug, Schul- und Sozialisationsschwierigkeiten",
      location: "Prasenz",
    },
    {
      date: "Militar",
      time: "50 Min.",
      title: "Arbeit mit Militarangehorigen",
      venue: "Anpassung nach dem Dienst, PTBS, Beziehungsprobleme, Ruckkehr ins Zivilleben",
      location: "Prasenz / Online",
    },
    {
      date: "Reintegration",
      time: "50 Min.",
      title: "Begleitung bei Hafterfahrung",
      venue: "Resozialisierung, Ruckkehr in die Gesellschaft, Schuld, Trauma, Aggression",
      location: "Prasenz",
    },
  ],
  ru: [
    {
      date: "Индивидуально",
      time: "50 мин",
      title: "Индивидуальные консультации",
      venue: "Тревога, стресс, хроническое напряжение, выгорание, самооценка, одиночество",
      location: "Очно / Онлайн",
    },
    {
      date: "Семья",
      time: "80 мин",
      title: "Семейные темы",
      venue: "Конфликты, развод, непонимание в паре, трудности в воспитании",
      location: "Очно / Онлайн",
    },
    {
      date: "Дети и подростки",
      time: "50 мин",
      title: "Детская и подростковая психология",
      venue: "Эмоциональные перепады, агрессия, замкнутость, сложности в школе и социализации",
      location: "Очно",
    },
    {
      date: "Военные",
      time: "50 мин",
      title: "Работа с военнослужащими",
      venue: "Адаптация после службы, ПТСР, трудности в отношениях, возвращение к гражданской жизни",
      location: "Очно / Онлайн",
    },
    {
      date: "Ресоциализация",
      time: "50 мин",
      title: "Помощь людям с опытом заключения",
      venue: "Ресоциализация, возвращение в общество, чувство вины, травмы, агрессия",
      location: "Очно",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const serviceList = services[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {serviceList.map((item, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{item.date}</h3>
                  <small className="text-taupe">{item.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{item.title}</h3>
                  <p className="text-charcoal/70 mb-1">{item.venue}</p>
                  <small className="text-taupe">{item.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <a
                    href="#contact"
                    className="text-gold hover:text-gold/80 transition-colors text-sm font-medium"
                  >
                    {t.learnMore} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
