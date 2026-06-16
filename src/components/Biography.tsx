interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    paragraphs: [
      "I am a practicing psychologist, certified Gestalt therapist, and specialist in penitentiary and military psychology. I help people navigate difficult life periods, understand themselves, release the pain of the past, and find the path to inner wholeness.",
      "My goal is to be present when things are hard, to help you see what is holding you back, and to support you on the path toward a more conscious, fulfilling life.",
      "In my work I draw on Gestalt therapy approaches, as well as my experience in penitentiary and military psychology — which allows for a deeper understanding of trauma, boundaries, guilt, adaptation, and recovery.",
      "Psychotherapy is not magic. It is a path on which it is important not to walk alone. If you feel stuck, exhausted, or simply want to understand yourself better — start with one step. Book a consultation. That is already movement toward something better.",
    ],
  },
  de: {
    heading: "Uber mich",
    paragraphs: [
      "Ich bin praktizierender Psychologe, zertifizierter Gestalttherapeut und Spezialist fur penitentiare und Militarpsychologie. Ich helfe Menschen, schwierige Lebensphasen zu durchlaufen, sich selbst besser zu verstehen, den Schmerz der Vergangenheit loszulassen und den Weg zur inneren Ganzheit zu finden.",
      "Mein Ziel ist es, da zu sein, wenn es schwer wird, zu helfen, das zu sehen, was das Vorankommen verhindert, und auf dem Weg zu einem bewussteren, erfullten Leben zu begleiten.",
      "In meiner Arbeit stutze ich mich auf die Gestalttherapie sowie auf Erfahrungen in der penitentiaren und Militarpsychologie — was ein tieferes Verstandnis von Trauma, Grenzen, Schuld, Anpassung und Erholung ermoglicht.",
      "Psychotherapie ist keine Magie. Es ist ein Weg, auf dem es wichtig ist, nicht allein zu gehen. Wenn Sie sich feststeckend, erschopft fuhlen oder sich einfach selbst besser verstehen mochten — beginnen Sie mit einem Schritt.",
    ],
  },
  ru: {
    heading: "Обо мне",
    paragraphs: [
      "Я практикующий психолог, сертифицированный гештальт-терапевт и специалист в области пенитенциарной и военной психологии. Помогаю людям проходить сложные жизненные периоды, разбираться в себе, отпускать боль прошлого и находить путь к внутренней целостности.",
      "Моя задача — быть рядом, когда сложно, помочь увидеть то, что мешает двигаться дальше, и поддержать на пути к более осознанной, наполненной жизни.",
      "В работе опираюсь на подходы гештальт-терапии, а также опыт в пенитенциарной и военной психологии, что позволяет глубже понимать особенности травмы, границ, вины, адаптации и восстановления.",
      "Психотерапия — это не магия. Это путь, на котором важно не идти в одиночку. Если вы чувствуете, что застряли, устали, или просто хочется понять себя — начните с одного шага. Запишитесь на консультацию. Это уже движение к лучшему.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}