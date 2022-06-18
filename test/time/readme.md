# Test Plan Dokument

- [UNIT TEST SEKTION](#unit-test-section)
  - [UNIT TEST CASES](#unit-test-cases)
    - [Zeitüberschreitung](#zeitüberschreitung)
      - [Testfall 1](#testfall-1)
      - [Testfall 2](#testfall-2)
      - [Testfall 3](#testfall-3)
      - [Testfall 4](#testfall-4)
      - [Testfall 5](#testfall-5)
      - [Testfall 6](#testfall-6)

## UNIT TEST SECTION

### UNIT TEST CASES

#### Zeitüberschreitung

##### Testfall 1

**Testfall-ID:** 1

**Zu testende Einheit:** Der Austausch der Energie, die die Stadt für bestimmte Zeit mit Energie versorgt

**Annahmen:** Angenommen, dass der Nutzer 10 Punkte oder 100 Punkte eintauschen, sollte die Stadt nur 10 oder 100 Minuten leuchten und danach ausschalten.

**Testdaten:** 
- punkte : 10
- letzteSpeicherungInMinuten : ?


**Auszuführende Schritte:**
1. 10 Punkte austauschen
2. letzte Speicherung der Punkte aus der Localstorage rausholen

**erwartetes Ergebnis:** Es wird erwartet, dass die Werte (letzte Speicherung = 10) und (punkte = 10 (Minuten)) gleich sind.

**Tatsächliche Ergebnis:** 10

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Keine

##### Testfall 2

**Testfall-ID:** 2

**Zu testende Einheit:** Der Austausch der Energie, die die Stadt für bestimmte Zeit mit Energie versorgt

**Annahmen:** Angenommen, dass der Nutzer 20 Punkte oder 100 Punkte eintauschen, sollte die Stadt nur 20 oder 100 Minuten leuchten und danach ausschalten.

**Testdaten:**
- punkte : 20
- letzteSpeicherungInMinuten : ?


**Auszuführende Schritte:**
1. 20 Punkte austauschen
2. letzte Speicherung der Punkte aus der Localstorage rausholen

**erwartetes Ergebnis:** Es wird erwartet, dass die Werte (letzte Speicherung = 20) und (punkte = 20 (Minuten)) gleich sind.

**Tatsächliche Ergebnis:** 10

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Keine

##### Testfall 3

**Testfall-ID:** 3

**Zu testende Einheit:** Der Austausch der Energie, die die Stadt für bestimmte Zeit mit Energie versorgt

**Annahmen:** Angenommen, dass der Nutzer 10 Punkte eintauscht, sollte die Stadt nur 10 Minute leuchten, aber keine Stunden.

**Testdaten:** 
- punkte : 10
- letzteSpeicherungInMinuten : ?


**Auszuführende Schritte:**
1. 20 Punkte austauschen
2. letzte Speicherung der Punkte aus der Localstorage rausholen

**erwartetes Ergebnis:** Es wird erwartet, dass die Dauer des Leuchtens 10 Minuten oder 0 Stunden beträgt

**Tatsächliche Ergebnis:** 0

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Keine

##### Testfall 4

**Testfall-ID:** 4

**Zu testende Einheit:** Der Austausch der Energie, die die Stadt für bestimmte Zeit mit Energie versorgt

**Annahmen:** Angenommen, dass der Nutzer 60 Punkte eintauscht, sollte die Stadt  60 Minute leuchten oder 1 Stunde

**Testdaten:**
- punkte : 60
- letzteSpeicherungInMinuten : ?


**Auszuführende Schritte:**
1. 60 Punkte austauschen
2. letzte Speicherung der Punkte aus der Localstorage rausholen

**erwartetes Ergebnis:** Es wird erwartet, dass die Dauer des Leuchtens 60 Minuten oder 1 Stunden beträgt

**Tatsächliche Ergebnis:** 1

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Keine

##### Testfall 5

**Testfall-ID:** 5

**Zu testende Einheit:** Der Austausch der Energie, die die Stadt für bestimmte Zeit mit Energie versorgt

**Annahmen:** Angenommen, dass der Nutzer 20 Punkte eintauscht, sollte die Stadt nur 20 Minuten leuchten, aber keine 30

**Testdaten:** 
- punkte : 20
- letzteSpeicherungInMinuten : ?


**Auszuführende Schritte:**
1. 20 Punkte austauschen
2. letzte Speicherung der Punkte aus der Localstorage rausholen

**erwartetes Ergebnis:** Es wird erwartet, dass die Dauer des Leuchtens 60 Minuten oder 1 Stunden beträgt

**Tatsächliche Ergebnis:** 1

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Keine

##### Testfall 6

**Testfall-ID:** 6

**Zu testende Einheit:** Der Austausch der Energie, die die Stadt für bestimmte Zeit mit Energie versorgt

**Annahmen:** Angenommen, dass der Nutzer 10 Punkte eintauscht, sollte die Stadt 10 Minuten oder 0 Tage leuchten

**Testdaten:** 
- punkte : 10
- letzteSpeicherungInMinuten : ?


**Auszuführende Schritte:**
1. 10 Punkte austauschen
2. letzte Speicherung der Punkte aus der Localstorage rausholen

**erwartetes Ergebnis:** Es wird erwartet, dass die Dauer des Leuchtens 10 Minuten oder 0 Tage beträgt

**Tatsächliche Ergebnis:** 0

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Keine

##### Testfall 7

**Testfall-ID:** 7

**Zu testende Einheit:** Der Austausch der Energie, die die Stadt für bestimmte Zeit mit Energie versorgt

**Annahmen:** Angenommen, dass der Nutzer 10 Punkte eintauscht, sollte die Stadt 1500 Minuten oder 1 Tag leuchten

**Testdaten:** 
- punkte : 1500
- letzteSpeicherungInMinuten : ?


**Auszuführende Schritte:**
1. 1500 Punkte austauschen
2. letzte Speicherung der Punkte aus der Localstorage rausholen

**erwartetes Ergebnis:** Es wird erwartet, dass die Dauer des Leuchtens 1500 Minuten oder 1 Tag beträgt

**Tatsächliche Ergebnis:** 1

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** Keine

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 1   | 10    | 10               |  Bestanden  |
| 2   | 20    | 20               |  Bestanden  |
| 3   | 60    | 1               |  Bestanden  |
| 4   | 60    | 1               |  Bestanden  |
| 5   | 30    | 20               |  Bestanden  |
| 6   | 10    | 0               |  Bestanden  |
| 7   | 1500    | 1               |  Bestanden  |
