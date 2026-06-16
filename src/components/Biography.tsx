interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    paragraphs: [
      "I am a practicing psychologist and certified Gestalt therapist. In my work I help people understand themselves, cope with anxiety, stress, and difficult life situations, and rebuild a warm and trusting relationship with themselves.",
      "Gestalt therapy is a gentle yet deep approach focused on awareness of feelings, needs, and the way we contact the world around us. Together we explore what is happening in your life here and now, and find new, more supportive ways of living.",
      "I work with anxiety and burnout, relationship and self-worth struggles, loss and life crises, as well as the search for meaning and one's own path. Every session is a safe, judgment-free space where you can be yourself.",
      "I believe that everyone already has the resources for change — sometimes they just need to be noticed and supported. My job is to be a caring companion on that journey.",
    ],
  },
  de: {
    heading: "Uber mich",
    paragraphs: [
      "Ich bin praktizierende Psychologin und zertifizierte Gestalttherapeutin. In meiner Arbeit helfe ich Menschen, sich selbst zu verstehen, mit Angst, Stress und schwierigen Lebenssituationen umzugehen und eine warme, vertrauensvolle Beziehung zu sich selbst aufzubauen.",
      "Die Gestalttherapie ist ein sanfter und zugleich tiefer Ansatz, der auf das Bewusstsein fur Gefuhle, Bedurfnisse und den Kontakt zur Welt ausgerichtet ist. Gemeinsam erkunden wir, was in Ihrem Leben hier und jetzt geschieht, und finden neue, unterstutzende Wege.",
      "Ich arbeite mit Angst und Burnout, Beziehungsthemen und Selbstwert, Verlust und Lebenskrisen sowie der Suche nach Sinn und dem eigenen Weg. Jede Sitzung ist ein sicherer Raum ohne Bewertung, in dem Sie Sie selbst sein durfen.",
      "Ich bin uberzeugt, dass jeder Mensch bereits die Ressourcen fur Veranderung in sich tragt - manchmal mussen sie nur bemerkt und gestutzt werden. Meine Aufgabe ist es, ein achtsamer Begleiter auf diesem Weg zu sein.",
    ],
  },
  ru: {
    heading: "Обо мне",
    paragraphs: [
      "Я практикующий психолог и сертифицированный гештальт-терапевт. В своей работе я помогаю людям лучше понимать себя, справляться с тревогой, стрессом и сложными жизненными ситуациями, выстраивать тёплые и доверительные отношения с собой.",
      "Гештальт-терапия — это бережный и одновременно глубокий подход, в центре которого осознавание чувств, потребностей и того, как мы контактируем с окружающим миром. Вместе мы исследуем, что происходит в вашей жизни здесь и сейчас, и находим новые, более поддерживающие способы жить.",
      "Я работаю с тревогой и выгоранием, трудностями в отношениях и самооценкой, переживанием потерь и жизненными кризисами, а также с поиском смысла и собственного пути. Каждая встреча — это безопасное пространство без оценок, где можно быть собой.",
      "Я верю, что у каждого человека уже есть ресурсы для изменений — иногда их просто важно заметить и поддержать. Моя задача — быть бережным спутником на этом пути.",
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