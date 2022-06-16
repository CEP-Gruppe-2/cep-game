import { unsafeCSS, html, LitElement } from 'lit';
import styles from './rewards.scss?inline';
import rewards from '../../data/rewards/rewards.json';
import '/src/components/button/button.ts'
import {changePointsLocalStorage, exchangePointsAndSetLastNextExchang, getArrayWithGainedPoints, isLastExchangePermittedDebug, returnTotalPoints, setItemLocalStorage } from '../../functions/localstorage';

export class Rewards extends LitElement {

  static styles = unsafeCSS(styles)
  private punkte : number= returnTotalPoints();;

  private city() : any{
    /*if e city licht an gebe helles zurück ansonten dunkles*/
    let exchangePoints = localStorage.getItem("exchangePoints");
    
    console.log(isLastExchangePermittedDebug(true));
    

    if(localStorage.getItem("exchangePoints") != null){
      if(parseInt(exchangePoints!) > 0){
        if(!isLastExchangePermittedDebug(true)){
          return html `<img class="city-img" srcset="${rewards.cityDunkel}" alt="Bild von E-City"/>`
        }else{
          return html `<img class="city-img" srcset="${rewards.cityHell}" alt="Bild von E-City"/>`
        }
      }else{
        return html ``
      }
    }else return html `<img class="city-img" srcset="${rewards.cityDunkel}" alt="Bild von E-City"/>`
  }

  private async exchangePoints(){
    if(this.punkte == 0 || this.punkte < 0){
      console.error("Fehler: Du hast 0 Punkte und du kannst es nicht eintauschen")
    }else{
      changePointsLocalStorage("exchangePoints", this.punkte)
      exchangePointsAndSetLastNextExchang(this.punkte)
      setItemLocalStorage("points", "0")
      this.punkte = parseInt(localStorage.getItem("points")!);
    }
    
    this.requestUpdate();
  }

  private downloadCollage() : any{
    let points : number = parseInt(localStorage.getItem("exchangePoints")!);
    let len : number = (rewards.eindrücke.length - 1)  * 100;
    
    if(points > len){
      return html `
        <a class="rewards-btn" download href="/res/rewards/fotocollage-min.jpg">
          Download Fotocollage
        </a>
      `
    }

    return html ``
  }

  render(){
    return html `
      <div class="points-container">
        <div class="battery-container">
          <img class="battery-img" src="${rewards.batterie}"/>
          <div class="battery-text">
            <h3 class="battery-header">
              Energie
              <div class="btn btn-primary tooltip"> &#63;
                <div class="right">
                    <h3>Energie</h3>
                    <p>
                      Du hast sicherlich bemerkt, dass du für jede erfolgreich abgeschloßene Spiel punkte erhalten hast.
                      Die Punkte können sich zw. 50 und 500 varieren. </br> </br>
                      Für jede 100 Punkte, die du eingetausch hast, hast du als Belohnung ein Bild erhalten. 
                      Beim Klicken auf den Knopf 'Eintauschen', werden alle Punkte, die dir zur Verfügung stehen, auf einmal eingetausch.
                      </br> </br>
                      Der durchschnittlicher Energieverbrauch in einer Mittelstadt, beträgt: 
                      1699GJ/24h oder 71 GJ/h

                      </br> </br>

                      Beim Eintauschen 100 Punkte wird die Stadt mit Energie für 100 Minuten oder 1 Stunden und 40 Minute versorgt.
                    </p>
                    <i></i>
                </div>
              </div>
            </h3>

            <p class="battery-points">
              ${this.punkte} Gigajoule (GJ)
            </p>
            <a class="battery-exchange-btn" href="#" @click="${this.exchangePoints}">
              Eintauschen
            </a>
          </div>
        </div>

        <div class="history-container">
          <h3 class="history-header">
            Verlauf
          </h3>
          <div class="history-cards">
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
      </div> 


      <div class="city-container">
        ${this.city()}
      </div>

      <div class="rewards-images">
        <h3 class="rewards-title">
          Belohnungen
          <div class="btn btn-primary tooltip"> &#63;
            <div class="right">
                <h3>Belohnungen</h3>
                <p>
                  Für jede 100 Punkte erhälst du immer ein Bild als Belohnung. 
                  </br></br>
                  Wenn du alle Bilder erhalten hast oder mehr 1900 Punkte eingetausch hast, 
                  hast du die Möglichkeit sehr schöne Fotocollage herunterzuladen, wo alle Bilder, 
                  die du bereits erhalten hast, aufgelistet werden. 
                </p>
                <i></i>
            </div>
          </div>
        </h3>
        ${this.downloadCollage()}
        ${rewards.eindrücke.map(function(img, index){
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

    `;
  }

  
}

customElements.define('rewards-page', Rewards);