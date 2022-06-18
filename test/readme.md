# Test Plan Dokument

- [UNIT TEST SEKTION](#unit-test-section)
  - [UNIT TEST CASES](#unit-test-cases)
    - [Das Setzen der Cookies](#das-setzen-der-cookies)
    - [Das Aufrufen der Cookies](#das-aufrufen-der-cookies)
    - [Das Speichern der Daten in Localstorage](#das-speichern-der-daten-in-localstorage)

## UNIT TEST SECTION

### UNIT TEST CASES

#### Das Setzen der Cookies

**Testfall-ID:** 1

**Zu testende Einheit:** Die Methode Set in der Cookies Klasse wird aufgerufen

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Ein mockSet erstellen (was das ist s. Dokumentatino Jest)
2. Mockset zur der Cookies.Set Methode hinzufügen, damit Cookie.Set als Funktion angesehen wird
3. Cookie.Set Methode aufgerufen
4. Kontrollieren, ob Cookies.Set aufgerufen wurde

**erwartetes Ergebnis:** Funktion wurde aufgerunfe

**Tatsächliche Ergebnis:** /

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Jest erkennt die Klasse bzw. die Bibliothek Cookies, deswegen kann die Funktionalität nicht im vollen Umfang getestet werden. Es wird nur getestet, ob die Funktion innerhalb der Klasse aufgerufen werden. Wenn die Funktionen / Methoden aufgerufen wird, können wir davon ausgehen, dass die versprochene Funktionalität zur 100% funktionsfähig ist und wir nur auf unsere Implememtation achten müssen

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 1   | das Aufrufen der Cookies.Set    | wird aufgerufen               |  Bestanden  |

#### Das Aufrufen der Cookies

**Testfall-ID:** 1

**Zu testende Einheit:** Die Methode Get in der Cookies Klasse wird aufgerufen

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Ein mockSet erstellen (was das ist s. Dokumentatino Jest)
2. Mockset zur der Cookies.Get Methode hinzufügen, damit Cookie.Get als Funktion angesehen wird
3. Cookie.Set Methode aufgerufen
4. Kontrollieren, ob Cookies.Get aufgerufen wurde

**erwartetes Ergebnis:** Funktion wurde aufgerufen

**Tatsächliche Ergebnis:** /

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Jest erkennt die Klasse bzw. die Bibliothek Cookies, deswegen kann die Funktionalität nicht im vollen Umfang getestet werden. Es wird nur getestet, ob die Funktion innerhalb der Klasse aufgerufen werden. Wenn die Funktionen / Methoden aufgerufen wird, können wir davon ausgehen, dass die versprochene Funktionalität zur 100% funktionsfähig ist und wir nur auf unsere Implememtation achten müssen

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 1   | das Aufrufen der Cookies.Get    | wird aufgerufen               |  Bestanden  |

#### Das Speichern der Daten in Localstorage

**Testfall-ID:** 1

**Zu testende Einheit:** Die Methode Set in der Cookies Klasse wird aufgerufen

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Ein mockSet erstellen (was das ist s. Dokumentatino Jest)
2. Mockset zur der Cookies.Set Methode hinzufügen, damit Cookie.Set als Funktion angesehen wird
3. Cookie.Set Methode aufgerufen
4. Kontrollieren, ob Cookies.Set aufgerufen wurde

**erwartetes Ergebnis:** Funktion wurde aufgerunfe

**Tatsächliche Ergebnis:** /

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Jest erkennt die Klasse bzw. die Bibliothek Cookies, deswegen kann die Funktionalität nicht im vollen Umfang getestet werden. Es wird nur getestet, ob die Funktion innerhalb der Klasse aufgerufen werden. Wenn die Funktionen / Methoden aufgerufen wird, können wir davon ausgehen, dass die versprochene Funktionalität zur 100% funktionsfähig ist und wir nur auf unsere Implememtation achten müssen

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 1   | das Aufrufen der Cookies.Set    | wird aufgerufen               |  Bestanden  |