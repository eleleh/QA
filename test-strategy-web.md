Teststrategie – Kaffeehaus Riquet (Medienprojekt-Webseite)
1. Projekt-Übersicht
Die getestete Anwendung ist eine responsive Medien-Webseite mit:
•	Header und Navigation zu einzelnen Sections.
•	Animierten Logos.
•	Reservierungs-Call-to-Action mit Formular-Modal.
•	Übermittlung des Reservierungsformulars per Formspree an eine E-Mail-Adresse.
•	Interaktiver Timeline zur Darstellung verschiedener Geschichtsperioden.
•	Videoskarussell innerhalb der letzten Timeline-Periode.
•	Podcast-Section mit Audio-Playern, Play-/Pause-Button und sichtbarer Fortschrittsanzeige (Balken/Time).
•	Social-Media-Section mit externen Links sowie Videos und Bildern in einem horizontalen Scroll-Container (nur per Maus imeplementiert)
•	Statischer „Angebote für Sie“-Section mit Bildern 
•	Footer mit Quick Links, einem zweiten Reservierungs-Button und Kontaktformular.
•	Responsive Darstellung für Desktop, Tablet und Smartphone.
•	Accordion-Darstellung der Geschichte auf kleineren Bildschirmgrößen.
2. Testziel
Ziel ist es, zu überprüfen, dass:
•	Nutzer zuverlässig durch die Webseite navigieren können.
•	Reservierungs- und Kontaktanfragen korrekt validiert und an Formspree übermittelt werden.
•	Interaktive Inhalte wie Timeline, Videoskarussell und Audio-Player korrekt reagieren.
•	Medieninhalte vollständig geladen und nutzbar sind.
•	Die Webseite auf Desktop-, Tablet- und Smartphone-Ansichten funktional bleibt.
•	Kritische Nutzerpfade stabil und reproduzierbar funktionieren.
3. Scope
In Scope
•	Seitenaufruf und grundlegendes Rendering.
•	Header-Navigation, Logo-Link und Footer-Quick-Links.
•	Reservierungsbutton im Header und Footer.
•	Reservierungsmodal und Formularvalidierung.
•	Formspree-Übermittlung des Reservierungsformulars.
•	Kontaktformular im Footer und Formspree-Übermittlung.
•	Timeline-Navigation und aktive Perioden.
•	Videoskarussell und Vor-/Zurück-Navigation.
•	Podcast-Player und Play-Button.
•	Social-Media-Links und eingebettete Inhalte.
•	Laden von Bildern.
•	Responsive Layouts.
•	Hamburger-Menü und Timeline-Accordion auf kleinen Viewports.
•	Relevante Boundary- und Equivalence-Class-Tests.
Out of Scope 
•	Vollständiger Last- und Stresstest von Formspree.
•	Penetrationstests und umfassende Sicherheitsprüfung der externen Formspree-Infrastruktur.
•	Prüfung der redaktionellen Qualität aller Texte und Medieninhalte.
•	Vollständige WCAG-Zertifizierung.
•	Echte Zustellung der E-Mail im automatisierten Test, sofern keine kontrollierte Test-Mailbox vorhanden ist.
4. Risiken und Priorisierung
•	Risiko	•	Auswirkung	•	Priorität	•	Begründung
•	Reservierungsanfrage wird nicht übermittelt	•	Hoch	•	Hoch	•	Zentrale Conversion-Funktion
•	Ungültige Reservierungsdaten werden akzeptiert	•	Hoch	•	Hoch	•	Kann zu falschen Buchungen führen

•	Pflichtfelder werden nicht validiert
	•	Hoch	•	Hoch	•	Nutzer erhalten keine verlässliche Eingaberückmeldung
•	Kontaktformular wird nicht übermittelt
	•	Mittel	•	Mittel	•	Wichtiger Kommunikationskanal

•	Navigation führt zur falschen Section	•	Mittel	•	Hoch	•	Beeinträchtigt Orientierung und Nutzung

•	Responsive Layout bricht auf Smartphone	•	Hoch	•	Hoch	•	Meisten Nutzer verwenden mobile Geräte
•	Timeline- oder Carousel-Zustand ist inkorrekt	•	Mittel	•	Mittel	•	Zentrale Interaktion des Projekts

•	Audio/Video kann nicht gestartet werden	•	Mittel	•	Mittel	•	Medienangebot ist Hauptzweck der Seite
•	Fortschrittsbalken oder Zeit aktualisiert sich nicht	•	Niedrig	•	Niedrig	•	Audio wird abgespielt aber Nutzer erkennt Wiedergabestatus visuell nicht
•	Horizontaler Social-Media-Scroll funktioniert nicht	•	Niedrig	•	Niedrig	•	Ist nur für Desktop-Nutzer verfügbar, Funktionalität ist weiter gegegeben
•	Externe Social-Links öffnen falsche oder kaputte URL	•	Mittel	•	Niedrig	•	Externe Navigation, aber leicht prüfbar
•	Einzelnes Bild lädt nicht
	•	Niedrig	•	Niedrig	•	Beeinträchtigt einzelne Inhalte

•	Animiertes Logo läuft nicht korrekt
	•	Niedrig	•	Niedrig	•	Dekorativ, nicht geschäftskritisch

5. Testdesign-Techniken
•	Equivalence Class Partitioning (ECP): gültige und ungültige Eingabeklassen, z. B. leere Felder oder ungültige E-Mail-Adressen.
•	Boundary Value Analysis (BVA): Grenzwerte wie Personenanzahl 1, 2, 20 und 21.
•	Zustandsbasierte Tests: Modal, Hamburger-Menü, Timeline, Carousel und Accordion.
•	Funktionale Tests: Navigation, Sichtbarkeit, Links, Medien und Formulare.
6. Automatisierungsstrategie
Toolauswahl
•	Playwright mit JavaScript: primär für UI-, Responsive- und Navigations-Tests.
•	Playwright Request API oder ein API-Tool: für kontrollierte HTTP-Prüfungen, falls ein eigener Backend-Endpunkt existiert.
•	Formspree: im automatisierten Test Request und UI-Reaktion prüfen; die echte E-Mail-Zustellung separat mit einer kontrollierten Mailbox verifizieren.
Priorität der Automatisierung
•	Kernpfad: Reservierungsformular erfolgreich absenden.
•	Kernpfad: Reservierungsformular mit ungültigen Eingaben.
•	Footer-Kontaktformular erfolgreich und fehlerhaft absenden.
•	Header-, Footer- und Hamburger-Navigation.
•	Timeline-Punkte und Videoskarussell.
•	Responsive Smoke Tests.
•	Medien- und Bild-Ladeprüfungen.
7. Testumgebung
Browser
•	Chrome: Pflichtabdeckung.
•	Firefox: wichtige Zusatzabdeckung.
•	WebKit: sinnvoll für Safari-nahe Prüfung.
Viewports
•	Desktop: 1280 × 800.
•	Tablet: 768 × 800.
•	Smartphone: 375 × 667.
•	Zusätzlich mindestens ein Test im Smartphone-Querformat.
Testdaten
•	Gültige Reservierungsdaten mit eindeutigem Testnamen und Testzeitpunkt.
•	Ungültige E-Mail-Adressen.
•	Leere Pflichtfelder.
•	Grenzwerte für Nachname, Personenanzahl und Reservierungsdauer.
•	Gültige und zu kurze Kontakt-Nachrichten.

8. Entry- und Exit-Kriterien
Entry-Kriterien
•	Lokale Webseite ist startbar.
•	Testdaten und erwartete Texte sind definiert.
•	Formspree-Testumgebung oder Mock ist verfügbar.
•	Kritische Selektoren sind eindeutig.
Exit-Kriterien
•	Alle High-Priority-Kernfälle sind erfolgreich.
•	Keine offenen kritischen oder hohen Defects ohne dokumentierte Entscheidung.
•	Responsive Smoke Tests sind auf Desktop, Tablet und Smartphone erfolgreich.
•	CI führt die automatisierten Kernfälle reproduzierbar aus.
•	Testreport und bekannte Einschränkungen sind dokumentiert.
9. CI/CD und Reporting
Die Kernsuite sollte bei jedem Pull Request ausgeführt werden. Eine vollständige Medien- und Browsermatrix kann zusätzlich regelmäßig oder nightly laufen.
Empfohlene Reports:
•	Playwright HTML Report.
•	Screenshots bei Fehlern.
•	Trace bei wiederholbaren oder instabilen Fehlern.
•	Video nur bei Bedarf, um Artefaktgröße zu begrenzen.
Beispielhafte Pipeline-Stufen:
•	Installieren und bauen.
•	Chromium-Smoke-Tests ausführen.
•	Vollständige Web-Test-Suite ausführen.
•	Reports als CI-Artefakte speichern.
•	Optional Firefox/WebKit und responsive Tests nightly ausführen.
10. Qualitätsmetriken
•	Erfolgsquote der High-Priority-Tests: 100 % vor Release.
•	Kernpfade automatisiert: mindestens 90 %.
•	Flaky-Test-Rate: unter 5 %.
•	Keine unbegründeten waitForTimeout-Aufrufe.
•	CI-Smoke-Laufzeit: möglichst unter 5 Minuten.
•	Vollständige Regression: möglichst unter 10 Minuten.



