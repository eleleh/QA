# Ausführliche Test Cases – Web (Medienprojekt)

**Umfang:** Alle Testfälle mit Priorität **Hoch** und **Mittel**  
**Zweck:** Reproduzierbare manuelle Tests und Grundlage für Playwright-Automatisierung  
**Basis-URL:** `https://kaffeehaus-riquet.netlify.app/`  

---

## Legende

| Feld | Bedeutung |
|---|---|
| **Typ** | `automated` = für Playwright geeignet; `manual` = überwiegend manuell zu prüfen |
| **Prio** | Hoch = kritischer Nutzerpfad; Mittel = wichtige Funktion bzw. Qualitätsrisiko |
| **Kern-TC** | Ja = Bestandteil der Smoke-/Kernsuite |
| **Vorbedingungen** | Zustand vor Beginn des Tests |
| **Assertions** | Prüfpunkte, die über Bestanden/Fehlgeschlagen entscheiden |

> **Hinweis zu Formspree:** Für automatisierte Tests sollten Netzwerkantworten per Route/Mock simuliert werden. Eine sichtbare Erfolgsmeldung beweist nicht automatisch die echte E-Mail-Zustellung.

---

# Navigation

## TC-W01 – Startseite lädt vollständig ohne Fehler

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Browser ist gestartet; Anwendung ist erreichbar |
| **Testdaten** | Basis-URL |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Öffne die Basis-URL | Die Seite lädt erfolgreich und zeigt keinen Browser-Fehlerstatus |
| 2 | Prüfe den Header | Header und Hauptnavigation sind sichtbar |
| 3 | Prüfe den Hauptinhalt | Mindestens die Hero-/Einstiegssection ist sichtbar |
| 4 | Scrolle zum Seitenende | Footer ist sichtbar |
| 5 | Prüfe Browser-Konsole und fehlgeschlagene Requests | Keine nicht erwarteten JavaScript-Fehler; kritische lokale Assets laden erfolgreich |

---

## TC-W02 – Navbar-Link „Timeline“ scrollt zur Historiesektion

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Navbar-Link „Timeline“ |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Klicke auf den Navbar-Link „Timeline“ | Die Navigation wird ausgelöst |
| 2 | Warte auf das Ende der Scroll-Animation | Die Historiesektion liegt im Viewport |
| 3 | Prüfe die Zielsection | Timeline-Überschrift und mindestens ein Timeline-Punkt sind sichtbar |
| 4 | Prüfe die Scrollposition | Die Zielsection wird nicht durch den fixierten Header vollständig verdeckt |

---

## TC-W06 – Navbar-CTA „Reservieren“ öffnet Reservierungsmodal

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | CTA „Reservieren“ im Header |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Klicke auf den Header-Button „Reservieren“ | Das Reservierungsmodal öffnet sich |
| 2 | Prüfe das Modal | Dialog/Overlay ist sichtbar |
| 3 | Prüfe die Formularfelder | Alle vorgesehenen Pflichtfelder sind sichtbar und editierbar |
| 4 | Prüfe den Schließen-Button | Der X-Button ist sichtbar und bedienbar |
| 5 | Prüfe den Hintergrund | Hintergrundinhalt ist nicht versehentlich interaktiv, solange das Modal offen ist |

---

# Reservierungsformular

## TC-W09 – Leeres Reservierungsformular wird nicht abgesendet

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Alle Pflichtfelder leer |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Lasse alle Pflichtfelder leer | Keine Eingabewerte sind gesetzt |
| 2 | Klicke auf „Absenden“ | Das Formular wird nicht erfolgreich abgesendet |
| 3 | Prüfe die Validierung | Für fehlende Pflichtfelder werden verständliche Validierungsfehler angezeigt oder die native Browservalidierung greift |
| 4 | Prüfe das Modal | Modal bleibt geöffnet |
| 5 | Prüfe Netzwerkaktivität | Es wird kein erfolgreicher Formspree-Request ausgelöst |

---

## TC-W10 – Name unter zwei Zeichen wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Name: `A`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Gib im Namensfeld `A` ein | Wert wird im Eingabefeld angezeigt |
| 2 | Fülle alle übrigen Pflichtfelder mit gültigen Daten aus | Übrige Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe das Namensfeld | Fehlermeldung zur Mindestlänge wird angezeigt oder Feld wird als ungültig markiert |
| 5 | Prüfe Netzwerkaktivität | Kein erfolgreicher Formspree-Request wird gesendet |

---

## TC-W11 – Reservierungsdatum in der Vergangenheit wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Datum: gestriges Datum; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Wähle ein Datum in der Vergangenheit | Datum wird eingegeben oder der Datepicker blockiert die Auswahl |
| 2 | Fülle die übrigen Pflichtfelder gültig aus | Übrige Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe die Datumsvalidierung | Feld ist als ungültig markiert oder eine verständliche Fehlermeldung wird angezeigt |
| 5 | Prüfe Netzwerkaktivität | Kein erfolgreicher Formspree-Request wird gesendet |

---

## TC-W12 – Personenanzahl unter Minimum wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Personen: `1`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Personenanzahl auf `1` | Wert wird angezeigt oder Eingabe wird begrenzt |
| 2 | Fülle die übrigen Pflichtfelder gültig aus | Übrige Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe die Personenanzahl | Fehlermeldung zur Mindestanzahl oder Ungültigkeitsmarkierung wird angezeigt |

---

## TC-W13 – Personenanzahl am Minimum wird akzeptiert

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | --- |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet; Formspree-Erfolg wird gemockt |
| **Testdaten** | Personen: `2`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Personenanzahl auf `2` | Feld akzeptiert den Wert |
| 2 | Fülle die übrigen Pflichtfelder gültig aus | Keine Feldvalidierung schlägt fehl |
| 3 | Sende das Formular ab | Request wird ausgelöst |
| 4 | Prüfe die Rückmeldung | Erfolgsmeldung/Bestätigung wird angezeigt |

---

## TC-W14 – Personenanzahl über Maximum wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Personen: `21`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Personenanzahl auf `21` | Wert wird angezeigt oder Eingabe wird begrenzt |
| 2 | Fülle die übrigen Pflichtfelder gültig aus | Übrige Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe die Personenanzahl | Fehlermeldung zur Maximalanzahl oder Ungültigkeitsmarkierung wird angezeigt |

---

## TC-W15 – Personenanzahl am Maximum wird akzeptiert

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | --- |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet; Formspree-Erfolg wird gemockt |
| **Testdaten** | Personen: `20`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Personenanzahl auf `20` | Feld akzeptiert den Wert |
| 2 | Fülle die übrigen Pflichtfelder gültig aus | Keine Feldvalidierung schlägt fehl |
| 3 | Sende das Formular ab | Request wird ausgelöst |
| 4 | Prüfe die Rückmeldung | Erfolgsmeldung/Bestätigung wird angezeigt |

---

## TC-W16 – Startzeit nach Endzeit wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Von: `19:00`; Bis: `18:00`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Gib `19:00` als Startzeit ein | Startzeit wird gesetzt |
| 2 | Gib `18:00` als Endzeit ein | Endzeit wird gesetzt |
| 3 | Fülle die übrigen Pflichtfelder gültig aus | Übrige Felder sind valide |
| 4 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 5 | Prüfe Zeitvalidierung | Fehler zur zeitlichen Reihenfolge wird angezeigt oder Feld ist ungültig |

---

## TC-W17 – Reservierungsdauer unter 30 Minuten wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Von: `18:00`; Bis: `18:15`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Startzeit auf `18:00` | Startzeit wird gesetzt |
| 2 | Setze Endzeit auf `18:15` | Endzeit wird gesetzt |
| 3 | Fülle die übrigen Pflichtfelder gültig aus | Übrige Felder sind valide |
| 4 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 5 | Prüfe Zeitvalidierung | Fehler zur Mindestdauer wird angezeigt oder Feld ist ungültig |

---

## TC-W18 – Ungültiges E-Mail-Format wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | E-Mail: `max@`; übrige Pflichtfelder gültig |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Gib `max@` in das E-Mail-Feld ein | Wert wird im Feld angezeigt |
| 2 | Fülle alle übrigen Pflichtfelder gültig aus | Übrige Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe E-Mail-Feld | E-Mail-Fehler wird angezeigt oder Feld ist ungültig markiert |

---

## TC-W19 – Erfolgreiche Reservierung mit gültigen Daten

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet; Formspree-Erfolg wird gemockt |
| **Testdaten** | Name: `Max Mustermann`; E-Mail: `max@example.com`; Datum: morgen; Von: `18:00`; Bis: `19:00`; Personen: `4` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Fülle alle Felder mit gültigen Testdaten aus | Alle Felder enthalten die erwarteten Werte und sind gültig |
| 2 | Klicke einmal auf „Absenden“ | Genau ein Formspree-Request wird ausgelöst |
| 3 | Warte auf die gemockte Erfolgantwort | Erfolgsmeldung oder Bestätigungsmodal wird sichtbar |
| 4 | Prüfe Formularzustand | Formular wird gemäß Spezifikation zurückgesetzt oder Modal wird geschlossen |
| 5 | Prüfe Fehlerzustand | Keine Validierungs- oder Netzwerkfehlermeldung ist sichtbar |

---

# Modal, Hamburger, Timeline und Carousel

## TC-W20 – Modal schließt per X-Button

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | X-/Schließen-Button |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Prüfe, dass das Modal sichtbar ist | Dialog/Overlay ist sichtbar |
| 2 | Klicke auf den X-Button | Schließaktion wird ausgelöst |
| 3 | Prüfe den Modalzustand | Modal und Overlay sind nicht sichtbar |
| 4 | Prüfe die Seite | Header bzw. Hintergrundinhalt ist wieder bedienbar |

---

## TC-W21 – Modal schließt per Klick außerhalb

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Reservierungsmodal ist geöffnet |
| **Testdaten** | Klick auf das Overlay außerhalb des Formularcontainers |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Klicke auf eine freie Fläche des Overlays außerhalb des Formulars | Schließaktion wird ausgelöst |
| 2 | Prüfe den Modalzustand | Modal und Overlay sind nicht sichtbar |
| 3 | Öffne das Modal erneut | Modal wird erneut angezeigt |
| 4 | Klicke innerhalb des Formularcontainers | Modal bleibt geöffnet |

---

## TC-W22 – Hamburger-Menü öffnet und schließt auf Tablet und Smartphone

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Viewports: `768 × 1024` und `375 × 667` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Stelle den Tablet-Viewport ein | Hamburger-Menü ist sichtbar oder die mobile Navigation wird wie vorgesehen dargestellt |
| 2 | Klicke auf Hamburger-Button | Menü öffnet sich, Navigationslinks sind sichtbar |
| 3 | Klicke erneut auf Hamburger-Button | Menü schließt sich |
| 4 | Wiederhole Schritte 1–3 mit Smartphone-Viewport | Verhalten ist auf Smartphone identisch und Layout bleibt stabil |

---

## TC-W23 – Hamburger-Menü-Link navigiert und schließt Menü

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Smartphone- oder Tablet-Viewport; Hamburger-Menü ist geöffnet |
| **Testdaten** | Beispiel: Link „Podcast“ |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Öffne das Hamburger-Menü | Navigationslinks sind sichtbar |
| 2 | Klicke auf einen Section-Link, z. B. „Podcast“ | Seite navigiert zur Podcast-Section |
| 3 | Prüfe Zielsection | Podcast-Überschrift liegt im Viewport |
| 4 | Prüfe Menüstatus | Hamburger-Menü ist geschlossen |

---

## TC-W24 – Erster Timeline-Punkt ist beim Seitenaufruf aktiv

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Startseite ist neu geladen |
| **Testdaten** | Erster Timeline-Punkt |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Scrolle zur Timeline-Section | Timeline ist sichtbar |
| 2 | Identifiziere den ersten Timeline-Punkt | Erster Punkt ist sichtbar |
| 3 | Prüfe den Status | Erster Punkt besitzt den aktiven Zustand, z. B. CSS-Klasse/ARIA-Attribut |
| 4 | Prüfe den dargestellten Inhalt | Inhalt der ersten Epoche ist sichtbar |

---

## TC-W26 – Klick auf Timeline-Punkt aktiviert die korrekte Epoche

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Timeline-Section ist sichtbar |
| **Testdaten** | Ein inaktiver Timeline-Punkt in der Mitte der Timeline |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Merke dir den aktuell aktiven Punkt und seinen Inhalt | Ausgangszustand ist bekannt |
| 2 | Klicke auf einen inaktiven Timeline-Punkt | Auswahl wird ausgelöst |
| 3 | Prüfe den neuen Punkt | Angeclickter Punkt ist aktiv markiert |
| 4 | Prüfe vorherigen Punkt | Vorheriger Punkt ist nicht mehr aktiv |
| 5 | Prüfe Inhalt | Überschrift, Text und Medien der gewählten Epoche werden angezeigt |

---

## TC-W27 – Letzter Timeline-Punkt aktiviert letzte Epoche und Videoskarussell

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Timeline-Section ist sichtbar |
| **Testdaten** | Letzter Timeline-Punkt |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Klicke auf den letzten Timeline-Punkt | Auswahl wird ausgelöst |
| 2 | Prüfe den Punktzustand | Letzter Timeline-Punkt ist aktiv |
| 3 | Prüfe Epocheninhalt | Inhalt der letzten Periode ist sichtbar |
| 4 | Prüfe Videoskarussell | Mindestens ein Video und die verfügbare Carousel-Navigation sind sichtbar |

---

## TC-W28 – Rechter Carousel-Pfeil lädt nächstes Video

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Letzte Timeline-Periode und Videoskarussell sind aktiv |
| **Testdaten** | Rechter Carousel-Pfeil |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Merke dir Titel, Index oder Quelle des sichtbaren Videos | Ausgangsvideo ist bekannt |
| 2 | Klicke auf rechten Carousel-Pfeil | Navigation wird ausgelöst |
| 3 | Prüfe sichtbares Video | Nächstes Video bzw. nächste Karte ist sichtbar |
| 4 | Prüfe Zustand | Videoindex, aktive Karte oder Quelle unterscheidet sich vom Ausgangsvideo |

---

## TC-W29 – Linker Carousel-Pfeil kehrt zum vorherigen Video zurück

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Zweites oder späteres Carousel-Video ist sichtbar |
| **Testdaten** | Linker Carousel-Pfeil |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Merke dir Titel, Index oder Quelle des sichtbaren Videos | Ausgangsvideo ist bekannt |
| 2 | Klicke auf linken Carousel-Pfeil | Navigation wird ausgelöst |
| 3 | Prüfe sichtbares Video | Vorheriges Video bzw. vorherige Karte ist sichtbar |
| 4 | Prüfe Zustand | Videoindex, aktive Karte oder Quelle hat sich korrekt zurückbewegt |

---

# Podcast

## TC-W33 – Play startet Audio, wechselt zu Pause und aktualisiert Fortschritt/Zeit

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Podcast-Section ist sichtbar; Audio ist ladbar |
| **Testdaten** | Erster Podcast-Player |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Prüfe Ausgangszustand des Players | Play-Button, Zeit und Fortschrittsbalken sind sichtbar; Zeit steht am Anfang |
| 2 | Klicke auf Play | Wiedergabe wird ausgelöst |
| 3 | Prüfe den Button-Zustand | Button wechselt zu Pause oder zeigt eindeutig den Wiedergabestatus |
| 4 | Warte kurz, z. B. zwei Sekunden | Zeitangabe ist größer als zu Beginn |
| 5 | Prüfe Fortschrittsbalken | Fortschritt ist größer als null bzw. hat sich verändert |

---

## TC-W34 – Pause stoppt Wiedergabe und behält aktuelle Zeit

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Podcast läuft seit mindestens zwei Sekunden |
| **Testdaten** | Aktiver Podcast-Player |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Notiere die aktuelle Zeit | Zeitwert ist größer als `0:00` |
| 2 | Klicke auf Pause | Wiedergabe pausiert |
| 3 | Warte zwei Sekunden | Zeitwert und Fortschrittsbalken ändern sich nicht weiter |
| 4 | Prüfe Button-Zustand | Button zeigt wieder Play bzw. einen pausierten Zustand |

---

# Social Media

## TC-W39 – Horizontaler Social-Media-Scroll per Maus funktioniert

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Hoch |
| **Kern-TC** | --- |
| **Vorbedingungen** | Desktop-Viewport; Social-Media-Section ist sichtbar |
| **Testdaten** | Maus oder Trackpad |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Stelle sicher, dass die ersten Karten sichtbar sind | Social-Media-Container ist sichtbar |
| 2 | Scrolle horizontal per Maus/Trackpad im Container | Weitere Karten werden sichtbar |
| 3 | Scrolle bis zum Ende | Letzte Karte ist erreichbar |
| 4 | Scrolle zurück zum Beginn | Erste Karte ist wieder erreichbar |
| 5 | Prüfe das Layout | Keine Karte wird unlesbar abgeschnitten; die restliche Seite bleibt stabil |

---

## TC-W40 – Horizontaler Scroll per Touch auf Smartphone

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Smartphone-Viewport `375 × 667`; Social-Media-Section ist sichtbar |
| **Testdaten** | Touch-/Wischgeste |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Wische horizontal über den Social-Media-Container | Beobachte das Verhalten |
| 2 | Prüfe die Kartenposition | **Aktueller Soll-Stand:** Wenn Touch nicht implementiert ist, wird fehlende Bedienbarkeit als UX-/Accessibility-Defect dokumentiert; wenn implementiert, werden weitere Karten sichtbar |
| 3 | Prüfe Seitenscrollen | Die vertikale Seite darf nicht unkontrolliert springen oder blockieren |

---

## TC-W41 – Horizontaler Scroll per Tastatur

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Desktop-Viewport; Social-Media-Section ist sichtbar |
| **Testdaten** | Tab, Shift+Tab, Enter, Pfeiltasten (falls unterstützt) |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Navigiere mit Tab in die Social-Media-Section | Fokus ist sichtbar und erreicht interaktive Karten/Links |
| 2 | Navigiere durch alle Karten | Alle interaktiven Elemente sind per Tastatur erreichbar |
| 3 | Prüfe Inhalt außerhalb des sichtbaren Bereichs | **Aktueller Soll-Stand:** Falls nicht erreichbar, wird dies als Accessibility-Defect dokumentiert; bei Unterstützung scrollt der Container mit oder bietet eine gleichwertige Bedienmöglichkeit |

---

## TC-W42 – Erster und letzter Social-Media-Eintrag sind erreichbar, kein Layoutbruch

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Social-Media-Section ist sichtbar |
| **Testdaten** | Desktop und Smartphone-Viewport |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Navigiere zum ersten Eintrag | Erste Karte ist vollständig sichtbar |
| 2 | Scrolle bis zum letzten Eintrag | Letzte Karte ist vollständig sichtbar und erreichbar |
| 3 | Prüfe Karteninhalte | Bilder/Videos, Text und Links überlappen nicht und werden nicht unlesbar abgeschnitten |
| 4 | Prüfe Seite außerhalb des Containers | Kein unerwarteter globaler horizontaler Overflow |

---

# Footer und Kontaktformular

## TC-W47 – Footer Quick Links navigieren zur korrekten Section

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite ist geladen; Footer ist sichtbar |
| **Testdaten** | Jeder vorhandene Footer Quick Link |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Klicke auf einen Footer Quick Link | Navigation wird ausgelöst |
| 2 | Prüfe die Zielsection | Passende Section-Überschrift liegt im Viewport |
| 3 | Wiederhole mit weiteren Quick Links | Jeder Link führt zur vorgesehenen Section |

---

## TC-W48 – Leeres Kontaktformular wird nicht abgesendet

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Footer und Kontaktformular sind sichtbar |
| **Testdaten** | Alle Felder leer |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Lasse alle Pflichtfelder leer | Keine Eingabewerte sind gesetzt |
| 2 | Klicke auf „Absenden“ | Formular wird nicht erfolgreich versendet |
| 3 | Prüfe Validierung | Fehlermeldungen oder native Pflichtfeldvalidierung werden angezeigt |
| 4 | Prüfe Netzwerkaktivität | Kein erfolgreicher Formspree-Request wird ausgelöst |

---

## TC-W49 – Kontaktname unter zwei Zeichen wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Kontaktformular ist sichtbar |
| **Testdaten** | Name: `A`; gültige E-Mail; Nachricht mit mindestens 10 Zeichen |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Gib `A` in das Namensfeld ein | Wert wird angezeigt |
| 2 | Fülle die übrigen Pflichtfelder gültig aus | Übrige Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe Namensfeld | Mindestlängenfehler oder Ungültigkeitsmarkierung wird angezeigt |

---

## TC-W50 – Ungültiges Kontakt-E-Mail-Format wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Kontaktformular ist sichtbar |
| **Testdaten** | E-Mail: `max@`; gültiger Name; Nachricht mit mindestens 10 Zeichen |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Gib `max@` in das E-Mail-Feld ein | Wert wird angezeigt |
| 2 | Fülle übrige Pflichtfelder gültig aus | Übrige Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe E-Mail-Feld | E-Mail-Fehler oder Ungültigkeitsmarkierung wird angezeigt |

---

## TC-W51 – Kontaktnachricht unter zehn Zeichen wird abgelehnt

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Kontaktformular ist sichtbar |
| **Testdaten** | Nachricht: `Hallo` (5 Zeichen); gültiger Name und gültige E-Mail |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Gib eine Nachricht mit weniger als zehn Zeichen ein | Wert wird angezeigt |
| 2 | Fülle Name und E-Mail gültig aus | Beide Felder sind valide |
| 3 | Klicke auf „Absenden“ | Form wird nicht erfolgreich versendet |
| 4 | Prüfe Nachrichtenfeld | Fehlermeldung zur Mindestlänge oder Ungültigkeitsmarkierung wird angezeigt |

---

## TC-W52 – Erfolgreiche Kontaktanfrage mit gültigen Daten

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Kontaktformular ist sichtbar; Formspree-Erfolg wird gemockt |
| **Testdaten** | Name: `Max Mustermann`; E-Mail: `max@example.com`; Nachricht: `Dies ist eine gültige Testnachricht.` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Fülle alle Kontaktfelder gültig aus | Alle Felder enthalten die erwarteten Werte |
| 2 | Klicke einmal auf „Absenden“ | Genau ein Request wird ausgelöst |
| 3 | Warte auf Erfolgantwort | Erfolgsmeldung/Bestätigungsmodal wird sichtbar |
| 4 | Prüfe Formularzustand | Formular wird gemäß Spezifikation geleert oder geschlossen |

---

# Formspree-Integration

## TC-W54 – Erfolgreicher Formspree-Request für Reservierung zeigt Bestätigung

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal geöffnet; Formspree-Endpoint wird mit HTTP 200/201 gemockt |
| **Testdaten** | Vollständig gültige Reservierungsdaten |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Richte einen Mock für den Formspree-Request mit Erfolgantwort ein | Mock ist aktiv |
| 2 | Fülle das Reservierungsformular gültig aus | Alle Felder sind valide |
| 3 | Sende Formular ab | Genau ein POST-Request geht an den erwarteten Formspree-Endpoint |
| 4 | Prüfe Request | Request enthält die erwarteten Formularwerte, soweit technisch vorgesehen |
| 5 | Prüfe UI | Bestätigung wird angezeigt; keine Fehlermeldung sichtbar |

---

## TC-W55 – Formspree 400/422 zeigt Fehler und behält Eingaben

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungsmodal geöffnet; Formspree-Endpoint wird mit HTTP 400 oder 422 gemockt |
| **Testdaten** | Vollständig gültige Reservierungsdaten |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Richte Mock für HTTP 400/422 ein | Mock ist aktiv |
| 2 | Fülle Formular gültig aus | Alle Felder enthalten Werte |
| 3 | Sende Formular ab | Request wird ausgelöst |
| 4 | Prüfe UI | Verständliche Fehlermeldung wird angezeigt; keine Erfolgsmeldung sichtbar |
| 5 | Prüfe Formular | Eingegebene Werte bleiben erhalten, damit Nutzer korrigieren/erneut senden kann |
| 6 | Prüfe Zustand | Seite bleibt bedienbar, Modal bleibt geöffnet |

---

## TC-W56 – Formspree 500 zeigt Fehler ohne Seitenabsturz

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Reservierungsmodal geöffnet; Formspree-Endpoint wird mit HTTP 500 gemockt |
| **Testdaten** | Vollständig gültige Reservierungsdaten |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Richte Mock für HTTP 500 ein | Mock ist aktiv |
| 2 | Fülle Formular gültig aus und sende es ab | Request wird ausgelöst |
| 3 | Prüfe UI | Nutzerfreundliche technische Fehlermeldung wird angezeigt |
| 4 | Prüfe Seite | Kein White Screen, kein JavaScript-Absturz; Modal und Formular bleiben bedienbar |
| 5 | Prüfe Eingaben | Formularwerte bleiben erhalten oder Verhalten entspricht dokumentierter UX |

---

## TC-W57 – Kontaktformular bei Timeout/Offline zeigt Fehlerhinweis

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Kontaktformular sichtbar; DevTools verfügbar |
| **Testdaten** | Gültige Kontaktformulardaten; Netzwerk auf Offline oder gedrosselt/abgebrochen |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Aktiviere Offline-Modus in den Browser-DevTools oder simuliere Timeout | Netzwerk ist nicht verfügbar |
| 2 | Fülle das Kontaktformular gültig aus | Felder enthalten gültige Werte |
| 3 | Klicke auf „Absenden“ | Sendeversuch wird gestartet |
| 4 | Prüfe UI | Verständlicher Fehlerhinweis oder Retry-Möglichkeit wird angezeigt |
| 5 | Prüfe Formular | Eingaben bleiben erhalten; Seite bleibt bedienbar |

---

## TC-W58 – Doppelklick auf Submit sendet nur eine Anfrage

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Reservierungs- oder Kontaktformular sichtbar; Formspree-Erfolg wird verzögert gemockt |
| **Testdaten** | Vollständig gültige Formulardaten |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Fülle das Formular gültig aus | Alle Felder sind valide |
| 2 | Klicke zweimal schnell auf „Absenden“ | Zweiter Klick wird ignoriert oder Button ist nach erstem Klick deaktiviert |
| 3 | Prüfe Netzwerkrequests | Es wurde exakt ein POST-Request ausgelöst |
| 4 | Warte auf Erfolgantwort | Genau eine Erfolgsmeldung/Bestätigung wird angezeigt |

---

# Deep Links und Direktaufruf

## TC-W59 – Direkter Aufruf der Startseite

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Neuer Browserkontext oder neue Seite |
| **Testdaten** | Basis-URL |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Öffne die Basis-URL direkt | Seite wird ohne vorherige Navigation geladen |
| 2 | Prüfe zentrale Elemente | Header, Hero/Einstieg und Footer sind sichtbar |
| 3 | Prüfe Anwendung | Keine unerwartete Fehlerseite und kein defektes Layout |

---

## TC-W60 – Direkter Aufruf mit Section-Hash positioniert korrekte Section

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Die Anwendung verwendet tatsächlich passende IDs/Hashes, z. B. `#timeline` |
| **Testdaten** | URL: `https://kaffeehaus-riquet.netlify.app/#timeline` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Öffne die URL mit Section-Hash direkt | Seite lädt erfolgreich |
| 2 | Warte bis die Seite vollständig geladen ist | Scrollposition stabilisiert sich |
| 3 | Prüfe die Zielsection | Timeline-Section liegt im Viewport und ist nicht vollständig vom Header verdeckt |

---

## TC-W62 – Refresh nach Navigation zu einer Section

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Section-Link „Podcast“ oder URL mit gültigem Hash |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Navigiere über Navbar oder Hash zur Zielsection | Zielsection ist sichtbar |
| 2 | Aktualisiere die Browserseite | Seite lädt neu |
| 3 | Prüfe die Anwendung | Keine Fehlerseite und kein Layoutbruch |
| 4 | Prüfe Scroll-/Hash-Verhalten | Verhalten entspricht der definierten Anwendung: Hash-Position bleibt erhalten, wenn URL-Hash vorhanden ist; ohne Hash lädt die Seite am erwarteten Startzustand |

---

# Responsive Verhalten

## TC-W63 – Desktop-Layout hat keinen unerwarteten horizontalen Overflow

| Feld | Wert |
|---|---|
| **Typ** | automated |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Viewport: `1920 × 1080` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Viewport auf `1920 × 1080` | Desktop-Layout wird angezeigt |
| 2 | Scrolle durch die gesamte Seite | Alle Sections sind erreichbar |
| 3 | Prüfe Breite des Dokuments | `scrollWidth` ist nicht größer als die erwartete Viewport-/Body-Breite, abgesehen von bewusst horizontalen Containern |
| 4 | Prüfe Header, Formulare, Timeline und Footer | Keine Inhalte überlappen oder werden abgeschnitten |

---

## TC-W64 – Tablet-Layout zeigt keine abgeschnittenen Inhalte

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Viewport: `768 × 1024` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Viewport auf `768 × 1024` | Tablet-Layout wird angezeigt |
| 2 | Prüfe Header und Navigation | Navigation ist bedienbar; keine Überlappung |
| 3 | Prüfe Timeline und Videoskarussell | Inhalte sind sichtbar und nicht abgeschnitten |
| 4 | Prüfe Podcast und Social-Media-Section | Karten, Player und Scroll-Container bleiben nutzbar |
| 5 | Prüfe Footer und Kontaktformular | Alle Felder und Absenden-Button sind erreichbar |

---

## TC-W65 – Smartphone-Modal ist vollständig bedienbar

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Hoch |
| **Kern-TC** | Ja |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Viewport: `375 × 667` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Viewport auf `375 × 667` | Smartphone-Layout wird angezeigt |
| 2 | Öffne über Header oder Footer das Reservierungsmodal | Modal öffnet sich |
| 3 | Prüfe obere Felder und X-Button | Sichtbar und bedienbar |
| 4 | Scrolle im Modal zu unteren Feldern und Submit-Button | Alle Felder sowie Absenden-Button sind erreichbar |
| 5 | Schließe Modal per X | Modal schließt; Seite bleibt stabil |
| 6 | Prüfe globales Layout | Kein unerwarteter horizontaler Overflow oder abgeschnittener Modalinhalt |

---

## TC-W66 – Smartphone im Querformat bleibt stabil

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Smartphone-Querformat, z. B. `667 × 375` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Viewport auf `667 × 375` | Querformat-Layout wird angezeigt |
| 2 | Öffne Hamburger-Menü | Menü bleibt vollständig sichtbar und bedienbar |
| 3 | Öffne Reservierungsmodal | Modal kann vertikal gescrollt und geschlossen werden |
| 4 | Prüfe Mediensections | Timeline, Podcast und Social-Karten verursachen keinen Layoutbruch |

---

## TC-W67 – Timeline-Accordion öffnet und schließt auf kleinen Viewports

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite ist geladen |
| **Testdaten** | Viewports: `375 × 667` und `768 × 1024` |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Setze Smartphone-Viewport | Accordion-Darstellung der Timeline ist vorhanden |
| 2 | Prüfe Ausgangszustand | Inhalt ist gemäß Spezifikation eingeklappt oder sichtbar |
| 3 | Klicke auf Accordion-Trigger | Timeline-Inhalt wird sichtbar; Trigger-Zustand wechselt |
| 4 | Klicke erneut auf Trigger | Timeline-Inhalt wird ausgeblendet; Trigger-Zustand wechselt zurück |
| 5 | Wiederhole auf Tablet | Verhalten bleibt konsistent |

---

# Accessibility-Basis

## TC-W68 – Navigation ist per Tastatur bedienbar

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Desktop-Browser; Startseite geladen |
| **Testdaten** | Tab, Shift+Tab, Enter, Leertaste |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Drücke wiederholt Tab | Fokus bewegt sich in logischer Reihenfolge durch Navigation und interaktive Controls |
| 2 | Prüfe jeden Fokuszustand | Fokus ist sichtbar |
| 3 | Aktiviere einen Navbar-Link per Enter | Seite navigiert zur vorgesehenen Section |
| 4 | Öffne Reservierungsmodal per Tastatur | Modal öffnet sich und ist bedienbar |
| 5 | Prüfe Footer-Links und Formularcontrols | Sie sind per Tastatur erreichbar und aktivierbar |

---

## TC-W69 – Modal-Fokus bleibt im Modal, Escape schließt es

| Feld | Wert |
|---|---|
| **Typ** | manual |
| **Prio** | Mittel |
| **Kern-TC** | --- |
| **Vorbedingungen** | Startseite geladen; Tastatur verfügbar |
| **Testdaten** | Tab, Shift+Tab, Escape |

| Schritt | Aktion | Erwartetes Ergebnis / Assertion |
|---:|---|---|
| 1 | Öffne Reservierungsmodal | Fokus liegt auf einem sinnvollen Element im Modal, z. B. X-Button oder erstem Feld |
| 2 | Drücke mehrfach Tab | Fokus durchläuft nur interaktive Elemente im Modal |
| 3 | Drücke mehrfach Shift+Tab | Fokus bleibt ebenfalls im Modal und läuft zyklisch/korrekt rückwärts |
| 4 | Drücke Escape | Modal schließt sich, sofern Escape als unterstützte Funktion vorgesehen ist |
| 5 | Prüfe Fokus nach Schließen | Fokus kehrt zum auslösenden „Reservieren“-Button zurück |

---

# Abdeckungsübersicht

| Bereich | Enthaltene ausführliche Fälle |
|---|---|
| Navigation | TC-W01, W02, W06 |
| Reservierung | TC-W09–W19 |
| Zustände/Timeline/Carousel | TC-W20–W29 (ausgenommen Low-Priority Hover/Accordion-Altversion) |
| Podcast | TC-W33–W34 |
| Social Media | TC-W39–W42 |
| Footer/Kontakt | TC-W47–W52 |
| Formspree | TC-W54–W58 |
| Deep Links | TC-W59, W60, W62 |
| Responsive | TC-W63–W67 |
| Accessibility | TC-W68–W69 |

