# Bug Report

**Bug-ID:** `BUG-003`  
**Erstellt:** 2026-09-18  
**Autor:** QA  
**Status:** `Offen`  
**Projekt:** Web  
**Komponente:** `Mobile Navigation`  
**Typ:** `Bug`  
**Severity:** `Mittel`  
**Priority:** `Mittel`  
**Labels:** `accessibility`, `keyboard`, `mobile-navigation`  

---

## 1. Zusammenfassung

**Titel:** Escape schließt das geöffnete mobile Menü nicht

**Kurzbeschreibung:**  
Das mobile Menü lässt sich per Tastatur mit Enter öffnen, aber nicht mit Escape schließen. Dadurch fehlt eine erwartete Tastaturbedienung.

---

## 2. Umgebung

| Feld | Wert |
|---|---|
| **Projekt** | Web |
| **URL / Build** | `https://kaffeehaus-riquet.netlify.app/` |
| **Browser / OS** | Chromium / Windows |
| **Viewport / Gerät** | Smartphone 375×667 |
| **Testdaten / Account** | Nicht erforderlich |
| **Testfall-ID** | `TC-W66` |

---

## 3. Vorbedingungen

- Startseite ist geladen.
- Smartphone-Viewport mit 375×667 ist aktiv.

---

## 4. Schritte zur Reproduktion

| Schritt | Aktion | Erwartetes Ergebnis | Tatsächliches Ergebnis |
|---:|---|---|---|
| 1 | Fokus auf den Hamburger-Button setzen | Button ist fokussiert | Button ist fokussiert |
| 2 | `Enter` drücken | Mobiles Menü öffnet sich | Menü öffnet sich |
| 3 | `Escape` drücken | Mobiles Menü schließt sich | Menü bleibt geöffnet |

---

## 5. Erwartetes Verhalten

Das geöffnete mobile Menü wird durch `Escape` geschlossen.

## 6. Tatsächliches Verhalten

Das Menü behält die Klasse `active` und bleibt geöffnet.

## 7. Häufigkeit

| Feld | Wert |
|---|---|
| **Reproduzierbarkeit** | `Immer` |
| **Getestete Durchläufe** | 2 von 2 Versuchen reproduzierbar |
| **Besondere Bedingungen** | Tastaturbedienung im Smartphone-Viewport |

## 8. Verknüpfungen

| Typ | Referenz | Beschreibung |
|---|---|---|
| **Verwandte Testfälle** | `TC-W66` | Prüft Tab, Enter und Escape |
| **Blockiert** | --- | --- |
| **Wird blockiert von** | --- | --- |
| **Verwandte Bugs** | --- | --- |
| **Anforderung / Ticket** | --- | --- |

## 11. Historie / Änderungen

| Datum | Autor | Änderung |
|---|---|---|
| 2026-09-18 | QA | Bug erstellt; durch `TC-W66` reproduziert |
