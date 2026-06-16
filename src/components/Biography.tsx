interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    quote: "Coincidence is the pseudonym of God.",
    paragraphs: [
      "I am a practicing psychologist, certified Gestalt therapist, and specialist in penitentiary and military psychology. I help people navigate difficult life periods, understand themselves, release the pain of the past, and find the path to inner wholeness.",
      "My goal is to be present when things are hard, to help you see what is holding you back, and to support you on the path toward a more conscious, fulfilling life.",
      "In my work I draw on Gestalt therapy approaches, as well as my experience in penitentiary and military psychology — which allows for a deeper understanding of trauma, boundaries, guilt, adaptation, and recovery.",
      "Psychotherapy is not magic. It is a path on which it is important not to walk alone. If you feel stuck, exhausted, or simply want to understand yourself better — start with one step. Book a consultation. That is already movement toward something better.",
    ],
    cta: "Book a Consultation",
  },
  de: {
    heading: "Uber mich",
    quote: "Zufall ist das Pseudonym Gottes.",
    paragraphs: [
      "Ich bin praktizierender Psychologe, zertifizierter Gestalttherapeut und Spezialist fur penitentiare und Militarpsychologie. Ich helfe Menschen, schwierige Lebensphasen zu durchlaufen, sich selbst besser zu verstehen, den Schmerz der Vergangenheit loszulassen und den Weg zur inneren Ganzheit zu finden.",
      "Mein Ziel ist es, da zu sein, wenn es schwer wird, zu helfen, das zu sehen, was das Vorankommen verhindert, und auf dem Weg zu einem bewussteren, erfullten Leben zu begleiten.",
      "In meiner Arbeit stutze ich mich auf die Gestalttherapie sowie auf Erfahrungen in der penitentiaren und Militarpsychologie — was ein tieferes Verstandnis von Trauma, Grenzen, Schuld, Anpassung und Erholung ermoglicht.",
      "Psychotherapie ist keine Magie. Es ist ein Weg, auf dem es wichtig ist, nicht allein zu gehen. Wenn Sie sich feststeckend, erschopft fuhlen oder sich einfach selbst besser verstehen mochten — beginnen Sie mit einem Schritt.",
    ],
    cta: "Beratung buchen",
  },
  ru: {
    heading: "Обо мне",
    quote: "Совпадение — это псевдоним Бога.",
    paragraphs: [
      "Я практикующий психолог, сертифицированный гештальт-терапевт и специалист в области пенитенциарной и военной психологии. Помогаю людям проходить сложные жизненные периоды, разбираться в себе, отпускать боль прошлого и находить путь к внутренней целостности.",
      "Моя задача — быть рядом, когда сложно, помочь увидеть то, что мешает двигаться дальше, и поддержать на пути к более осознанной, наполненной жизни.",
      "В работе опираюсь на подходы гештальт-терапии, а также опыт в пенитенциарной и военной психологии, что позволяет глубже понимать особенности травмы, границ, вины, адаптации и восстановления.",
      "Психотерапия — это не магия. Это путь, на котором важно не идти в одиночку. Если вы чувствуете, что застряли, устали, или просто хочется понять себя — начните с одного шага. Запишитесь на консультацию. Это уже движение к лучшему.",
    ],
    cta: "Записаться на консультацию",
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Photo */}
          <div className="relative animate-fade-in-up">
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/bc5abae9-f273-47a0-a038-4198fea19e4d/bucket/136ce7a7-8cb6-4dfc-9c74-4c2f120b886f.jpg"
                alt="Аким Круглов — психолог, гештальт-терапевт"
                className="w-full h-[600px] object-cover object-top"
              />
              {/* Gold accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold"></div>
            </div>
            {/* Quote card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-charcoal text-white p-6 max-w-xs shadow-2xl">
              <p className="text-gold text-2xl font-serif leading-none mb-3">"</p>
              <p className="text-white/90 text-sm font-light italic leading-relaxed">{t.quote}</p>
            </div>
          </div>

          {/* Right — Text */}
          <div className="pt-0 lg:pt-8 mt-10 lg:mt-0">
            <h2 className="text-charcoal mb-8 animate-fade-in-up">{t.heading}</h2>
            <div className="line-accent mb-10"></div>
            <div className="space-y-5">
              {t.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-charcoal/80 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 animate-fade-in-up">
              <a
                href="#contact"
                className="inline-block bg-charcoal text-white px-8 py-4 font-medium text-sm tracking-wide hover:bg-charcoal/80 transition-all duration-300"
              >
                {t.cta} →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
