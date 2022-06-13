import { unsafeCSS, html, LitElement } from 'lit';
import styles from './rewards.scss?inline';
import rewards from '../../data/rewards/rewards.json';
import '/src/components/button/button.ts'
import {addPointsToLocalStorage, changePointsLocalStorage, getArrayWithGainedPoints, setItemLocalStorage } from '../../functions/localstorage';

export class Rewards extends LitElement {

  static styles = unsafeCSS(styles);
  private spielername:String='';
  private punkte:number=0;

  constructor(){
    super();

    //localStorage.setItem("points", "300") punkte hinzufügen, um die Punkte auszutauschen

    if(localStorage.getItem("point") != null){
      this.punkte = parseInt(localStorage.getItem("points")!);
    }else{
      localStorage.setItem("point", "100")
    }
  }

  /*lädt die spielerdaten*/
  private ladeSpieler():void{

  }

  private getECity() : any{
    /*if e city licht an gebe helles zurück ansonten dunkles*/
    let exchangePoints = localStorage.getItem("exchangePoints");

    if(localStorage.getItem("exchangePoints") != null){
      if(parseInt(exchangePoints!) > 0){
        return html `<img id="city" srcset="${rewards.cityHell}" alt="Bild von E-City"/>`
      }else{
        return html ``
      }
    }else return html `<img id="city" srcset="${rewards.cityDunkel}" alt="Bild von E-City"/>`
  }

  private async exchangePoints(){
    changePointsLocalStorage("exchangePoints", this.punkte)
    setItemLocalStorage("points", "0")
    this.punkte = parseInt(localStorage.getItem("points")!);
    this.requestUpdate();
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
                      <p id="points">${this.punkte} Points / Kwh</p>
                  </div>

                  <div id="eintauschen-btn"> 
                      <my-button @click="${this.exchangePoints}">Eintauschen</my-button>
                  </div>
              </div>

              <div id="info-history">
                  <h1>History erhaltenen Punkten</h1>
                  <div class="history-cards" id="cards">
                      <!-- 
                        History Card zeigt alle Punkte, die man bis jetzt erhalten hat.
                        History Card soll durch map Funktion gerendert werden 
                      -->
                      ${getArrayWithGainedPoints().map(function(val, index, arr){
                          if(arr.length - 1 == index){
                              return html ``
                          }else{
                            if(index % 2 == 0){
                              return html `
                                <div class="history-card">
                                  <h1 class="history-card-title">${arr[index]}</h1>
                                  <p class="history-card-desc">${arr[index + 1]}</p>
                                </div>
                              `
                            }
                          }
                      })}
                  </div>
              </div>
          
            <div id="img-E-City">
              ${this.getECity()}
            </div>

            <div id="eindrücke">
                <h1>Belohnungen</h1>
                <div>
                    ${rewards.eindrücke.map(function(img, index,){
                      let points : number;
                      if(localStorage.getItem("exchangePoints") != null){
                        points = parseInt(localStorage.getItem("exchangePoints")!);
                        points /= 100;
                        if(index <= points - 1){
                          return html `<img class="img-win" src="${img}"/>` 
                        }
                      }
                    })}
                </div>
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
            ${display}
    `;
  }
}

customElements.define('rewards-page', Rewards);