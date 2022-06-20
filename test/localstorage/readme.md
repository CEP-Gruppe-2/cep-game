# Test Plan Dokument

- [UNIT TEST SEKTION](#unit-test-section)
  - [UNIT TEST CASES](#unit-test-cases)
    - [Das Speichern in den Localstorage 1](#Das-Speichern-in-den-Localstorage-1)
    - [Das Speichern und Abrufen der Punkte im Localstorage](#Das-Speichern-und-Abrufen-der-Punkte-in-den-Localstorage)
    - [Das Speichern der Punkte in den Localstorage-1](#Das-Speichern-der-Punkte-in-den-Localstorage-1)
    - [Das Speichern der Punkte in den Localstorage-2](#Das-Speichern-der-Punkte-in-den-Localstorage-2)
    - [Das Speichern in den Localstorage 2](#Das-Speichern-in-den-Localstorage-2)
    - [Das Speichern der erhaltenen Punkte ins Array](#Das-Speichern-der-erhaltenen-Punkte-ins-Array)
    - [Das Speichern in den Localstorage 3](#Das-Speichern-in-den-Localstorage-3)
    - [Ausgabe von Keys aus dem LocalStorage die nicht existieren](#Ausgabe-von-Keys-aus-dem-LocalStorage-die-nicht-existieren)
    - [Ausgabe von leerem Array der Punkte](#Ausgabe-von-leerem-Array-der-Punkte)
    - [Speichern von Punkten](#Speichern-von-Punkten)
    - [Speichern und Löschen von Punkten](#Speichern-und-Löschen-von-Punkten)


     

## UNIT TEST SECTION

### UNIT TEST CASES

#### Das Speichern in den Localstorage 1

**Testfall-ID:** 1

**Zu testende Einheit:** Die Methode setItemLocalStorage in der localstorage Klasse wird aufgerufen und getestet

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. setItemLocalStorage aufrufen und setze Name und Value im Localstorage
3. aufrufen von der getItem Methode, mit entsprechndem key und vergleichen ob diese mit gesetztem wert übereinstimmen

**erwartetes Ergebnis:** Werte sind gleich

**Tatsächliche Ergebnis:** Werte sind gleich

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 1 | das Speichern in den Localstorage | Werte sind gleich | Bestanden |



#### Das Speichern und Abrufen der Punkte im Localstorage

**Testfall-ID:** 2

**Zu testende Einheit:** Die Methode addPointsToLocalStorage in der localstorage Klasse wird aufgerufen und getestet

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. addPointsToLocalStorage aufrufen und setze Name und Value (Punkte) im Localstorage
3. aufrufen von der returnTotalPoints Methode und übeprüfen das die Punkte richtig gesetzt wurden

**erwartetes Ergebnis:** Werte sind gleich

**Tatsächliche Ergebnis:** Werte sind gleich

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 2 | Das Speichern und Abrufen der Punkte im Localstorage | Werte sind gleich | Bestanden |


#### Das Speichern der Punkte in den Localstorage-1

**Testfall-ID:** 3

**Zu testende Einheit:** Die Methode addPointsToLocalStorage in der localstorage Klasse wird aufgerufen und getestet ob in Localstorage gespeichert wird.

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. addPointsToLocalStorage aufrufen und setze Name und Value (Punkte) im Localstorage
3. aufrufen der itemExistInLocalstorage Methode und überprüfen ob der gesetzte Key existiert

**erwartetes Ergebnis:** Item existier 

**Tatsächliche Ergebnis:** Item existier 

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 3 | Das Speichern der Punkte in den Localstorage | Item existier  | Bestanden |


#### Das Speichern der Punkte in den Localstorage-2

**Testfall-ID:** 4

**Zu testende Einheit:** Die Methode addPointsToLocalStorage in der localstorage Klasse wird aufgerufen und getestet ob in Localstorage gespeichert wird.

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. addPointsToLocalStorage aufrufen und setze Name und Value (Punkte) im Localstorage
3. aufrufen der itemExistInLocalstorage Methode und überprüfen ob der gesetzte Key existiert

**erwartetes Ergebnis:** Item existier 

**Tatsächliche Ergebnis:** Item existier 

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 4 | Das Speichern der Punkte in den Localstorage | Item existier  | Bestanden |



#### Das Speichern in den Localstorage 2

**Testfall-ID:** 5

**Zu testende Einheit:** Die Methode setItemLocalStorage in der localstorage Klasse wird aufgerufen und getestet

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. setItemLocalStorage aufrufen und setze Name und Value im Localstorage
3. aufrufen von der getItem Methode, mit entsprechndem key und vergleichen ob wert nicht null ist

**erwartetes Ergebnis:** Wert ist nicht null

**Tatsächliche Ergebnis:** Wert ist nicht null

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 5 | das Speichern in den Localstorage | Wert ist nicht null | Bestanden |



#### Das Speichern der erhaltenen Punkte ins Array 

**Testfall-ID:** 6

**Zu testende Einheit:** Die Methode addPointsToLocalStorage in der localstorage Klasse wird aufgerufen und getestet

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. addPointsToLocalStorage aufrufen und setze Name und Value im Localstorage
3. aufrufen von der getArrayWithGainedPoints Methode und übeprüfen ob die länge übereinstimmt

**erwartetes Ergebnis:** Länge stimmt überein

**Tatsächliche Ergebnis:** Länge stimmt überein

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 6 | Das Speichern der erhaltenen Punkte ins Array  | Länge stimmt überein | Bestanden |


#### Das Speichern in den Localstorage 3

**Testfall-ID:** 7

**Zu testende Einheit:** Die Methode setItemLocalStorage in der localstorage Klasse wird aufgerufen und getestet

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. setItemLocalStorage aufrufen und setze Name und Value im Localstorage
3. aufrufen von der getItemLocalStorage Methode, mit entspchendem key und übeprüfen ob ausgabe gleich dem dazugehörigen value

**erwartetes Ergebnis:** stimmen überein

**Tatsächliche Ergebnis:** stimmen überein

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 7 | Das Speichern in den Localstorage  | stimmen überein | Bestanden |


#### Ausgabe von Keys aus dem LocalStorage die nicht existieren

**Testfall-ID:** 8

**Zu testende Einheit:** Der Localstorage und die dazugehörige Methode getItemLocalStorage

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. aufrufen dern getItemLocalStorage Methode mit Key und überprüfen ob die Ausgabe ein leerer String ist


**erwartetes Ergebnis:** ausgabe ist leerer String

**Tatsächliche Ergebnis:** ausgabe ist leerer String

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 8 | Ausgabe von Keys aus dem LocalStorage die nicht existieren  | ausgabe ist leerer String | Bestanden |


#### Ausgabe von leerem Array der Punkte

**Testfall-ID:** 9

**Zu testende Einheit:** Der Localstorage und die dazugehörige Methode getArrayWithGainedPoints

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. aufrufen dern getItemLocalStorage Methode mit Key und überprüfen ob die Ausgabe ein leerer String ist


**erwartetes Ergebnis:** länge des zurückgegeben array ist 0
**Tatsächliche Ergebnis:** länge des zurückgegeben array ist 0

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 9 | Ausgabe von leerem Array der Punkte  | länge des zurückgegeben array ist 0 | Bestanden |


#### Speichern von Punkten 

**Testfall-ID:** 10

**Zu testende Einheit:** Der Localstorage und die dazugehörige Methode getArrayWithGainedPoints

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. aufrufen der addPointsToLocalStorage
3. aufrufen der addPointsToLocalStorage
4. rufe returnTotalPoints auf und checke ob diese mit gewünschten Punkten übereinstimmen

**erwartetes Ergebnis:** Punkte stimmen überein
**Tatsächliche Ergebnis:** Punkte stimmen überein

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 10 | Speichern von Punkten  | Punkte stimmen überein | Bestanden |

#### Speichern und Löschen von Punkten 

**Testfall-ID:** 11

**Zu testende Einheit:** Der Localstorage und die dazugehörige Methode getArrayWithGainedPoints

**Annahmen:** /

**Testdaten:** /

**Auszuführende Schritte:**
1. Fake Localstorage generieren
2. aufrufen der addPointsToLocalStorage
3. aufrufen der addPointsToLocalStorage
4. rufe returnTotalPoints auf und checke ob diese mit gewünschten Punkten übereinstimmen
5. punkte mit removeAllPointsFromLocalStorage löschen
6. überpüfen ob die Punkte 0 sind

**erwartetes Ergebnis:** Punkte sind 0
**Tatsächliche Ergebnis:** Punkte sind 0

**Bestanden / Nicht bestanden:** *Bestanden*

**Bemerkungen:** /

| \#  | Eingang | Erwartetes Ergebnis | Testlauf |
| --- | ----- | ---------------- | ---- |
| 11 | Speichern und Löschen von Punkten | Punkte sind 0 | Bestanden |