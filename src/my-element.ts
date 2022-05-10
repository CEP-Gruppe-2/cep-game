import { html, css, LitElement, PropertyValueMap } from 'lit'
import { customElement } from 'lit/decorators.js' // property
import { MainPage } from './components/main-page'
import './components/nav-bar'

interface Page {
  dir: string,
  element: HTMLElement
}

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
  pageStack: Page[] = []
  
  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      const p = {dir: "", element: new MainPage()};
      this.pageStack.push(p);
      this.shadowRoot?.append(p.element);
  }

  public back(): void {
    if (this.pageStack.length == 1) return;

    this.pageStack.pop()?.element.remove();

    const page = this.pageStack[this.pageStack.length-1];
    this.shadowRoot?.append(page.element);
    this.shadowRoot?.firstElementChild?.setAttribute("dir", page.dir);
  }

  render() {
    return html`
      <nav-bar @back=${this.back} username="SampleText"></nav-bar>
    `
  }

}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}