import { unsafeCSS, html, LitElement } from 'lit';
import styles from './intro.scss?inline';

import { redirectToWithParameter } from '../../functions/redirect';
import introduction from '../../data/introduction.json';

import  '../../components/notification';
import { state } from 'lit/decorators.js';

export class Intro extends LitElement {

  static styles = unsafeCSS(styles);


  private hacker: Boolean = false;

  private roboterArray : Array<any>;

  @state()
  private pos: number = 0;
  private continuation: Array<String> = [];

  constructor(){
    super();

    this.roboterArray = introduction.roboterImages;
  }

  intro(){

    if (!this.roboterArray[this.pos].roboterVisible && this.roboterArray[this.pos].cityVisible){
      return html `
        <div class="city-container" @click="${this.continue}">
          <img class="cloud-img cloud-right" src="${introduction.cloudImage}" alt=""/>
          <img class="cloud-img" src="${introduction.cloudImage}" alt=""/>
          <img class="city-img" src="${introduction.cityImage}" alt=""/>
        </div>
      `;
    }

    if (this.roboterArray[this.pos].emailVisible) {
      return html`
        <div class="email-container">
          <img class="email-img" src="${introduction.emailImage}" alt=""/>
          <button class="email-btn" @click="${this.continue}">Schließen</button>
        </div>
      `;
    }

    if (introduction.roboterImages.length - 1 == this.pos) {
      return html `
        <img class="roboter-img" src="${this.roboterArray[this.pos].src}" alt=""/>
        <div class="last-container">
          <button class="last-btn" name="hacker" @click="${this.continue}">Hacker verfolgen</button>
          <button class="last-btn" name="anlage" @click="${this.continue}">Anlage reparieren</button>
        </div>
      `;
    }

    if (this.continuation.length != 0) {

      if( this.pos < this.continuation.length - 1 ) {
        return html`
          <img class="roboter-img" @click="${this.continue}" src="${this.continuation[this.pos]}" alt=""/>
        `;
      } else {
        let notification: String = 'error';
        if(!localStorage.getItem('points')){

          console.log('der Nutzer hat die Einleitung erfolgreich abgeschlossen. Wir können den Nutzer zum ersten Kapitel weiterleiten wir können ihm Punkte addieren');
          notification = 'success';

          if(!this.hacker)
            localStorage.setItem('points', '100');
          else
            localStorage.setItem('points', '0');
        }

        return html`
            <notification-component notification="${notification}" @notify=${(e : Event) => this.nextChapter(e)}></notification-component>
            <img class="roboter-img" ${this.hacker? html`@click="${this.continue}"`:''} src="${this.continuation[this.pos]}" alt=""/>
        `;
      }

    } else {
      return html `<img class="roboter-img" @click="${this.continue}" src="${this.roboterArray[this.pos].src}" alt=""/>`;
    }
  }


  private continue(e : Event){

    // @ts-ignore
    if(e.target?.name == 'hacker'){
      this.continuation = introduction.hackerVerfolgen;
      this.hacker = true;
      this.pos = 0;
      // @ts-ignore
    } else if(e.target?.name == 'anlage') {
      this.continuation = introduction.schwachstellenBeheben;
      this.pos = 0;
    } else {
      this.pos++;
    }
  }

  private nextChapter(){
    console.log('Redirect');
    redirectToWithParameter('/modul', '1', 'mod' );
  }


  render() {
    return html`
            <svg class="float-left-top circle-icon" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
            </svg>

            <svg class="float-right-bottom circle-icon" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
            </svg>

            ${this.intro()}
        `;
  }
}

customElements.define('intro-page', Intro);
