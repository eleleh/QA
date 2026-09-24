# Bug Report

**Bug-ID:** `BUG-001`  
**Erstellt:** 2026-09-18  
**Autor:** QA  
**Status:** `Offen`  
**Projekt:** Web  
**Komponente:** `Formspree-Integration / Kontaktformular`  
**Typ:** `Bug`  
**Severity:** `Mittel`  
**Priority:** `Mittel`  
**Labels:** `form`, `formspree`, `offline`, `error-handling`  

---

## 1. Zusammenfassung

**Titel:** Kontaktformular zeigt bei einem abgebrochenen Formspree-Request keinen Fehlerhinweis

**Kurzbeschreibung:**  
Wenn der Formspree-Request des Kontaktformulars wegen fehlender Netzwerkverbindung abbricht, wird kein sichtbarer Fehlerhinweis bzw. keine Retry-Möglichkeit angezeigt. Der Benutzer erhält dadurch keine Rückmeldung über den fehlgeschlagenen Versand.

---

## 2. Umgebung

| Feld | Wert |
|---|---|
| **Projekt** | Web |
| **URL / Build** | `https://kaffeehaus-riquet.netlify.app/` |
| **Browser / OS** | Chromium / Windows |
| **Viewport / Gerät** | Desktop Chrome |
| **Testdaten / Account** | Name: `Max Mustermann`; E-Mail: `max@example.com`; gültige Nachricht |
| **Testfall-ID** | `TC-W55` |

---

## 3. Vorbedingungen

- Startseite ist geladen.
- Kontaktformular ist sichtbar.
- Alle Pflichtfelder sind gültig ausgefüllt.
- Der Formspree-Request wird wegen fehlender Netzwerkverbindung abgebrochen.

---

## 4. Schritte zur Reproduktion

| Schritt | Aktion | Erwartetes Ergebnis | Tatsächliches Ergebnis |
|---:|---|---|---|
| 1 | Kontaktformular öffnen und gültige Daten eintragen | Eingaben werden akzeptiert | Eingaben werden akzeptiert |
| 2 | Netzwerkverbindung während des Submit-Vorgangs abbrechen | Request schlägt fehl | Request schlägt fehl |
| 3 | Formular absenden | Sichtbarer Fehlerhinweis oder Retry-Möglichkeit erscheint | Kein sichtbarer Fehlerzustand wird angezeigt |

---

## 5. Erwartetes Verhalten

Das Kontaktformular zeigt eine verständliche Fehlermeldung wie „Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.“ oder bietet eine Retry-Möglichkeit an. Die eingegebenen Werte bleiben erhalten.

---

## 6. Tatsächliches Verhalten

Der fehlgeschlagene Request führt im automatisierten Test zu keiner beobachtbaren sichtbaren Fehlermeldung oder Retry-Möglichkeit. Ein erfolgreicher Versand wird nicht bestätigt, der Benutzer bleibt aber ohne klare Rückmeldung.

---

## 7. Häufigkeit

| Feld | Wert |
|---|---|
| **Reproduzierbarkeit** | `Immer` |
| **Getestete Durchläufe** | 2 von 2 Versuchen reproduzierbar |
| **Besondere Bedingungen** | Formspree-Request wird mit `internetdisconnected` abgebrochen |

---

## 8. Verknüpfungen (Links & Dependencies)

| Typ | Referenz | Beschreibung |
|---|---|---|
| **Verwandte Testfälle** | `TC-W55` | Prüft Offline-/Timeout-Verhalten des Kontaktformulars |
| **Blockiert** | --- | --- |
| **Wird blockiert von** | --- | --- |
| **Verwandte Bugs** | --- | --- |
| **Anforderung / Ticket** | --- | --- |

---

## 11. Historie / Änderungen

| Datum | Autor | Änderung |
|---|---|---|
| 2026-09-18 | QA | Bug erstellt; durch `TC-W55` reproduziert |

---
