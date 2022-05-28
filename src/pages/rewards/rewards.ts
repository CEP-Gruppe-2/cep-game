import { unsafeCSS, html, LitElement } from 'lit';
import styles from './rewards.scss?inline';
import rewards from '../../data/rewards/rewards.json';

export class Rewards extends LitElement {

  static styles = unsafeCSS(styles);

  private spielername:String='';
  private punkte:number=0;
  private quelle:any='';
  /*public aktuelleSeite:Pages=0;*/
  /*private spielerkennung*/

  /*lädt die spielerdaten*/
  private ladeSpieler():void{

  }

  private getECity():String{
    /*if e city licht an gebe helles zurück ansonten dunkles*/
    return rewards.cityHell;
  }

  /* gibt eindrücke als HTML zurück*/
  private getEindrücke():any{
    /* for eindrücke des spielers
        this.eindrücke=this.eindrücke+ <div> <img src.../> </div>
    */
    let eindrücke='';
    for(var i:number=0;i<rewards.eindrücke.length;i++){
      this.quelle=rewards.eindrücke[i];
      eindrücke=eindrücke+ `<div class="eindrücke-img"> <img srcset="res/belohnung/belohnung${i}.jpg" alt="Image"/></div>`;
    }
    console.log('hier'+eindrücke);
    return html`${eindrücke}`;
  }

  /* gibt Page 1 als HTML zurück*/
  private ladePage():any{
    var batterie=rewards.batterie;
    console.log(batterie);
    return html`
      <div id="main-div">
        <div id="info-Energie">
          <div id="img-energie">
            <img srcset=${batterie} alt="Batterie"/>
          </div>
          <div id=Punkte>
            <h1>Gesamtanzahl deiner Punkte</h1>
            <p>${this.punkte} Points / Kwh</p>
          </div>
          <div id="eintauschen-btn"> <my-button>Eintauschen</my-button>
          </div>
        </div>
        <div id="info-history">
            <h1> Hier steht die history</h1>
        </div>
      
        <div id="img-E-City">
            <img id="city" srcset="${this.getECity()}" alt="Bild von E-City"/>
        </div>
        <div id="eindrücke">
            <h1>Eindrücke aus E-City</h1>
            <div>
                <h4>füge hier bilder von e City ein</h4>
                ${this.getEindrücke()}
            </div>
      </div>
    `;
  }

  render() {
    let display;
    if(this.spielername=='')
      this.ladeSpieler();

    display=this.ladePage();

    return html`
            ${display}`;
  }
}

customElements.define('rewards-page', Rewards);

// declare global {
//   interface HTMLElementTagNameMap {
//     'rewards-page': Rewards
//   }
// }
