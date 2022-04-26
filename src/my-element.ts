import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js' // property
import { cardArray } from './data/card-object'
import './components/module-card'
import './components/nav-bar'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`

    :host{}

    .module-section{
      margin: 0 0.5em;
      padding: 0;
      text-align: center;
    }

    .module-title{
      margin: 1em 0 0 0;
      padding: 0;
    }

    .flex-card{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 1em 0 0 0;
    }

    .flex-card module-card{
      width: 100%;
      margin: 0.5em 0 0 0;
    }

    @media (min-width: 528px) {
      
      .flex-card module-card{
        width: 200px;
        margin: 0.5em 0.25em 0 0.25em;
      } 
    }

    @media (min-width: 743px) {
      .module-section{
        margin: 0 auto;
        max-width: 743px;
      }
    }

    @media (min-width: 1025px) {
      .flex-card{
        justify-content: space-between;
      }

      .module-section{
        margin: 0 auto;
        max-width: 1025px;
        text-align: left;
      }
    }
  `

  public myfunction (): void {

  }

  render () {
    return html`
    <nav-bar username="SampleText"></nav-bar>
    <div class="module-section">
      <h2 class="module-title">
        Module
      </h2>
      <div class="flex-card">
        ${cardArray.map((card, index) => 
        html`
          <module-card .cardTitle=${card.title}
            .cardDescription=${card.description} 
            .cardPosition=${index+1} 
            .cardLink=${card.link}
            .cardImageName=${card.cardImageName}
            style="background-color: ${card.color};"
          ></module-card>`
        )}
      </div>
    </div>
      `
  }

}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}