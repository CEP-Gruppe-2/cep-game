import { unsafeCSS, html, LitElement, PropertyValueMap } from 'lit';
import styles from './rewards.scss?inline';
import rewards from '../../data/rewards/rewards.json';
import '/src/components/button/button.ts'
import {getArrayWithGainedPoints } from '../../functions/localstorage';

export class Rewards extends LitElement {

  static styles = unsafeCSS(styles);

  private spielername:String='';
  private punkte:number=0;
  private quelle:any='';

  private cards : HTMLElement;
  /*public aktuelleSeite:Pages=0;*/
  /*private spielerkennung*/

  constructor(){
    super();
    if(localStorage.getItem("points") !== null){
      this.punkte = parseInt(localStorage.getItem("points")!);
    }else{
      localStorage.setItem("points", "0")
    }


  }

  firstUpdated(){
    this.cards = this.shadowRoot?.getElementById("cards")!;
    console.log(this.cards);
    
    
  }

  /*lädt die spielerdaten*/
  private ladeSpieler():void{

  }

  private loadGainedPoints() : any{
    let card : any, arr : Array<any>;  

    arr = getArrayWithGainedPoints();

    for (let index = 0; index < arr.length; index++) {
      
      this.cards.innerHTML = 'asdasd'
      card = card + html `
        <div class="history-card">
            <h1>${arr[index]}</h1>
        </div>
      `;
    }

    return card;
  }

  private getECity():String{
    /*if e city licht an gebe helles zurück ansonten dunkles*/
    return rewards.cityHell;
  }

  /* gibt Page 1 als HTML zurück*/
  private ladePage():any{
    return html`
          <div id="main-div">
              <div id="info-Energie">

                  <div id="img-energie">
                      <img srcset=${rewards.batterie} alt="Batterie"/>
                  </div>

                  <div id=Punkte>
                      <h1>Gesamtanzahl deiner Punkte</h1>
                      <p>${this.punkte} Points / Kwh</p>
                  </div>

                  <div id="eintauschen-btn"> 
                      <my-button>Eintauschen</my-button>
                  </div>
              </div>

              <div id="info-history">
                  <h1> Hier steht die history</h1>
                  <div class="history-cards" id="cards">
                      <!-- 
                        History Card zeigt alle Punkte, die man bis jetzt erhalten hat.
                        History Card soll durch map Funktion gerendert werden 
                      -->
                  </div>
              </div>
          
            <div id="img-E-City">
                <img id="city" srcset="${this.getECity()}" alt="Bild von E-City"/>
            </div>

            <div id="eindrücke">
                <h1>Eindrücke aus E-City</h1>
                <div>
                    <h4>füge hier bilder von e City ein</h4>
                    ${rewards.eindrücke.map((img, index) => 
                        html `<img class="img-win" src="${rewards.eindrücke[index]}"/>`
                    )}
                </div>
            </div>
        </div>
      `;
  }

  render() {
    this.loadGainedPoints()
    let display;
    if(this.spielername=='')
      this.ladeSpieler();

    display=this.ladePage();

    return html`
            ${display}`;
  }
}

customElements.define('rewards-page', Rewards);