# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke-test.spec.js >> Smoke Suite – Web Medienprojekt >> TC-W20: Erfolgreiche Kontaktanfrage mit gültigen Daten
- Location: tests\smoke-test.spec.js:98:3

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://kaffeehaus-riquet.netlify.app/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - list [ref=e3]:
      - listitem [ref=e4]:
        - link [ref=e5] [cursor=pointer]:
          - /url: "#home"
          - img "logo" [ref=e6]
      - listitem [ref=e7]:
        - link "Timeline" [ref=e8] [cursor=pointer]:
          - /url: "#timeline"
      - listitem [ref=e9]:
        - link "Podcast" [ref=e10] [cursor=pointer]:
          - /url: "#podcast"
      - listitem [ref=e11]:
        - link "Social Kanäle" [ref=e12] [cursor=pointer]:
          - /url: "#social"
      - listitem [ref=e13]:
        - link "Angebote" [ref=e14] [cursor=pointer]:
          - /url: "#angebote"
    - link "Reservieren" [ref=e15] [cursor=pointer]:
      - /url: "#reservation"
  - list [ref=e17]:
    - listitem [ref=e18]:
      - link "Home" [ref=e19] [cursor=pointer]:
        - /url: "#home"
    - listitem [ref=e20]:
      - link "Timeline" [ref=e21] [cursor=pointer]:
        - /url: "#timeline"
    - listitem [ref=e22]:
      - link "Podcast" [ref=e23] [cursor=pointer]:
        - /url: "#podcast"
    - listitem [ref=e24]:
      - link "Social Kanäle" [ref=e25] [cursor=pointer]:
        - /url: "#social"
    - listitem [ref=e26]:
      - link "Angebote" [ref=e27] [cursor=pointer]:
        - /url: "#angebote"
  - banner [ref=e28]:
    - generic [ref=e29]:
      - heading "Kaffeehaus" [level=1] [ref=e30]
      - heading "Riquet" [level=1] [ref=e31]
      - link [ref=e33] [cursor=pointer]:
        - /url: "#home"
        - img "Kaffeehaus Riquet Logo" [ref=e34]
      - paragraph [ref=e35]: Entdecken Sie 280 Jahre Geschichte
      - link "Die Geschichte erkunden" [ref=e36] [cursor=pointer]:
        - /url: "#timeline"
  - generic [ref=e37]:
    - generic [ref=e41]:
      - heading "Alles begann schon 1745" [level=2] [ref=e43]
      - paragraph [ref=e44]: Der Duft von Tee und Kakao liegt in der Luft, ein kleiner Handel schlägt seine ersten Wurzeln in Leipzig. Jahr für Jahr wächst daraus mehr als nur ein Geschäft – es entsteht eine Geschichte. Von fernen Waren bis zu den Elefanten am Riquet-Haus. Jede Zeit hinterlässt ihre Spuren. Kommen Sie mit auf eine Reise durch fast drei Jahrhunderte Genuss, Wandel und Vision.
    - generic [ref=e45]:
      - generic:
        - generic "1745 – Ein Duft liegt in der Luft": "1745"
        - generic "1791–1850 – Die Idee wächst weiter": "1850"
        - generic "1890–1905 – Der Moment des Aufbruchs": "1890"
        - generic "1908/09 – Ein Haus wird zum Symbol": "1909"
        - generic "1946/47 – Ein Bruch in der Geschichte": "1947"
        - generic "1994–1996 – Die Rückkehr des Lichts": "1996"
        - generic "Heute – Ein Ort zum Verweilen": Heute
      - generic [ref=e46]:
        - img "Periode 1745" [ref=e48]
        - generic [ref=e49]:
          - generic [ref=e50]: "1745"
          - heading "Ein Duft liegt in der Luft" [level=3] [ref=e51]
          - paragraph [ref=e52]: "Jean George Riquet öffnet in Leipzig die Türen zu einer neuen Welt: Tee, Kaffee, Gewürze aus der Ferne. Bald wird sein Laden zur ersten Adresse für feine Genüsse – selbst Goethe soll hier seiner Schokoladenlust nachgegeben haben."
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]: "1850"
          - heading "Die Idee wächst weiter" [level=3] [ref=e56]
          - paragraph [ref=e57]: Nach Riquets Tod lebt sein Traum weiter. Sein Sohn und Christian Friedrich Meyer erweitern das Sortiment und führen es in neue Zeiten. Tee trifft Kakao, Marmelade auf edle Tropfen und fernöstliche Waren. Leipzig entdeckt seinen ersten echten Feinkosttempel.
        - img "Periode 1850" [ref=e59]
      - generic [ref=e60]:
        - img "1890" [ref=e62]
        - generic [ref=e63]:
          - generic [ref=e64]: "1890"
          - heading "Der Moment des Aufbruchs" [level=3] [ref=e65]
          - paragraph [ref=e66]: Jetzt wird nicht nur gehandelt, sondern geschaffen. Riquet beginnt, eigenen Kakao zu produzieren – erst in der Stadt, dann vor den Toren Leipzigs. Die Firma wächst rasant, Maschinen laufen, Menschen arbeiten, Visionen nehmen Form an.
      - generic [ref=e67]:
        - generic [ref=e68]:
          - generic [ref=e69]: "1909"
          - heading "Ein Haus wird zum Symbol" [level=3] [ref=e70]
          - paragraph [ref=e71]: "Mit dem Riquet-Haus bekommt die Geschichte ein Gesicht: Jugendstil, Pagodendach, schimmernde Mosaike. Und über allem wachen die Elefanten am Eingang – stark, stolz, unvergesslich. Leipzig hat ein neues Wahrzeichen."
        - img "1909" [ref=e73]
      - generic [ref=e74]:
        - img "1947" [ref=e76]
        - generic [ref=e77]:
          - generic [ref=e78]: "1947"
          - heading "Ein Bruch in der Geschichte" [level=3] [ref=e79]
          - paragraph [ref=e80]: Der Krieg hinterlässt tiefe Spuren. Das Riquethaus wird enteignet. Die Schokoladenproduktion endet, Bonbons übernehmen ihren Platz. Ab Mitte der 1960er-Jahre entstehen in der ehemaligen Schokoladenfabrik die legendären Pfeffis. Doch die Elefanten bleiben – stumme Zeugen einer bewegten Zeit.
      - generic [ref=e81]:
        - generic [ref=e82]:
          - generic [ref=e83]: "1996"
          - heading "Die Rückkehr des Lichts" [level=3] [ref=e84]
          - paragraph [ref=e85]: Nach Jahren des Wartens wird das Haus behutsam restauriert. Der Turm erhebt sich wieder, Geschichte wird bewahrt. 1996 öffnet das Kaffeehaus Riquet und mit ihm kehren Genuss und Leben zurück.
        - img "1996" [ref=e87]
      - generic [ref=e88]:
        - generic [ref=e89]:
          - button "◄" [ref=e90] [cursor=pointer]
          - generic [ref=e91]:
            - generic [ref=e93]:
              - generic [ref=e94] [cursor=pointer]: Ihr Browser unterstützt Videos nicht.
              - button "▶" [ref=e95] [cursor=pointer]
            - generic:
              - generic:
                - generic: Ihr Browser unterstützt Videos nicht.
                - button "▶" [ref=e96] [cursor=pointer]
            - generic:
              - generic:
                - generic: Ihr Browser unterstützt Videos nicht.
                - button "▶" [ref=e97] [cursor=pointer]
          - button "►" [ref=e98] [cursor=pointer]
        - generic [ref=e99]:
          - generic [ref=e100]: Heute
          - heading "Ein Ort zum Verweilen" [level=3] [ref=e101]
          - paragraph [ref=e102]: Zwischen Jugendstil und Kaffeeduft treffen sich Vergangenheit und Gegenwart. Das Riquet-Haus ist kein Museum – sondern ein lebendiger Ort. Zum Genießen, Staunen und Ankommen.
  - generic [ref=e104]:
    - generic [ref=e105]:
      - heading "Geschichte zum Anhören" [level=2] [ref=e106]
      - paragraph [ref=e107]: Lehnen Sie sich zurück und hören Sie, wie Geschichte lebendig wird.
      - generic [ref=e108]: 🎙️
    - generic [ref=e109]:
      - generic [ref=e110]:
        - generic [ref=e111]:
          - 'heading "Podcast: Zwischen Elefanten und Espresso" [level=3] [ref=e112]'
          - paragraph [ref=e113]: Tauchen Sie in faszinierende Gespräche über die Welt des Kaffees und die Geschichte des Riquet-Hauses ein. Hören Sie inspirierende Stories von Menschen, die das Kaffeehaus über Jahrzehnte geprägt haben.
        - img "Podcast Rezipient" [ref=e116]
      - generic [ref=e117]:
        - heading "Episoden" [level=3] [ref=e118]
        - generic [ref=e119]:
          - generic [ref=e120]:
            - 'heading "Episode 1: Der Anfang eines Traums" [level=4] [ref=e121]'
            - paragraph [ref=e122]: Mit nur 16 Jahren kommt Jean George Riquet 1745 nach Leipzig. Als Glaubensflüchtling beginnt er hier ein neues Leben – mit Mut, Unternehmergeist und dem Handel exotischer Waren wie Kaffee und Kakao. Diese Episode erzählt von einem Neuanfang, der Geschichte schreibt.
          - generic [ref=e123]:
            - button "▶" [ref=e124] [cursor=pointer]
            - generic [ref=e125] [cursor=pointer]
            - generic [ref=e126]: 3:26
        - paragraph [ref=e128]: Über Generationen hinweg wächst das Handelshaus Riquet durch Verlässlichkeit, familiären Zusammenhalt und starke Netzwerke. Vertrauen wird zum zentralen Erfolgsfaktor – und sichert Kontinuität in bewegten Zeiten.
        - generic [ref=e129]:
          - button "▶" [ref=e130] [cursor=pointer]
          - generic [ref=e131] [cursor=pointer]
          - generic [ref=e132]: 3:54
      - generic:
        - generic:
          - 'heading "Episode 3: Die Fabrik und die Maschinen" [level=4]'
          - paragraph
          - generic: In Arbeit
        - generic:
          - button "▶" [disabled]
          - generic: 0:00
  - generic [ref=e134]:
    - generic [ref=e135]:
      - heading "@riquethaus" [level=2] [ref=e136]
      - paragraph [ref=e137]: Ein Ort mit Geschichte – jeden Tag neu erzählt.
      - paragraph [ref=e138]: "Geschichte endet nicht im Archiv. Sie lebt weiter – Tag für Tag, Tasse für Tasse. Auf unseren Social-Media-Kanälen zeigen wir aktuelle Eindrücke aus dem Riquethaus: besondere Momente, neue Kreationen, historische Details und das lebendige Treiben im Café."
      - paragraph [ref=e139]: Verpassen Sie keine neuen Kapitel – folgen Sie uns auf Instagram und Facebook.
      - generic [ref=e140]:
        - link "" [ref=e141] [cursor=pointer]:
          - /url: https://www.instagram.com/riquethaus/
        - link "" [ref=e143] [cursor=pointer]:
          - /url: https://www.facebook.com/pages/Riquet-Kaffehaus/164233723594776
    - generic [ref=e145]:
      - img "Instagram Post" [ref=e147]
      - generic [ref=e149]:
        - generic [ref=e150] [cursor=pointer]: Ihr Browser unterstützt Videos nicht.
        - button "▶"
      - img "Instagram Post" [ref=e152]
      - generic [ref=e154]:
        - generic [ref=e155] [cursor=pointer]: Ihr Browser unterstützt Videos nicht.
        - button "▶"
      - img "Instagram Post" [ref=e157]
  - generic [ref=e159]:
    - heading "Angebote für Sie" [level=2] [ref=e160]
    - paragraph [ref=e161]: Seit Generationen steht das Riquethaus für Genuss, Handwerkskunst und besondere Momente. Unsere Angebote verbinden traditionelle Rezepturen mit zeitgemäßem Café-Erlebnis – zum Teilen, Verweilen und Wiederkommen.
    - generic [ref=e162]: ☕
    - generic [ref=e163]:
      - generic [ref=e164]:
        - img "Ganze Torte" [ref=e166]
        - generic [ref=e167]:
          - heading "Unsere Tortenklassiker" [level=3] [ref=e168]
          - paragraph [ref=e169]: Sorgfältig gebacken, liebevoll verziert und nach traditionellen Rezepten zubereitet. Jede Torte erzählt von Handwerkskunst und Genusskultur, die im Riquethaus seit Jahrzehnten gepflegt wird.
        - img "Kaffee & Stück Torte" [ref=e171]
        - generic [ref=e172]:
          - heading "Perfekte Begleitung" [level=3] [ref=e173]
          - paragraph [ref=e174]: Ob kräftiger Espresso oder cremiger Cappuccino – unsere Kaffeespezialitäten harmonieren perfekt mit einem Stück Torte. Ein Moment zum Innehalten und Genießen.
      - generic [ref=e175]:
        - generic [ref=e176]:
          - heading "Ein Blick auf die Auswahl" [level=3] [ref=e177]
          - paragraph [ref=e178]: "Unsere Vitrine zeigt die Vielfalt des Hauses: feine Kuchen, süße Spezialitäten und saisonale Highlights. Lassen Sie sich inspirieren und entdecken Sie Ihren persönlichen Favoriten."
        - img "Vitrine" [ref=e180]
        - generic [ref=e181]:
          - heading "Gemeinsam genießen" [level=3] [ref=e182]
          - paragraph [ref=e183]: Das Riquethaus ist mehr als ein Café – es ist ein Treffpunkt. Für Gespräche, Begegnungen und gemeinsame Momente bei einer guten Tasse Kaffee.
        - img "Vier Tassen Kaffee" [ref=e185]
  - contentinfo [ref=e186]:
    - generic [ref=e187]:
      - generic [ref=e188]:
        - heading "Besuchen Sie uns im Kaffeehaus Riquet" [level=2] [ref=e189]
        - paragraph [ref=e190]: Das historische Kaffeehaus Riquet in Leipzig ist mehr als nur ein Café – es ist ein Zeitzeuge von 280 Jahren deutscher Geschichte. Mit seiner einzigartigen Jugendstil-Architektur und den legendären Elefanten am Eingang, zieht es Besucher aus aller Welt an.
        - paragraph [ref=e191]: Hier verbinden sich Vergangenheit und Gegenwart. Genießen Sie authentischen Kaffee und feine Spezialitäten in einer Atmosphäre, die Geschichte zum Leben erweckt.
        - heading "Öffnungszeiten:" [level=3] [ref=e192]
        - list [ref=e193]:
          - listitem [ref=e194]: "Täglich: 08:00 – 20:00 Uhr"
        - heading "Kontakt:" [level=3] [ref=e195]
        - list [ref=e196]:
          - listitem [ref=e197]: "Adresse: Schuhmachergäßchen 1, 04109 Leipzig"
          - listitem [ref=e198]: "Telefon: +49 (341) 123-456"
          - listitem [ref=e199]: "E-Mail: info@riquethaus.de"
        - link "Tisch Reservieren" [ref=e200] [cursor=pointer]:
          - /url: "#reservation"
      - generic [ref=e201]:
        - img "Riquethaus Außenseite" [ref=e203]
        - img "Riquethaus Innenraum" [ref=e205]
        - img "Riquethaus Innen Details" [ref=e207]
        - img "Riquethaus Eingang" [ref=e209]
    - generic [ref=e210]:
      - list [ref=e212]:
        - listitem [ref=e213]:
          - link "Timeline" [ref=e214] [cursor=pointer]:
            - /url: "#timeline"
        - listitem [ref=e215]:
          - link "Podcast" [ref=e216] [cursor=pointer]:
            - /url: "#podcast"
        - listitem [ref=e217]:
          - link "Social" [ref=e218] [cursor=pointer]:
            - /url: "#social"
        - listitem [ref=e219]:
          - link "Angebot" [ref=e220] [cursor=pointer]:
            - /url: "#specialGalleryScroll"
        - listitem [ref=e221]:
          - link "Impressum" [ref=e222] [cursor=pointer]:
            - /url: https://riquethaus.de/kontakt/
        - listitem [ref=e223]:
          - link "Datenschutz" [ref=e224] [cursor=pointer]:
            - /url: https://riquethaus.de/datenschutz/
      - generic [ref=e225]:
        - heading "Kontaktieren Sie uns" [level=4] [ref=e226]
        - generic [ref=e227]:
          - textbox "Ihr Name" [ref=e228]
          - textbox "Ihre E-Mail" [ref=e229]
          - textbox "Ihre Nachricht" [ref=e230]
          - button "Nachricht absenden" [ref=e231] [cursor=pointer]
      - generic [ref=e233]:
        - heading "Folgen Sie uns" [level=4] [ref=e234]
        - generic [ref=e235]:
          - link "" [ref=e236] [cursor=pointer]:
            - /url: https://www.instagram.com/riquethaus/
          - link "" [ref=e238] [cursor=pointer]:
            - /url: https://www.facebook.com/pages/Riquet-Kaffeehaus/164233723594776
    - paragraph [ref=e241]: © 2026 Kaffeehaus Riquet. Entwickelt von Elena Lehmann. Alle Rechte vorbehalten.
```

# Test source

```ts
  1  | class HomePage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.logoLink = page.locator('#nav-home-link');
  5  |     this.timelineLink = page.locator('#nav-timeline-link');
  6  |     this.podcastLink = page.locator('#nav-podcast-link');
  7  |     this.socialLink = page.locator('#nav-social-link');
  8  |     this.angeboteLink = page.locator('#nav-angebote-link');
  9  |     this.reserveButton = page.locator('#nav-reserve-btn');
  10 |     this.historyCtaButton = page.locator('#hero-cta-btn');
  11 |     this.footerQuickLinks = page.locator('footer a');
  12 |   }
  13 | 
  14 |   async goto() {
> 15 |     await this.page.goto('/');
     |                     ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  16 |   }
  17 | 
  18 |   async clickTimeline() {
  19 |     await this.timelineLink.click();
  20 |   }
  21 | 
  22 |   async clickPodcast() {
  23 |     await this.podcastLink.click();
  24 |   }
  25 | 
  26 |   async clickSocial() {
  27 |     await this.socialLink.click();
  28 |   }
  29 | 
  30 |   async clickAngebote() {
  31 |     await this.angeboteLink.click();
  32 |   }
  33 | 
  34 |   async clickReserve() {
  35 |     await this.reserveButton.click();
  36 |   }
  37 | 
  38 |   async clickHistoryCta() {
  39 |     await this.historyCtaButton.click();
  40 |   }
  41 | 
  42 |   async clickFooterQuickLink(linkText) {
  43 |     const link = this.footerQuickLinks.filter({ hasText: linkText }).first();
  44 |     await link.click();
  45 |   }
  46 | 
  47 |   async goHome() {
  48 |     await this.logoLink.click();
  49 |   }
  50 | 
  51 |   async isHeaderVisible() {
  52 |     return await this.page.locator('header').isVisible();
  53 |   }
  54 | 
  55 |   async isFooterVisible() {
  56 |     return await this.page.locator('footer').isVisible();
  57 |   }
  58 | 
  59 |   async getNavLinks() {
  60 |     return await this.page.locator('nav a').allTextContents();
  61 |   }
  62 | }
  63 | 
  64 | module.exports = { HomePage };
  65 | 
```