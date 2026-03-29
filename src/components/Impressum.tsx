import { motion } from 'framer-motion';

export function Impressum() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 min-h-screen" style={{ background: '#0A1628' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Rechtliches
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
            Impressum
          </h1>

          <div className="space-y-8 text-sm md:text-base font-light leading-relaxed" style={{ color: 'rgba(232,237,245,0.7)' }}>
            <div>
              <h2 className="text-lg font-medium text-white mb-2">Angaben gemäß § 5 TMG / Offenlegungspflicht laut § 25 Mediengesetz:</h2>
              <p>
                <strong>GastroWeb Solutions</strong><br />
                Vertreten durch: Dogukan Sentürk & Beqir Morina<br />
                Biochemiestraße 46<br />
                6250 Kundl, Tirol<br />
                Österreich
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-white mb-2">Kontakt</h2>
              <p>
                E-Mail: gastrowebsolutions@gmail.com<br />
                Telefon: Auf Anfrage
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-white mb-2">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-white mb-2">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-white mb-2">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
