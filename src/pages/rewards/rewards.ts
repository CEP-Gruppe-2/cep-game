import { unsafeCSS, html, LitElement } from 'lit';
import styles from './rewards.scss?inline';
import rewards from '../../data/rewards/rewards.json';
import '/src/components/button/button.ts'
import {changePointsLocalStorage, exchangePointsAndSetLastNextExchang, getArrayWithGainedPoints, isLastExchangePermittedDebug, returnTotalPoints, setItemLocalStorage } from '../../functions/localstorage';

/**
 * My custom event emitter
 * @noInheritDoc
 * @class Rewards
 * @module Rewards
 * @public
 */
export class Rewards extends LitElement {

  /** @cssprops */
  static styles = unsafeCSS(styles) // imported css styles

  /**
   * @property {number} - Totalpoints 
   * @private
   * */
  private punkte : number= returnTotalPoints(); // points from Localstorage

  
  /**
   * Return Img City, when points Exchanged is city light or dark
   * @private
   * @returns {any} - return img of the city
   */
  private city() : any{
    // get points from localstorage
    let exchangePoints = localStorage.getItem("exchangePoints");
    
    if(localStorage.getItem("exchangePoints") != null){ // exchangePoints is not null
      if(parseInt(exchangePoints!) > 0){ // exchangePoints greater than 0
        if(!isLastExchangePermittedDebug(true)){ // last Exceed permitted?
          // return city in dark
          return html `<img class="city-img" srcset="${rewards.cityDunkel}" alt="Bild von E-City"/>`
        }else{
          // return city in light
          return html `<img class="city-img" srcset="${rewards.cityHell}" alt="Bild von E-City"/>`
        }
      }else{
        return html ``
      }
    // return city in dark
    }else return html `<img class="city-img" srcset="${rewards.cityDunkel}" alt="Bild von E-City"/>`
  }

  /**
   * Exchange points and set last Exchange
   * @private
   * @async
   * @returns {Promise<void>}
   */
  private async exchangePoints() : Promise<void>{
    //points is 0 or smaller than 0
    if(this.punkte == 0 || this.punkte < 0){
      // exchange not possible, display error in the console
      console.error("Fehler: Du hast 0 Punkte und du kannst es nicht eintauschen")
    }else{
      changePointsLocalStorage("exchangePoints", this.punkte) // set / save exchangePoints into LS
      exchangePointsAndSetLastNextExchang(this.punkte) // set new Time for next Exchange
      setItemLocalStorage("points", "0") // set the points to 0 
      this.punkte = parseInt(localStorage.getItem("points")!); // get new points from LS
    }
    
    this.requestUpdate(); // async update the page
  }

  /**
   * Return download Button for photo collage
   * @returns {any}
   */
  private downloadCollage() : any{
    // get points and parse to Integer
    let points : number = parseInt(localStorage.getItem("exchangePoints")!);
    // get amount of points
    let len : number = (rewards.eindrücke.length - 1)  * 100;
    
    // user received all images?
    if(points > len){
      // display download button
      return html ` 
        <a class="rewards-btn" download href="/res/rewards/fotocollage-min.jpg">
          Download Fotocollage
        </a>
      `
    }

    //display nothing
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
                console.log("value:", val);
                
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
        ${
          // call downloadCollage function
          this.downloadCollage() 
        }
        ${
          // loop through rewards json
          rewards.eindrücke.map(function(img, index){
          let points : number; // points variable

          if(localStorage.getItem("exchangePoints") != null){ // get exchangePoints
            points = parseInt(localStorage.getItem("exchangePoints")!); // get exchangePoints and parse to Integer
            points /= 100; // devide by 100 and save
            if(index <= points - 1){ // display images by the amount of received points
              return html `<img class="img-win" src="${img}"/>` 
            }
          }
        })}
      </div>

    `;
  }

  
}

customElements.define('rewards-page', Rewards);