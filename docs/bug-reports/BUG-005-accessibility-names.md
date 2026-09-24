# Bug Report

**Bug-ID:** `BUG-005`  
**Erstellt:** 2026-09-18  
**Autor:** QA  
**Status:** `Offen`  
**Projekt:** Web  
**Komponente:** `Navigation / interaktive Elemente`  
**Typ:** `Bug`  
**Severity:** `Mittel`  
**Priority:** `Mittel`  
**Labels:** `accessibility`, `accessible-name`, `navigation`  

---

## 1. Zusammenfassung

**Titel:** Mehrere sichtbare interaktive Elemente besitzen keinen Accessible Name

**Kurzbeschreibung:**  
Mehrere Links, Icon-Buttons und Formularfelder haben weder sichtbaren Text noch `aria-label`, `title` oder eine korrekt verknüpfte Beschriftung. Screenreader-Nutzer können diese Elemente dadurch nicht verständlich bedienen.

---

## 2. Umgebung

| Feld | Wert |
|---|---|
| **Projekt** | Web |
| **URL / Build** | `https://kaffeehaus-riquet.netlify.app/` |
| **Browser / OS** | Chromium / Windows |
| **Viewport / Gerät** | Desktop Chrome |
| **Testdaten / Account** | Nicht erforderlich |
| **Testfall-ID** | `TC-W68` |

---

## 3. Vorbedingungen

- Startseite ist geladen.
- Sichtbare Links, Buttons und Formularfelder werden geprüft.

---

## 4. Schritte zur Reproduktion

| Schritt | Aktion | Erwartetes Ergebnis | Tatsächliches Ergebnis |
|---:|---|---|---|
| 1 | Startseite laden | Alle sichtbaren Controls besitzen einen Accessible Name | Mehrere Controls besitzen keinen Namen |
| 2 | Navigation und Formulare mit einem Screenreader prüfen | Zweck der Elemente wird angesagt | Zweck ist teilweise nicht erkennbar |

---

## 5. Erwartetes Verhalten

Jedes sichtbare interaktive Element besitzt einen zugänglichen Namen über sichtbaren Text, ein korrekt verknüpftes Label oder `aria-label`.

## 6. Tatsächliches Verhalten

Der automatisierte Test findet unter anderem unbenannte Links, Icon-Buttons sowie Kontaktformularfelder.

## 7. Häufigkeit

| Feld | Wert |
|---|---|
| **Reproduzierbarkeit** | `Immer` |
| **Getestete Durchläufe** | 2 von 2 Versuchen reproduzierbar |
| **Besondere Bedingungen** | Sichtbare Elemente auf der Startseite |

## 8. Verknüpfungen

| Typ | Referenz | Beschreibung |
|---|---|---|
| **Verwandte Testfälle** | `TC-W68` | Prüft Accessible Names |
| **Blockiert** | --- | --- |
| **Wird blockiert von** | --- | --- |
| **Verwandte Bugs** | --- | --- |
| **Anforderung / Ticket** | --- | --- |

## 11. Historie / Änderungen

| Datum | Autor | Änderung |
|---|---|---|
| 2026-09-18 | QA | Bug erstellt; durch `TC-W68` reproduziert |
