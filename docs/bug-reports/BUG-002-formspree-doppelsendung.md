# Bug Report

**Bug-ID:** `BUG-002`  
**Erstellt:** 2026-09-18  
**Autor:** QA  
**Status:** `Offen`  
**Projekt:** Web  
**Komponente:** `Formspree-Integration / Reservierungsformular`  
**Typ:** `Bug`  
**Severity:** `Hoch`  
**Priority:** `Hoch`  
**Labels:** `form`, `formspree`, `duplicate-request`, `reservation`  

---

## 1. Zusammenfassung

**Titel:** Doppelklick auf den Submit-Button sendet zwei Formspree-Requests

**Kurzbeschreibung:**  
Wird der Submit-Button des Reservierungsformulars doppelt ausgelöst, werden zwei Formspree-Requests gesendet. Dadurch kann eine Reservierung doppelt verarbeitet oder an den Betreiber doppelt übermittelt werden.

---

## 2. Umgebung

| Feld | Wert |
|---|---|
| **Projekt** | Web |
| **URL / Build** | `https://kaffeehaus-riquet.netlify.app/` |
| **Browser / OS** | Chromium / Windows |
| **Viewport / Gerät** | Desktop Chrome |
| **Testdaten / Account** | Gültige Reservierungsdaten mit 2 Personen |
| **Testfall-ID** | `TC-W56` |

---

## 3. Vorbedingungen

- Startseite ist geladen.
- Reservierungsmodal ist geöffnet.
- Alle Pflichtfelder sind gültig ausgefüllt.
- Formspree-Antwort wird im Test erfolgreich simuliert.

---

## 4. Schritte zur Reproduktion

| Schritt | Aktion | Erwartetes Ergebnis | Tatsächliches Ergebnis |
|---:|---|---|---|
| 1 | Reservierungsformular mit gültigen Daten ausfüllen | Formular ist absendebereit | Formular ist absendebereit |
| 2 | Submit-Button doppelt anklicken | Nur ein Request wird an Formspree gesendet | Zwei Requests werden an Formspree gesendet |
| 3 | Request-Anzahl prüfen | Genau ein Request | Request-Zähler enthält `2` |

---

## 5. Erwartetes Verhalten

Nach dem ersten Submit wird der Button deaktiviert oder weitere Submit-Ereignisse werden blockiert. Pro Formularabsendung darf nur ein Formspree-Request ausgelöst werden.

---

## 6. Tatsächliches Verhalten

Der Submit-Handler akzeptiert beide Klicks und löst zwei Requests aus. Im automatisierten Test `TC-W56` wurde `requestCount = 2` statt `1` festgestellt.

---

## 7. Häufigkeit

| Feld | Wert |
|---|---|
| **Reproduzierbarkeit** | `Immer` |
| **Getestete Durchläufe** | 2 von 2 Versuchen reproduzierbar |
| **Besondere Bedingungen** | Zwei schnelle Klicks auf den Reservierungs-Submit-Button |

---

## 8. Verknüpfungen (Links & Dependencies)

| Typ | Referenz | Beschreibung |
|---|---|---|
| **Verwandte Testfälle** | `TC-W56` | Prüft, dass ein Doppelklick nur einen Request auslöst |
| **Blockiert** | --- | --- |
| **Wird blockiert von** | --- | --- |
| **Verwandte Bugs** | --- | --- |
| **Anforderung / Ticket** | --- | --- |

---

## 11. Historie / Änderungen

| Datum | Autor | Änderung |
|---|---|---|
| 2026-09-18 | QA | Bug erstellt; durch `TC-W56` reproduziert |

---
