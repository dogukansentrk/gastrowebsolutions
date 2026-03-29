import { motion } from 'framer-motion';

export function Datenschutz() {
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
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-sm md:text-base font-light leading-relaxed" style={{ color: 'rgba(232,237,245,0.7)' }}>
            <div>
              <h2 className="text-xl font-medium text-white mb-2">1. Datenschutz auf einen Blick</h2>
              <p className="mb-4">
                <strong>Allgemeine Hinweise</strong><br />
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">2. Hosting (GitHub Pages)</h2>
              <p>
                Wir hosten unsere Website bei GitHub Pages. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA (nachfolgend GitHub).<br /><br />
                Wenn Sie unsere Website besuchen, erfasst GitHub Ihre IP-Adresse und weitere technische Informationen, um die Bereitstellung der Website zu ermöglichen und die IT-Sicherheit zu gewährleisten. Die Verwendung von GitHub Pages erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-lg font-medium text-white mt-6 mb-2">Cookies</h3>
              <p className="mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. <br /><br />
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind (technisch notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. <br /><br />
                Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde (Cookie-Consent-Banner), erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
              </p>

              <h3 className="text-lg font-medium text-white mt-6 mb-2">Analyse-Tools und Werbung (Marketing Cookies)</h3>
              <p className="mb-4">
                Sofern Sie im Cookie-Banner eingewilligt haben, verwenden wir auf dieser Website Tools zur Webanalyse (z.B. Google Analytics) und Marketing-Pixel (z.B. Meta Pixel). Diese Technologien ermöglichen es uns, das Nutzerverhalten auf unserer Website zu analysieren, den Erfolg unserer Werbekampagnen zu messen und zielgerichtete Werbung auszuspielen.<br /><br />
                Durch diese Tools können Daten wie Ihre IP-Adresse, das Nutzerverhalten, die Verweildauer und Interaktionen erfasst und an die Server der jeweiligen Anbieter (die sich auch in den USA befinden können) übertragen werden. Die Nutzung dieser Analyse- und Marketing-Tools erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit für die Zukunft widerrufen, indem Sie die Cookie-Einstellungen in Ihrem Browser anpassen oder die temporären Websitedaten löschen.
              </p>

              <h3 className="text-lg font-medium text-white mt-6 mb-2">Kontaktformular (Web3Forms)</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.<br /><br />
                Für die Verarbeitung nutzen wir den Dienstleister <strong>Web3Forms</strong>. Web3Forms verarbeitet die Formulardaten lediglich, um sie an uns als E-Mail weiterzuleiten, und speichert die Daten nicht dauerhaft auf eigenen Servern ab. Weitere Informationen zum Datenschutz von Web3Forms finden Sie in deren Datenschutzerklärung unter https://web3forms.com/privacy.<br /><br />
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-white mb-2">4. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Zudem haben Sie das Recht, eine erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns (gastrowebsolutions@gmail.com) wenden.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
