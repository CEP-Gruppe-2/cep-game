import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('modul-card')
export class ModulCard extends LitElement {

  static styles = css`
    
    :host{
        display: block;
        margin: 1em 0 0;
        border: 1px solid #b5b5b5;
        border-radius: 0.5em;
    }

    :host:hover{
        text-align: center;
        -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.63); 
        box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.63);
    }

    .modul-card{
        display: block;
        padding: 0.5em;
        margin: 0;
    }

    .modul-card-header{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 1em 0 0 0;
    }

    .modul-card-title{
        display: block;
        text-align: left;
        padding: 0;
        margin: 0;
        font-weight: 500;
        font-size: 1.25em;
        font-style: normal;
    }

    .modul-card-pill{

    }

    .modul-card-pill p{

    }

    .modul-card-paragraph{
        padding: 0;
        margin: 1em 0 0 0;
        text-align: left;
        line-height: 1.25em;
        font-size: 1em;
        color: #969696;
        display: block;
    }

    .modul-card-btn{
        display: block;
        width: 50%;
        margin-top: 1em; 
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 0.5em;
        text-align: center;
        text-decoration: none;
        color: #000;
        border: 1px solid #969696;
        padding: 0.5em 0;
        border-radius: 0.75em;
    }

  `

    @property({type: String})
    gameTitle = ""

    @property({type: Number})
    gameCompletedPercent = 0

    @property({type: String})
    gameDescription = ""

    @property({type: String})
    gameLink = ""

    getPill(){
        return html ``
    }

  render() {
    return html`
        <div class="modul-card">
            <div class="modul-card-header">
                <h3 class="modul-card-title">${this.gameTitle}</h3>
                ${this.getPill()}
            </div>
            <p class="modul-card-paragraph">${this.gameDescription}</p>
            <a class="modul-card-btn" href="${this.gameLink}">Zum Spiel</a>
        </div>
    `
  }
}