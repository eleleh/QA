# Test Szanario – Web (Medienprojekt) 

## Test Cases tabellarisch

## Legende

| Spalte | Bedeutung |
|--------|-----------|
| **TC-ID** | Eindeutige Testfall-ID |
| **Titel** | Kurzbeschreibung des Testfalls |
| **Typ** | `manual` (manuell) oder `automated` (automatisiert) |
| **Prio** | `Hoch`, `Mittel`, `Niedrig` |
| **Kern-TC** | `Ja` = kritischer Pfad, `---` = nicht kritisch |

---

## Navigation (TC-W01–W08)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W01 | Startseite lädt vollständig ohne Fehler | automated | Hoch | Ja |
| TC-W02 | Navbar-Link „Timeline" scrollt zur Historiesektion | automated | Hoch | Ja | 
| TC-W03 | Navbar-Link „Podcast" scrollt zur Podcast-Sektion | automated | Mittel | Ja | 
| TC-W04 | Navbar-Link „Social Kanäle" scrollt zur Sektion | automated | Niedrig | --- | 
| TC-W05 | Navbar-Link „Angebote" scrollt zur Angebotesektion | automated | Niedrig | --- | 
| TC-W06 | Navbar-CTA „Reservieren" öffnet Modal | automated | Hoch | Ja |
| TC-W07 | Button „Die Geschichte erkunden" scrollt zur Historiesektion | automated | Hoch | Ja | 
| TC-W08 | Logo-Link führt zur Startseite zurück | automated | Niedrig | --- |

---

## Reservierungsformular (TC-W09–W19)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W09 | Reservierungsmodal: alle Felder leer | automated | Hoch | Ja |
| TC-W10 | Namensvalidierung: Nachname unter 2 Zeichen wird abgelehnt | automated | Hoch | Ja |
| TC-W11 | Datumvalidierung: Reservierungsdatum in Vergangenheit nicht zulässig | automated | Hoch | Ja |
| TC-W12 | BVA Personen: Wert 1 (unter Minimum) wird abgelehnt | automated | Hoch | Ja |
| TC-W13 | BVA Personen: Wert 2 (Minimum-Grenzwert) wird akzeptiert | automated | Hoch | --- |
| TC-W14 | BVA Personen: Wert 21 (über Maximum) wird abgelehnt | automated | Hoch | Ja |
| TC-W15 | BVA Personen: Wert 20 (Maximum-Grenzwert) wird akzeptiert | automated | Hoch | --- |
| TC-W16 | Zeitvalidierung: Von-Zeit nach Bis-Zeit wird abgelehnt | automated | Hoch | Ja |
| TC-W17 | Zeitvalidierung: Buchungsdauer unter 30 Min wird abgelehnt | automated | Hoch | Ja |
| TC-W18 | E-Mail-Format ungültig | automated | Mittel | Ja |
| TC-W19 | Erfolgreiche Reservierung: alle Felder gültig | automated | Hoch | Ja |

---

## Zustandsübergänge – Modal, Hamburger, Timeline, Carousel (TC-W20–W31)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W20 | Modal schließt per X-Button | automated | Hoch | Ja |
| TC-W21 | Modal schließt per Klick außerhalb | automated | Mittel | --- |
| TC-W22 | Hamburger-Menü öffnet und schließt (375 px, 768 px) | manual | Mittel | --- |
| TC-W23 | Hamburger-Menü: Link "Timeline" navigiert und schließt Menü | manual | Mittel | --- |
| TC-W24 | Timeline: Erster Punkt aktiv bei Seitenaufruf (BVA) | automated | Mittel | Ja |
| TC-W25 | Timeline: Hover über inaktiven Punkt zeigt Jahr | manual | Niedrig | --- |
| TC-W26 | Timeline: Klick auf inaktiven Punkt aktiviert Epoche | automated | Mittel | --- |
| TC-W27 | Timeline: Letzter Punkt klickbar und korrekt aktiviert (BVA) | automated | Mittel | --- |
| TC-W28 | Timeline-Carousel: Rechts-Pfeil lädt nächstes Video | automated | Mittel | Ja |
| TC-W29 | Timeline-Carousel: Links-Pfeil kehrt zum vorherigen Video zurück (BVA) | automated | Mittel | --- |
| TC-W30 | Timeline-Accordion öffnet Timeline (375 px, 768 px) | manual | Niedrig | --- |
| TC-W31 | Timeline-Accordion schließt Timeline | manual | Niedrig | --- |

---

## Podcast-Sektion (TC-W32-W36)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W32 | Podcast-Sektion vollständig sichtbar (Titel, Player, Playtime) | automated | Niedrig | --- |
| TC-W33 | Podcast-Audio-Player: Play-Button startet Audio, wechselt zu Pause, Balken und Time aktualisieren | automated | Mittel | --- |
| TC-W34 | Podcast-Audio-Player: Pause-Button stoppt Wiedergabe, Zeit bleibt erhalten | manual | Mittel | --- |
| TC-W35 | Podcast-Audio-Player: Fehlende Audio-Datei zeigt kontrollierten Fehlerzustand | manual | Niedrig | --- |
| TC-W36 | Podcast-Audio-Player: Mehrere Player starten (nur einer läuft oder parallele Wiedergabe) | manual | Niedrig | --- |

---

## Social-Kanäle-Sektion (TC-W37–W45)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W37 | Social-Kanäle: Icons  vollständig sichtbar | automated | Niedrig | --- |
| TC-W38 | Social-Media-Icons führen zu korrekten externen Links | automated | Niedrig | --- |
| TC-W39 | Horizontaler Social-Media-Scroll: Maus, Touch und Tastatur funktionieren | manual | Hoch | --- |
| TC-W40 | Horizontaler Social-Media-Scroll: Touch (Wischgeste) auf Smartphone | manual | Mittel | --- |
| TC-W41 | Horizontaler Social-Media-Scroll: Tastatur (Tab, Pfeiltasten) | manual | Mittel | --- |
| TC-W42 | Horizontaler Scroll: Erster und letzter Eintrag erreichbar, kein Layoutbruch | manual | Mittel | --- |
| TC-W43 | Externer Social-Media-Link öffnet korrekte URL (neuer Tab, noopener) | automated | Niedrig | --- |
| TC-W44 | Eingebettetes Bild/Video lädt vollständig | automated | Niedrig | --- |
| TC-W45 | Fehlendes externes Medium zeigt kontrollierten Fehlerzustand | manual | Niedrig | --- |


---


## Bilder (TC-W46)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W46 | Alle Seitenbilder laden vollständig (kein Broken-Image-Symbol) | automated | Niedrig | --- |

---

## Footer (TC-W47–W53)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W47 | Footer Quick Links navigieren zur korrekten Sektion | automated | Mittel | --- |
| TC-W48 | Kontaktformular: alle Felder leer | automated | Mittel | Ja |
| TC-W49 | Kontaktformular: Name unter 2 Zeichen wird abgelehnt | automated | Mittel | Ja |
| TC-W50 | Kontaktformular: E-Mail-Format ungültig wird abgelehnt | automated | Mittel | Ja |
| TC-W51 | Kontaktformular: Nachricht unter 10 Zeichen wird abgelehnt | automated | Mittel | Ja |
| TC-W52 | Kontaktformular: gültige Eingabe → Bestätigungsmodal | automated | Mittel | Ja |
| TC-W53 | Footer Social-Media-Icons verlinkt und sichtbar | automated | Niedrig | --- |

---

## Formspree-Integration (TC-W54–W58) 

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W54 | Reservierungsformular: Erfolgreicher Formspree-Request → Bestätigung wird angezeigt | automated | Hoch | Ja |
| TC-W55 | Reservierungsformular: Formspree antwortet mit 400/422 → Fehlermeldung, Eingaben bleiben erhalten | automated | Hoch | Ja |
| TC-W56 | Reservierungsformular: Formspree antwortet mit 500 → verständliche Fehlermeldung, kein Absturz | automated | Mittel | --- |
| TC-W57 | Kontaktformular: Formspree-Timeout/offline → Fehlerhinweis oder Retry-Option | manual | Mittel | --- |
| TC-W58 | Doppelklick auf Submit-Button → nur eine Anfrage wird gesendet | automated | Hoch | Ja |

---
## Deep Links  (TC-W59–W62)

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W59 | Direkter Aufruf der Startseite | automated | Mittel | --- |
| TC-W60 | Direkter Aufruf mit Section-Hash (z. B. `/#timeline`) | automated | Mittel | --- |
| TC-W61 | Ungültiger Hash bzw. nicht vorhandene Ziel-Section | automated | Niedrig | --- |
| TC-W62 | Refresh nach Navigation zu einer Section | automated | Mittel | --- |

---
## Responsive Verhalten (TC-W63–W67) – Neu

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W63 | Desktop-Layout (1920×1080): kein horizontaler Overflow | automated | Mittel | --- |
| TC-W64 | Tablet (768×1024): keine abgeschnittenen Inhalte | manual | Mittel | --- |
| TC-W65 | Smartphone (375×667): Modal vollständig bedienbar | manual | Hoch | --- |
| TC-W66 | Smartphone im Querformat: kein Layoutbruch | manual | Mittel | --- |
| TC-W67 | Timeline-Accordion: öffnet und schließt korrekt (375 px, 768 px) | manual | Mittel | --- |

---

## Accessibility-Basis (TC-W68–W72) – Neu

| TC-ID | Titel | Typ | Prio | Kern-TC |
|-------|-------|-----|------|---------|
| TC-W68 | Navigation mit Tastatur (Tab, Enter, Escape) | manual | Mittel | --- |
| TC-W69 | Modal-Fokus: Fokus bleibt im Modal, Escape schließt | manual | Mittel | --- |
| TC-W70 | Verständliche Button-/Link-Namen (accessible name) | manual | Niedrig | --- |
| TC-W71 | Bilder besitzen Alt-Texte | manual | Niedrig | --- |
| TC-W72 | Accordion verwendet korrekten off/zu-Zustand (aria-expanded) | manual | Niedrig | --- |

---

## Zusammenfassung

| Kategorie | TCs gesamt | Kern-TCs | Automated | Manual |
|-----------|------------|----------|-----------|--------|
| Navigation | 8 | 5 | 8 | 0 |
| Reservierungsformular | 11 | 9 | 11 | 0 |
| Zustandsübergänge | 12 | 3 | 7 | 5 |
| Podcast | 5 | 0 | 2 | 3 |
| Social Kanäle | 9 | 0 | 4 | 5 |
| Bilder | 1 | 0 | 1 | 0 |
| Footer | 7 | 5 | 7 | 0 |
| Formspree-Integration | 5 | 3 | 4 | 1 |
| Deep Links / Direktaufruf | 4 | 0 | 4 | 0 |
| Responsive Verhalten | 5 | 0 | 1 | 4 |
| Accessibility-Basis | 5 | 0 | 0 | 5 |
| **Gesamt** | **72** | **25** | **49** | **23** |

---
