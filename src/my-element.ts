import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js' // property
import { cardArray } from './data/card-object'
import './components/module-card'

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

  public myfunction (): void {

  }

  render () {
    return html`
      <h2 class="module-title">
        Module
      </h2>
      ${cardArray.map((card, index) => 
      html`
        <module-card cardTitle=${card.title}
          cardDescription=${card.description} 
          cardPosition=${index+1} 
          cardColor=${card.color}
          cardLink=${card.link}
          ></module-card>`
      )}
      `
  }

}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}