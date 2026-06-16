interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "Akim Kruglov",
    subtitle: "Psychologist · Gestalt Therapist · Penitentiary Psychology",
    description: "\"Coincidence is the pseudonym of God.\" I help people navigate difficult life periods and find the path to inner wholeness.",
    cta: "Book a Consultation",
    ctaSecondary: "Learn More",
  },
  de: {
    title: "Akim Kruglov",
    subtitle: "Psychologe · Gestalttherapeut · Penitentiare Psychologie",
    description: '\u201eZufall ist das Pseudonym Gottes.\u201c Ich helfe Menschen, schwierige Lebensphasen zu durchlaufen und den Weg zur inneren Ganzheit zu finden.',
    cta: "Beratung buchen",
    ctaSecondary: "Mehr erfahren",
  },
  ru: {
    title: "Аким Круглов",
    subtitle: "Психолог · Гештальт-терапевт · Пенитенциарная психология",
    description: "«Совпадение — это псевдоним Бога.» Помогаю проходить сложные жизненные периоды и находить путь к внутренней целостности.",
    cta: "Записаться на консультацию",
    ctaSecondary: "Узнать больше",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/bc5abae9-f273-47a0-a038-4198fea19e4d/bucket/136ce7a7-8cb6-4dfc-9c74-4c2f120b886f.jpg"
          alt="Аким Круглов — психолог"
          className="w-full h-full object-cover object-top"
        />
        {/* Rich gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
      </div>

      {/* Logo top-right watermark */}
      <div className="absolute top-24 right-8 z-10 opacity-20 hidden lg:block">
        <img
          src="https://cdn.poehali.dev/projects/bc5abae9-f273-47a0-a038-4198fea19e4d/bucket/c2977b3e-ff11-4385-9b7b-bccfecf037ae.jpg"
          alt="Логотип"
          className="w-40 h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in-up">
            Insight · Humor · Transformation
          </p>

          <h1 className="text-white mb-4 animate-fade-in-up animation-delay-100">{t.title}</h1>
          <h3 className="text-white/70 font-light mb-8 animate-fade-in-up animation-delay-200 leading-relaxed">{t.subtitle}</h3>

          <div className="line-accent mb-8 animate-fade-in-up animation-delay-200"></div>

          <p className="text-white/85 text-lg font-light max-w-xl mb-12 animate-fade-in-up animation-delay-300 leading-relaxed italic">
            {t.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="inline-block bg-gold text-charcoal px-8 py-4 font-medium text-sm tracking-wide hover:bg-gold/90 transition-all duration-300"
            >
              {t.cta}
            </a>
            <a
              href="#biography"
              className="inline-block border border-white/50 text-white px-8 py-4 font-medium text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
