# Bug Report

**Bug-ID:** `BUG-006`  
**Erstellt:** 2026-09-18  
**Autor:** QA  
**Status:** `Offen`  
**Projekt:** Web  
**Komponente:** `Timeline-Accordion`  
**Typ:** `Bug`  
**Severity:** `Mittel`  
**Priority:** `Mittel`  
**Labels:** `accessibility`, `accordion`, `aria`  

---

## 1. Zusammenfassung

**Titel:** Timeline-Accordion aktualisiert `aria-expanded` nicht

**Kurzbeschreibung:**  
Der Accordion-Button besitzt kein `aria-expanded`-Attribut. Assistive Technologien erhalten dadurch keinen programmatischen Hinweis, ob die Timeline geöffnet oder geschlossen ist.

---

## 2. Umgebung

| Feld | Wert |
|---|---|
| **Projekt** | Web |
| **URL / Build** | `https://kaffeehaus-riquet.netlify.app/` |
| **Browser / OS** | Chromium / Windows |
| **Viewport / Gerät** | Smartphone 375×667 |
| **Testdaten / Account** | Nicht erforderlich |
| **Testfall-ID** | `TC-W70` |

---

## 3. Vorbedingungen

- Startseite ist geladen.
- Smartphone-Viewport mit 375×667 ist aktiv.

---

## 4. Schritte zur Reproduktion

| Schritt | Aktion | Erwartetes Ergebnis | Tatsächliches Ergebnis |
|---:|---|---|---|
| 1 | Timeline-Accordion suchen | Button besitzt `aria-expanded="false"` | Attribut fehlt |
| 2 | Accordion öffnen | Wert wechselt auf `aria-expanded="true"` | Kein ARIA-Zustand wird gesetzt |
| 3 | Accordion schließen | Wert wechselt auf `aria-expanded="false"` | Kein ARIA-Zustand wird gesetzt |

---

## 5. Erwartetes Verhalten

Der Button besitzt im geschlossenen Zustand `aria-expanded="false"` und aktualisiert den Wert beim Öffnen und Schließen korrekt.

## 6. Tatsächliches Verhalten

Der Button `#timelineAccordion` besitzt kein `aria-expanded`-Attribut.

## 7. Häufigkeit

| Feld | Wert |
|---|---|
| **Reproduzierbarkeit** | `Immer` |
| **Getestete Durchläufe** | 2 von 2 Versuchen reproduzierbar |
| **Besondere Bedingungen** | Accordion im Smartphone-Viewport |

## 8. Verknüpfungen

| Typ | Referenz | Beschreibung |
|---|---|---|
| **Verwandte Testfälle** | `TC-W70` | Prüft den programmatischen Accordion-Zustand |
| **Blockiert** | --- | --- |
| **Wird blockiert von** | --- | --- |
| **Verwandte Bugs** | --- | --- |
| **Anforderung / Ticket** | --- | --- |

## 11. Historie / Änderungen

| Datum | Autor | Änderung |
|---|---|---|
| 2026-09-18 | QA | Bug erstellt; durch `TC-W70` reproduziert |
