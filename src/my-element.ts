import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { cardArray } from './data/card-object'
import './components/card-component.js'



@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host{

    }

    .module-title{
      font-size: 32px;
      font-style: normal;
      font-family: Arial;
      line-height: none;
      text-align: left;
      margin: 0;
      padding: 0;
    }
  `

  public myfunction(): void {

  }

  render() {
    return html`
      <h2 class="module-title">
        Module
      </h2>
      ${cardArray.map((card, index) => 
      html`
        <card-component  cardTitle=${card.title} 
          cardDescription=${card.description} 
          cardPosition=${index+1} 
          cardColor=${card.color}
          cardLink=${card.link}
          ></card-component>`
      )}
      `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}