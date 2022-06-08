import { unsafeCSS, html, LitElement } from 'lit';
import styles from './secure-password.scss?inline';
import { property, state, query } from 'lit/decorators.js';
import passwortsicherheit from '../../data/firstModule/passwortsicherheit.json';

export class SecurePassword extends LitElement {

  static styles = unsafeCSS(styles);

  private inhalt:String='';
  private alt:String='';
  private buttonText:String='';
  private start:boolean=false;
  private lösung:String='';
  private richtig:boolean= false;
  private erklärung:boolean=false;
  private modi2:boolean=false;
  private passwort:String='';

  positionErklaerung=0;
  fehlerMeldungPasswort='';

  @property({type: Number})
    position = 0;

  @state()
    _submitEnabled = false;

  @query('input')
    _input!: HTMLInputElement;


  _handleClick(e:Event):void{
    if((e.target as HTMLDivElement).textContent==='Beenden'){
      console.log('spiel wurde beendet!');
      return;

    }


    /*wenn im spielmodus mit multiple choice lösung überprüfen*/
    spielLogikMultipleChoice: if(!this.modi2&&this.start){
      if((e.target as HTMLDivElement).textContent==='weiter'){
        this.erklärung=false;
        break spielLogikMultipleChoice;
      }


      if((e.target as HTMLDivElement).textContent===this.lösung){
        this.richtig=true;
      }else{
        this.richtig=false;
      }
      this.erklärung=true;
    }else if(this.start){
      if((e.target as HTMLDivElement).textContent==='Passwort überprüfen!'){
        this._bearbeitePasswortEingabe();
        return;
      }
    }

    if((e.target as HTMLDivElement).textContent==='Starten'){
      this.position=-1;
      this.start=true;
    }

    /*wenn aufgabe falsch oder richtig gemacht wurde erklärung durchgehen und Eklärungsposition hochzählen, ansonsten normale position weitermachen*/
    if(!this.erklärung){
      this.position++;
      if(this.positionErklaerung>0){
        this.positionErklaerung=0;
      }
    }
    this.requestUpdate();
  }


  _inputChanged(e: Event) {
    this._submitEnabled = !!(e.target as HTMLInputElement).value;
  }


  _bearbeitePasswortEingabe(){
    /*Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character*/
    let pattern=  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-.,]).{8,}$/;

    this.passwort=this._input.value;
    this._input.value = '';
    this._submitEnabled = false;
    if(!this.passwort.match(pattern))
      this.fehlerMeldungPasswort='Das Passwort: \n'+this.passwort+' ist zu unsicher.';
    else
      this.erklärung=true;
  }





  render() {

    let displayPosition;

    /*einführung aus Json holen*/
    if(!this.start){
      if(!this.modi2&&this.position<=passwortsicherheit.einfuehrung.length){
        /*modi 1 einfuehrung*/
        /*this.backgroundcolor= passwortsicherheit.einfuehrung[this.position].backgroundcolor;*/
        this.inhalt=passwortsicherheit.einfuehrung[this.position].inhalt;
        this.alt=passwortsicherheit.einfuehrung[this.position].text;
        this.buttonText=passwortsicherheit.einfuehrung[this.position].buttonText;

      }else if(this.modi2&&this.position<=passwortsicherheit.einfuehrungAufgabeZwei.length){
        /*modi 2 einführung*/
        this.inhalt=passwortsicherheit.einfuehrungAufgabeZwei[this.position].inhalt;
        this.alt=passwortsicherheit.einfuehrungAufgabeZwei[this.position].text;
        this.buttonText=passwortsicherheit.einfuehrungAufgabeZwei[this.position].buttonText;

      }

      if(this.buttonText!=''){
        console.log("hall");
        
        displayPosition = html`
        <div class="inhalts-container">
          <img class="inhalt" srcset=${this.inhalt}  alt=${this.alt}/>
        </div>
        <div class="flexbox-buttons">
          <my-button @click="${this._handleClick}">${this.buttonText}</my-button>
        </div>`;
      }else{
        displayPosition = html `
          <div class="inhalts-container">
              <img class="inhalt-roboter" srcset=${this.inhalt} @click="${this._handleClick}" alt=${this.alt}/>
          </div>
        `;
      }


    }else{/*nach start geht es hier weiter*/

      /*ausgabe modi1 aufgabe und lösung*/
      if(!this.modi2){
        if(!this.erklärung){
          /* ausgabe aufgabenstellung*/
          this.inhalt=passwortsicherheit.aufgabe1[this.position].frage;
          this.lösung=passwortsicherheit.aufgabe1[this.position].lösung;
          this.alt=passwortsicherheit.aufgabe1[this.position].text;

          displayPosition = html`

          <div class="inhalts-container">
            <img class="inhalt" srcset=${this.inhalt} alt=${this.alt}/>
          </div>
            <div class="flexbox-buttons">
                <my-button id="flex-button1" @click="${this._handleClick}">A</my-button>
                <my-button id="flex-button2" @click="${this._handleClick}">B</my-button>
                <my-button id="flex-button3" @click="${this._handleClick}">C</my-button>
                <my-button id="flex-button4" @click="${this._handleClick}">D</my-button>
            </div>`;
        }
        else/*ausgabe Lösung*/
        {

          if(this.richtig &&this.positionErklaerung<=passwortsicherheit.aufgabe1[this.position].richtig.length)
            this.inhalt=passwortsicherheit.aufgabe1[this.position].richtig[this.positionErklaerung].text;
          else if(this.positionErklaerung<=passwortsicherheit.aufgabe1[this.position].falsch.length)
            this.inhalt=passwortsicherheit.aufgabe1[this.position].falsch[this.positionErklaerung].text;
          else{
            this.erklärung=false;
          }
          this.positionErklaerung++;
          displayPosition = html`
            <div class="inhalts-container">
              <img class="inhalt-lösung" srcset=${this.inhalt} />
            </div>
            <div class="flexbox-buttons">
              <my-button @click="${this._handleClick}">weiter</my-button>
            </div>
                `;

          /*ab jetzt nur noch modi2 verwenden*/
          if(this.position===passwortsicherheit.aufgabe1.length-1){
            this.modi2=true;
            this.start=false;
            this.erklärung=false;
            this.position=-1;
            this.positionErklaerung=0;
          }


        }



      }else{ /*hier wird die aufgabe für modi2 ausgegeben*/

        /*ausgabe Aufgabenstellung*/
        if(!this.erklärung){
          displayPosition = html`
            <div id="flexbox-passworteingabe">
                <tr>
                        <th><label class="password-label">Gib hier ein Passwort an: 
                        <div id="passwort-input"><input class="password-input" @input=${this._inputChanged}/></div>
                    </label></th>
                </tr>
                <tr>
                    <div id="fehlermeldung-container">${this.fehlerMeldungPasswort}</div>
                </tr>
                <tr>
                    <div id="passwort-button"><my-button @click=${this._handleClick} .disabled=${!this._submitEnabled}>Passwort überprüfen!</my-button></div>
                    </div>
                </tr>
            </div>
          `;

        }else{/*ausgabe Lösung*/
          this.inhalt=passwortsicherheit.endeAufgabeZwei[0].inhalt;
          this.buttonText=passwortsicherheit.endeAufgabeZwei[0].buttonText;
          this.alt=passwortsicherheit.endeAufgabeZwei[0].text;


          displayPosition = html`
            <div class="inhalts-container">
              <img class="inhalt" srcset=${this.inhalt} alt=${this.alt}/>
            </div> 
            <div class="flexbox-buttons">
              <my-button class="starten-button" @click=${this._handleClick}>${this.buttonText}</my-button>
            </div>
          `;
        }



      }

    }
    return html`
    <div class="main-div">
        ${displayPosition}
    </div>
        `;
  }
  
}

customElements.define('secure-password', SecurePassword);

// declare global {
//   interface HTMLElementTagNameMap {
//     'secure-password': SecurePassword
//   }
// }
