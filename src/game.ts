import { html, LitElement, unsafeCSS} from 'lit';
import { Router } from '@lit-labs/router';
import styles from './game.scss';
import './main.scss';

import './pages/main';
import './components/popup';
import './pages/intro';
import './pages/rewards';
import './pages/wifi';
import './pages/secure-password';
import './pages/security-incidents';
import './pages/module-page'

// @ts-ignore
import {URLPattern} from 'urlpattern-polyfill';
import { returnTotalPoints } from './functions/localstorage';
// @ts-ignore
if (!window.URLPattern) {
  // @ts-ignore
  window.URLPattern = URLPattern;
}

export class Game extends LitElement {

  static styles = unsafeCSS(styles);

  public _router = new Router(this, [
    {path: '/', render: () => html`<main-page></main-page>`},
    {path: '/introduction', render: () => html`<intro-page></intro-page>`},
    {path: '/rewards', render: () => html`<rewards-page></rewards-page>`},

    {path: '/chapter/:id', render: () => html`<module-page></module-page>`},
    {path: '/wifi', render: () => html`<wifi-game></wifi-game>`},
    {path: '/secure-password', render: () => html`<secure-password></secure-password>`},
    {path: '/security-incidents', render: () => html`<security-incidents></security-incidents>`},

    {path: '/*', render: () => html`<h1>404 - Not found</h1>`},
  ]);


  private menuSelected: Boolean = false;

  show_Close_Menu(){
    console.log(1234);
    const menuIconCss = document.getElementById('menu');
    const closeIconCss = document.getElementById('close');

    const menuNav = this.shadowRoot?.getElementById('mobile-nav');

    if(this.menuSelected){
      menuIconCss?.classList.add('hide-block');
      closeIconCss?.classList.add('display-block');
      menuNav?.classList.add('display-block');


      return html`
				<svg id="close" @click="${this.handleMenuCloseClicked}" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
					<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
				</svg>
			`;
    }else{
      menuNav?.classList.remove('display-block');
      return html `
				<svg id="menu" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" @click="${this.handleMenuCloseClicked}">
					<path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="black"/>
				</svg>
			`;
    }
  }

  async handleMenuCloseClicked(){ 
    this.menuSelected = !this.menuSelected;
    this.render() 
  }

  async closeMobile(){ 
    this.menuSelected = false;
    this.render()
  }

  render() {
    return html`
      <div class="main-container">
        <header id="header">
          <a href="/" class="header-brand no-decoration font-black">
            SafeWise
          </a>

          <ul class="header-items">
            <li class="header-item">
              <a href="/" class="header-btn no-decoration font-black">
                Module
              </a>
            </li>
            <li class="header-item">
              <a href="/rewards" class="header-btn no-decoration font-black">
                Energie ${returnTotalPoints()}
                <img class="mobile-img" src="/res/icons/energie.svg"/>
              </a>
            </li>
          </ul>

          <div class="header-icons">
            ${this.show_Close_Menu()}
          </div>
        </header>

        <div class="mobile-nav" id="mobile-nav">
          <a href="/" class="mobile-btn" @click="${this.closeMobile}">
            Module
          </a>

          <a href="/rewards" class="mobile-btn" @click="${this.closeMobile}">
            Energie ${returnTotalPoints()}
            <img class="mobile-img" src="/res/icons/energie.svg"/>
          </a>
        </div>
        ${this._router.outlet()}
      </div>
    `;
  }

}

customElements.define('cep-game', Game);
