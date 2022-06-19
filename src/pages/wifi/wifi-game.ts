import { html, unsafeCSS, LitElement } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

import content from '../../data/wifi.json';

import '../../components/button';
import { redirectTo } from '../../functions/redirect';
import { addPointsToLocalStorage } from '../../functions/localstorage';

import wifiStyles from './wifi-game.scss';
import networkStyles from './network.scss';

const security: String[] = ['Open Network', 'WEP', 'WPA', 'WPA2'];

@customElement('wifi-game')
export class Wifi extends LitElement {

  @state()
    position = 0;
  @state()
    section = 0;

  points: number = 0;

  static styles = unsafeCSS(wifiStyles);
  
  _handleClick(e: Event): void {
    this.position++;


    if((e.target as HTMLDivElement).textContent==='Beenden'){
      redirectTo('chapter/1', '');
    }
    /*wenn der button text starten hat setze enum eins weiter und position=0*/
    if((e.target as HTMLDivElement).textContent==='Starten'){
      this.section=1;
    }
  }

  renderGame() {
    const first = content.networks[0];
    return html`
      <div class="wifi">
        <div class="device">
          <wifi-network .name=${first.name} security=${first.security} .channel=${first.channel}></wifi-network>
          <div class="seperator"></div>
          ${content.networks.slice(1).map( n => html`<wifi-network .name=${n.name} security=${n.security} .channel=${n.channel} .connected=${false}></wifi-network>`)}
        </div>
        <my-button @click=${this.solve}>
          Solve
        </my-button>
      </div>
    `;
  }

  render() {
    if(this.section == 0){
      return html`
        <div class="main-div">
          <div class="story">
            <div class="bubble1">
              <p>${content.intro[this.position].text}</p>
            </div>
            <div class="joules">
              <img class="joules-img" src="/res/modul1/passwortsicherheit/joules.svg" />
            </div>
            <div class="button">
                <my-button @click="${this._handleClick}">${content.intro[this.position].buttonText}</my-button>
            </div>
          </div>
        </div>`;
    } else if(this.section == 2 ) {
      return html`
        <div class="main-div">
          <div class="story">
            <div class="bubble1">
              <p>Gratuliere! Du hast ${this.points} Punkte erreicht!</p>
            </div>
            <div class="joules">
              <img class="joules-img" src="/res/modul1/passwortsicherheit/joules.svg" />
            </div>
            <div class="button">
              <my-button @click="${this._handleClick}">Beenden</my-button>
                </div>
          </div>
        </div>`;
    }
    
    return this.renderGame();
    
  }

  solve() {
    const device = this.shadowRoot?.querySelector('.device')!;
    const children = device.children;

    let skipped = 0;
    for(let i = 0; i < children.length; i++) {
      if(children.item(i)?.tagName != 'WIFI-NETWORK') {
        skipped++;
        continue;
      }
      if (content.networks[i-skipped].dubious == children.item(i)?.hasAttribute('checked')) {
        this.points++;
      } else {
        this.points--;
      }
    }
    this.points = this.points <= 0? 0: this.points*10;

    addPointsToLocalStorage('Wifi', this.points + '');
    const points = this.points + Number(localStorage.getItem('points'));
    localStorage.setItem('points', points + '');

    this.section = 2;
  }

}

@customElement('wifi-network')
export class WifiNetwork extends LitElement {

  @property()
    name: String = '';

  @property({type: Number})
    security: number = 0;

  @property({type: Number})
    channel: number = 0;

  @property({type: Boolean})
    connected: boolean = true;

  @property({type: Boolean})
    checked: boolean = false;

  static styles = unsafeCSS(networkStyles);

  render() {
    
    return html`
      <div class="info">
        <div class="top">
          <h4> ${this.name} </h4>
          ${this.connected? html`<h6 style="margin-top: auto; margin-bottom: auto;"> Connected </h6>` : ''}
        </div>
        <div class="bottom">
          <h6> ${security[this.security]} </h6>
          <h6> Ch. ${this.channel} </h6>
        </div>
      </div>
      <input type="checkbox" @click=${this._click}>
    `;
  }

  _click(): void {
    this.toggleAttribute('checked');
  }

}
