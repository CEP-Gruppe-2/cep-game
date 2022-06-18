cep-game / [Exports](modules.md)

# SafeWise
## Einführung
Das Projekt ist eine kleine Website mit 3 Modulen, und in jedem Modul gibt es 2 bis 4 Spiele, die sich mit OT-Security befassen. 

Zu Beginn durchläuft der Nutzer eine kurze Einführung und lernt Joules kennen. Joules ist ein virtueller Assistent, der dem Nutzer vor dem ersten Modul erklärt, welche Rolle er im Projekt spielt und was ihn während der Spiele erwartet. Plötzlich wird das E-Werk von Hackern angegriffen und der Spieler steht vor einer schwierigen Entscheidung:

- Hacker verfolgen oder
- die Anlage reparieren und mehr über OT-Security erfahren

Nach der Einleitung beginnt der Spieler sein Spiel mit dem ersten Modul. Die in Module unterteilten Spiele wurden absichtlich so gestaltet, dass der Spieler versteht, warum es sich lohnt, auf die kleinsten Dinge zu achten und dann von den einfachsten Themen zu komplexeren übergeht, die etwa beschreiben, wie sich Hacker Zugang zu Fabriken verschaffen, wie sie gehackt werden, welche Schwachstellen es gibt und wie man sich in solchen Situationen schützen kann. 

Das sieht ungefähr so [aus](https://de.wikipedia.org/wiki/Automatisierungspyramide):

![Automatisierungsebene](https://upload.wikimedia.org/wikipedia/commons/0/0e/Automatisierungspyramide2.svg)

## Installation & Konfiguration
1. Gehen Sie auf den Link [Projekt](https://github.com/CEP-Gruppe-2/cep-game).
2. Klicken Sie auf `Code`

![](https://i.ibb.co/4m4WTYD/Bildschirmfoto-2022-06-02-um-15-35-29.png)

3. erste Möglichkeit:

	*	Sie laden den Zip-Ordner herunter
	*	packen diesen aus
	*	starten ein IDE
	*	öffnen den Ordner im IDE

![](https://i.ibb.co/SmWgXmg/Bildschirmfoto-2022-06-02-um-15-45-39.png)

4. zweite Möglichkeit: 
	* Sie öffnen ihren IDE
	* öffnen in ihrem IDE Terminal
	* im Terminal geben Sie folgende Befehle ein (s. unten):
![](https://i.ibb.co/sFj0qSD/Bildschirmfoto-2022-06-02-um-15-51-19.png)

`git clone <link zum Repository>`
`cd <ordner, das gerade erstellt wurde>`

5. Depedencies / Packages installieren, die für die Arbeit des Projekt nötig sind:
	* `npm run i`
6. Das Projekt ist ausführbar
	*	ausführen: `npm run dev`, im Terminal wird es angezeigt, dass das Projekt gerade ausgeführt wird und die Webseite ist unter dem Link `localhost:3000/` verfügbar
7. Projekt kompilieren
	* `npm run build`, das Projekt wird in den dist Ordner kompiliert. In diesem Ordner finden Sie alle benötigten Dateien (HTML, CSS, JS / JavaScript)
