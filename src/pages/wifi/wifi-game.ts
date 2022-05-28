import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import content from '../../data/wifi.json';

const security: String[] = ['Open Network', 'WEP', 'WPA', 'WPA2'];

@customElement('wifi-game')
export class Wifi extends LitElement {

  static styles = css`
    :host{
      display: contents;
    }

    .device {
      width: 500px;
      border: solid black;
      border-radius: 20px;
    }

    .seperator {
      border-top-width: 1px;
      border-top-style: solid;
      margin-left: 15px;
      margin-right: 15px
    }

    button {
      margin-top: 20px;
    }
  `;

  render() {
    const first = content.networks[0];
    return html`<div class="device">
      <wifi-network .name=${first.name} security=${first.security} .channel=${first.channel}></wifi-network>
      <div class="seperator"></div>
      ${content.networks.slice(1).map( n => html`<wifi-network .name=${n.name} security=${n.security} .channel=${n.channel} .connected=${false}></wifi-network>`)}
    </div>
    <button @click=${this.solve}>
      Solve
    </button>
    `;
  }

  solve() {
    const device = this.shadowRoot?.querySelector('.device')!;
    const children = device.children;
    

    let points = 0;
    let skipped = 0;
    for(let i = 0; i < children.length; i++) {
      if(children.item(i)?.tagName != 'WIFI-NETWORK') {
        skipped++;
        continue;
      }
      if (content.networks[i-skipped].dubious == children.item(i)?.hasAttribute('checked')) {
        points++;
      }
    }

    alert('You got ' + String(points) + ' right!');
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

  static styles = css`
    :host{
      width: 100%;
      display: flex;
    }

    .info {
      margin: 15px;
      width: 100%;
      background-color: cornflowerblue;
      border-radius: 10px;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
    }

    .top {
      display: flex;
    }

    h4, h6 {
      margin: 20px;
    }

    input {
      margin: auto 15px;
    }
  `;


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
