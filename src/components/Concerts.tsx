interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "How I Work",
    whyHeading: "Why People Come to Me",
    cta: "Book a Consultation",
    reasons: [
      { title: "No templates", desc: "Every person is unique — I find an individual pace and path for each." },
      { title: "Non-judgmental", desc: "You can speak about the most important and difficult things without fear of judgment." },
      { title: "Deep trauma understanding", desc: "Experience with complex life stories allows exploring the hardest topics." },
      { title: "Safety and support", desc: "I create a space where you can be yourself and change is possible." },
      { title: "Professionalism", desc: "Specialist education, ongoing training, supervision, and respect for boundaries." },
    ],
  },
  de: {
    heading: "Wie ich arbeite",
    whyHeading: "Warum Menschen zu mir kommen",
    cta: "Beratung buchen",
    reasons: [
      { title: "Keine Schablonen", desc: "Jeder Mensch ist einzigartig — ich finde fur jeden einen individuellen Weg." },
      { title: "Keine Bewertung", desc: "Sie konnen uber das Wichtigste und Schwierigste sprechen, ohne Angst vor Verurteilung." },
      { title: "Tiefes Traumaverstandnis", desc: "Erfahrung mit schweren Lebensgeschichten ermoglicht es, in die schwierigsten Themen zu gehen." },
      { title: "Sicherheit und Halt", desc: "Ich schaffe einen Raum, in dem Sie Sie selbst sein durfen und Veranderung moglich ist." },
      { title: "Professionalitat", desc: "Fachliche Ausbildung, standige Weiterbildung, Supervision und Respekt vor Grenzen." },
    ],
  },
  ru: {
    heading: "Форматы работы",
    whyHeading: "Почему ко мне приходят",
    cta: "Записаться на консультацию",
    reasons: [
      { title: "Никаких шаблонов", desc: "Каждый человек уникален — подбираю индивидуальный путь и темп работы." },
      { title: "Безоценочность", desc: "Можно говорить о самом важном и трудном, не опасаясь быть осуждённым." },
      { title: "Глубокое понимание травмы", desc: "Опыт работы с тяжёлыми историями помогает идти в самые сложные темы." },
      { title: "Опора и безопасность", desc: "Создаю пространство, где можно быть собой и где перемены возможны." },
      { title: "Профессионализм", desc: "Профильное образование, постоянное обучение, супервизии и уважение к границам." },
    ],
  },
}

const services = {
  en: [
    { icon: "🧠", date: "Individual", time: "50 min", title: "Individual Consultations", venue: "Anxiety, stress, chronic tension, burnout, self-esteem, loneliness", location: "In-person / Online" },
    { icon: "💑", date: "Family", time: "80 min", title: "Family Themes", venue: "Conflicts, divorce, misunderstanding in a couple, parenting difficulties", location: "In-person / Online" },
    { icon: "🎒", date: "Child & Teen", time: "50 min", title: "Child and Adolescent Psychology", venue: "Emotional swings, aggression, withdrawal, school and socialisation difficulties", location: "In-person" },
    { icon: "🪖", date: "Military", time: "50 min", title: "Work with Military Personnel", venue: "Adaptation after service, PTSD, relationship difficulties, return to civilian life", location: "In-person / Online" },
    { icon: "🔓", date: "Reintegration", time: "50 min", title: "Support for People with Incarceration Experience", venue: "Resocialisation, return to society, guilt, trauma, aggression", location: "In-person" },
  ],
  de: [
    { icon: "🧠", date: "Einzel", time: "50 Min.", title: "Einzelberatungen", venue: "Angst, Stress, chronische Anspannung, Burnout, Selbstwert, Einsamkeit", location: "Prasenz / Online" },
    { icon: "💑", date: "Familie", time: "80 Min.", title: "Familienthemen", venue: "Konflikte, Scheidung, Missverstandnisse, Erziehungsschwierigkeiten", location: "Prasenz / Online" },
    { icon: "🎒", date: "Kind & Jugend", time: "50 Min.", title: "Kinder- und Jugendpsychologie", venue: "Emotionale Schwankungen, Aggression, Ruckzug, Schulschwierigkeiten", location: "Prasenz" },
    { icon: "🪖", date: "Militar", time: "50 Min.", title: "Arbeit mit Militarangehorigen", venue: "Anpassung, PTBS, Beziehungsprobleme, Ruckkehr ins Zivilleben", location: "Prasenz / Online" },
    { icon: "🔓", date: "Reintegration", time: "50 Min.", title: "Begleitung bei Hafterfahrung", venue: "Resozialisierung, Schuld, Trauma, Aggression", location: "Prasenz" },
  ],
  ru: [
    { icon: "🧠", date: "Индивидуально", time: "50 мин", title: "Индивидуальные консультации", venue: "Тревога, стресс, хроническое напряжение, выгорание, самооценка, одиночество", location: "Очно / Онлайн" },
    { icon: "💑", date: "Семья", time: "80 мин", title: "Семейные темы", venue: "Конфликты, развод, непонимание в паре, трудности в воспитании", location: "Очно / Онлайн" },
    { icon: "🎒", date: "Дети и подростки", time: "50 мин", title: "Детская и подростковая психология", venue: "Эмоциональные перепады, агрессия, замкнутость, сложности в школе", location: "Очно" },
    { icon: "🪖", date: "Военные", time: "50 мин", title: "Работа с военнослужащими", venue: "Адаптация после службы, ПТСР, трудности в отношениях, возвращение к гражданской жизни", location: "Очно / Онлайн" },
    { icon: "🔓", date: "Ресоциализация", time: "50 мин", title: "Помощь людям с опытом заключения", venue: "Ресоциализация, возвращение в общество, чувство вины, травмы, агрессия", location: "Очно" },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const serviceList = services[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent mb-16"></div>

          <div className="space-y-0">
            {serviceList.map((item, idx) => (
              <div
                key={idx}
                className="group flex gap-6 items-start py-8 border-b border-taupe/20 hover:bg-warm-white transition-colors duration-300 px-4 -mx-4 cursor-default"
              >
                <span className="text-3xl mt-1 flex-shrink-0">{item.icon}</span>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                  <div>
                    <p className="font-serif text-charcoal font-medium">{item.date}</p>
                    <small className="text-gold font-medium">{item.time}</small>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{item.venue}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="text-xs text-taupe border border-taupe/40 px-3 py-1">{item.location}</span>
                    <a href="#contact" className="text-gold hover:text-gold/70 transition-colors text-sm font-medium">
                      Записаться →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why me */}
        <div className="bg-charcoal text-white p-10 md:p-14">
          <h2 className="text-white mb-4">{t.whyHeading}</h2>
          <div className="h-0.5 w-12 bg-gold mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.reasons.map((r, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-0.5 bg-gold flex-shrink-0 self-stretch"></div>
                <div>
                  <p className="text-gold font-medium mb-2">{r.title}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block bg-gold text-charcoal px-8 py-4 font-medium text-sm tracking-wide hover:bg-gold/90 transition-all duration-300"
            >
              {t.cta} →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
