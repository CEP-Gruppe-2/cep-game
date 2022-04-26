import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('module-card')
export class ModuleCard extends LitElement {

    @property({type: Object})
    cardInformation = {};

    @property({type: String})
    cardTitle = "";

    @property({type: String})
    cardDescription = "";

    @property({type: Number})
    cardPosition = 0;

    @property({type: String})
    cardColor = "";

    @property({type: String})
    cardLink = "";

    @property({type: String})
    cardImageName = "";


  static styles = css`
    
    :host{
        padding: 24px;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        width: 250px;
        height: auto;
        border-radius: 20px;
        //margin: 0 16px;
    }
   
    .icon-size{
        width: 36px;
        height: 36px;
        padding: 0;
        margin: 0;
    }

    .card-text-box{
        text-align: left;
        color: #000;
        font-family: monospace;
        padding: 0;
        margin: 100px 0 0 0;
    }

    .card-header{
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .card-break-line{
        height: 1px;
        width: 100%;
        background-color: #000;
        border: none;
    }

    .card-number{
        font-size: 12px;
        font-family: fantasy;
        
    }

    .card-description{
        color: #585858;
        font-size: 16px;
    }

  `

  render() {
    return html`
        <img src="/src/icons/${this.cardImageName}" class="icon-size"/>
        <div class="card-text-box">
            <span class="card-number">${this.cardPosition}</span>
            <div class="card-header">
                <h2 class="card-title">
                    ${this.cardTitle}
                </h2>
                <a class="card-arrow-btn" href="${this.cardLink}">
                    <img class="card-arrow" src="/src/icons/arrow.svg"/>  
                </a>
            </div>
            <hr class="card-break-line"/>
            <p class="card-description">${this.cardDescription}</p>
        </div>
    `
  }
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'module-card': ModuleCard
  }
}