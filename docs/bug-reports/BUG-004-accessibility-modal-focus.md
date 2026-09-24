# Bug Report

**Bug-ID:** `BUG-004`  
**Erstellt:** 2026-09-18  
**Autor:** QA  
**Status:** `Offen`  
**Projekt:** Web  
**Komponente:** `ReservationModal`  
**Typ:** `Bug`  
**Severity:** `Hoch`  
**Priority:** `Hoch`  
**Labels:** `accessibility`, `keyboard`, `modal`, `focus`  

---

## 1. Zusammenfassung

**Titel:** Reservierungsmodal hält den Fokus nicht und lässt sich nicht per Escape schließen

**Kurzbeschreibung:**  
Beim Öffnen des Reservierungsmodals wird der Tastaturfokus nicht zuverlässig im Modal gehalten. Außerdem schließt `Escape` das Modal nicht.

---

## 2. Umgebung

| Feld | Wert |
|---|---|
| **Projekt** | Web |
| **URL / Build** | `https://kaffeehaus-riquet.netlify.app/` |
| **Browser / OS** | Chromium / Windows |
| **Viewport / Gerät** | Desktop Chrome |
| **Testdaten / Account** | Nicht erforderlich |
| **Testfall-ID** | `TC-W67` |

---

## 3. Vorbedingungen

- Startseite ist geladen.
- Reservierungsmodal wurde geöffnet.

---

## 4. Schritte zur Reproduktion

| Schritt | Aktion | Erwartetes Ergebnis | Tatsächliches Ergebnis |
|---:|---|---|---|
| 1 | Reservierungsmodal öffnen | Fokus befindet sich im Modal | Fokus wird nicht zuverlässig im Modal gesetzt |
| 2 | Mehrfach `Tab` drücken | Fokus bleibt innerhalb des Modals | Fokus verlässt das Modal |
| 3 | `Escape` drücken | Modal schließt sich | Modal bleibt geöffnet |

---

## 5. Erwartetes Verhalten

Das Modal setzt den Fokus beim Öffnen auf ein interaktives Element, hält den Fokus beim Tabben innerhalb des Modals und schließt sich bei `Escape`.

## 6. Tatsächliches Verhalten

Der Fokus kann das Modal verlassen. `Escape` schließt das Modal nicht.

## 7. Häufigkeit

| Feld | Wert |
|---|---|
| **Reproduzierbarkeit** | `Immer` |
| **Getestete Durchläufe** | 2 von 2 Versuchen reproduzierbar |
| **Besondere Bedingungen** | Tastaturbedienung |

## 8. Verknüpfungen

| Typ | Referenz | Beschreibung |
|---|---|---|
| **Verwandte Testfälle** | `TC-W67` | Prüft Fokusfalle und Escape-Verhalten |
| **Blockiert** | --- | --- |
| **Wird blockiert von** | --- | --- |
| **Verwandte Bugs** | --- | --- |
| **Anforderung / Ticket** | --- | --- |

## 11. Historie / Änderungen

| Datum | Autor | Änderung |
|---|---|---|
| 2026-09-18 | QA | Bug erstellt; durch `TC-W67` reproduziert |
