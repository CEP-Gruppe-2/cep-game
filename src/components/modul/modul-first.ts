import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '../modul-card/modul-card'

@customElement('modul-first')
export class Onboarding extends LitElement {

    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            height: 100%;
            padding: 0 1em;
        }

        .modul-title{
            color: #57B894;
            display: block;
            margin: 1em 0 0 0;
            padding: 0;
            text-align: left;
            font-size: 1.5em;
            font-weight: 600;
            font-style: normal;
            line-height: 1.5em;
        }

        .modul-description{
            color: #979797;
            display: block;
            margin: 1em 0 0 0;
            padding: 0;
            text-align: left;
            font-size: 0.9em;
            font-weight: 600;
            font-style: normal;
            line-height: 1.5em;
        }

        .modul-btns{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-items: center;
            justify-content: space-between;
            align-items: center;
            margin: 1em 0 0 0;
        }

        .modul-btns > * {
            margin: 0.5em 0;
        }

        .modul-btn{
            text-decoration: none;
            color: #fff;
            padding: 0.5em 1em;
            text-align: center;
            background-color: #57B894;
            font-size: 1.1em;
        }

        .modul-themes{
            color: #000;
            display: block;
            margin: 1em 0 0 0;
            padding: 0;
            text-align: center;
            font-size: 1.5em;
            font-weight: 600;
            font-style: normal;
            line-height: 1.5em;
        }

        modul-card:hover{
            -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.63); 
            box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.63);
        }
    `

    @property({type: String})
    moduleTitle = ""

    @property({type: String})
    moduleDescription = ""

    @property({type: Array})
    game = {}

    render() {
        return html`
            <h3 class="modul-title">${this.moduleTitle}</h3>
            <p class="modul-description">${this.moduleDescription}</p>

            <div class="modul-btns">
                <a class="modul-btn" href="#download" >Download PDF</a>
                <a class="modul-btn" href="#losgehts" >Los geht's</a>
            </div>

            <h4 class="modul-themes">Themenübersicht</h4>

            ${ /* bei modul-card background-color hinzufügen,damit es in unterschiedlichen Farben angezeigt wird*/
                this.game.map(game =>   html` 
                <modul-card /** */
                    gameTitle=${game.spielTitel} 
                    gameDescription=${game.spielBeschreibung}
                    gameLink=${game.spielUrl}></modul-card>
            `)}
            
        `
    }

}
