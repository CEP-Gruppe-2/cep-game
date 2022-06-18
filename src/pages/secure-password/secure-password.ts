import { html, LitElement, unsafeCSS} from 'lit';
import styles from './secure-password.scss?inline';
import { query, state} from 'lit/decorators.js';
import passwortsicherheit from '../../data/firstModule/passwortsicherheit.json';
import { redirectTo } from '../../functions/redirect';
import { addPointsToLocalStorage } from '../../functions/localstorage';


export class SecurePassword extends LitElement {

    static styles = unsafeCSS(styles);

    
    private punkte:number=0;
    private joulesSource:string="";
    private text:string[]=[];
    private buttonText:string="";
    private roboter:boolean=false;
    private ablaufPosition:Ablauf=Ablauf.Einfuehrung;   
    private lösung:string="";
    private überschrift:string=""
    private fehlerMeldungPasswort:string='';
    private eingabe:string="";

    /** @state -  counter for the postion in the game*/
    @state()
    position = 0;

    /** @state - boolean to save if the choice of the player was right */
    @state()
    richtig=false;

    /** @state -  boolean to check if the erklärung should be loaded*/
    @state()
    erklärung=false;

    /** @state - boolean to check if the input is filled with text */
    @state()
    _submitEnabled = false;

    /** @query - input text */
    @query('input')
    _input!: HTMLInputElement;

    /**
    * Is called by buttons with the text "Weiter", "starten" and "beenden", Here it is checked which button was clicked and either the position is increased, the game ends, or the position is set to 0 and the game flow enum is adjusted. 
    * @param e {Event} - the Event which was klicked
    * @returns {void}
    */
    _handleClick(e:Event):void{
        this.position++;


        if((e.target as HTMLDivElement).textContent==='Beenden'){
           addPointsToLocalStorage("Passwortsicherheit", this.punkte+"");
            this.punkte+=Number(localStorage.getItem('points'));
            localStorage.setItem('points', this.punkte+"");
            redirectTo("chapter/1", "")
        }
        
        if((e.target as HTMLDivElement).textContent==='Starten'||this.ablaufPosition==Ablauf.Aufgabe1&&this.position==3||this.ablaufPosition==Ablauf.Aufgabe2Einführung&&(e.target as HTMLDivElement).textContent==='Starten'){
            this.position=0;
            this.ablaufPosition++;
        }
    }
    
    /** 
    *Is called by the multiple choice buttons and evaluates whether the clicked button is correct.
    * @param e {Event} - the Event which was klicked
    * @returns {void}
    */
    _handleClickAufgabe1(e:Event):void{
        
        if((e.target as HTMLDivElement).textContent===this.lösung){
            this.richtig=true;
            this.punkte+=100;
        }
        else{
            this.richtig=false;
            this.punkte+=20;
        }
        this.erklärung=true;
        this.requestUpdate();
    }

    /** 
    *Is called by the button in the last gamemodi, the last gamemode is ablaufPosition==Aublauf.Aufgabe2, and checked if the passwort input is similar with the regex.
    * @returns {void}
    */
    private _bearbeitePasswortEingabe():void{
        //Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
        let pattern=  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-.,]).{8,}$/;
    
        this.eingabe=this._input.value;
        this._input.value = '';
        this._submitEnabled = false;
        if(!this.eingabe.match(pattern))
            this.fehlerMeldungPasswort='Das Passwort: '+this.eingabe+' ist zu unsicher.';
        else{
            this.punkte+=200;
            this.ablaufPosition++;
        }
      }
    
    
    /** 
    *Saves the passwort input, after the press on the button in gamemode: Ablauf.Aufgabe2.
    * @param e {Event} - the input Event
    * @returns {void}
    */
    _inputChanged(e: Event):void{
    this._submitEnabled = !!(e.target as HTMLInputElement).value;
    }

    /** 
    *Reads the required data from the JSON file.
    * @returns {void}
    */
    private readData():void{
        if(this.ablaufPosition==Ablauf.Einfuehrung){
            this.joulesSource=passwortsicherheit.roboterSource;
            this.text[0]=passwortsicherheit.einfuehrung[this.position].text;
            this.buttonText=passwortsicherheit.einfuehrung[this.position].buttonText;
            this.roboter=passwortsicherheit.einfuehrung[this.position].roboter;
        }
        else if(this.ablaufPosition==Ablauf.Aufgabe1){
            if(!this.erklärung){
                this.text[0]=passwortsicherheit.aufgabe1[this.position].frage;
                this.lösung=passwortsicherheit.aufgabe1[this.position].lösung;
                this.roboter=passwortsicherheit.aufgabe1[this.position].roboter;
            }else{
                if(this.richtig){
                    this.text[0]=passwortsicherheit.aufgabe1[this.position].richtig[0].überschrift;
                    this.text[1]=passwortsicherheit.aufgabe1[this.position].richtig[0].text1;
                    this.text[2]=passwortsicherheit.aufgabe1[this.position].richtig[0].text2;
                    this.text[3]=passwortsicherheit.aufgabe1[this.position].richtig[0].text3;
                    this.buttonText=passwortsicherheit.aufgabe1[this.position].richtig[0].buttonText;
                    this.roboter=passwortsicherheit.aufgabe1[this.position].richtig[0].roboter;
                }else{
                    this.text[0]=passwortsicherheit.aufgabe1[this.position].falsch[0].überschrift;
                    this.text[1]=passwortsicherheit.aufgabe1[this.position].falsch[0].text1;
                    this.text[2]=passwortsicherheit.aufgabe1[this.position].falsch[0].text2;
                    this.text[3]=passwortsicherheit.aufgabe1[this.position].falsch[0].text3;
                    this.buttonText=passwortsicherheit.aufgabe1[this.position].falsch[0].buttonText;
                    this.roboter=passwortsicherheit.aufgabe1[this.position].falsch[0].roboter;
                }
                this.richtig=false;
            }
        }else if(this.ablaufPosition==Ablauf.Ende){
            this.überschrift=passwortsicherheit.endeAufgabeZwei[0].Überschrift;
            this.text[0]=passwortsicherheit.endeAufgabeZwei[0].text1;
            this.text[1]=passwortsicherheit.endeAufgabeZwei[0].text2;
            this.buttonText=passwortsicherheit.endeAufgabeZwei[0].buttonText;
            this.roboter=passwortsicherheit.endeAufgabeZwei[0].roboter;
        }else{
            this.überschrift=passwortsicherheit.einfuehrungAufgabeZwei[this.position].überschrift;
            this.text[0]=passwortsicherheit.einfuehrungAufgabeZwei[this.position].text1;
            this.text[1]=passwortsicherheit.einfuehrungAufgabeZwei[this.position].text2;
            this.text[2]=passwortsicherheit.einfuehrungAufgabeZwei[this.position].text3;
            this.text[3]=passwortsicherheit.einfuehrungAufgabeZwei[this.position].text4;
            this.text[4]=passwortsicherheit.einfuehrungAufgabeZwei[this.position].text5;
            this.buttonText=passwortsicherheit.einfuehrungAufgabeZwei[this.position].buttonText
            this.roboter=passwortsicherheit.einfuehrungAufgabeZwei[this.position].roboter;
        }
    }


    /** 
    *Writes the text into the speech bubble and returns it as HTML.
    * @returns {any}
    */
    private writeText():any{
        var text:any="";

        if(this.ablaufPosition==Ablauf.Einfuehrung){
            text=html`
                <div class="bubble1">
                    <p>${this.text[0]}</p>
                </div>
                `
                
        }
        else if(this.ablaufPosition==Ablauf.Aufgabe1){
            text=html`
             <div class="bubble1">
                    <h1>${this.text[0]}</h1>
                    <p>${this.text[1]}</p>
                    <p>${this.text[2]}</p>
                    <p>${this.text[3]}</p>
             </div>
            `;
        }else if(this.ablaufPosition==Ablauf.Ende){
            text=html`
            <div class="bubble1">
                   <h1>${this.überschrift}</h1>
                   <p>${this.text[0]} ${this.punkte} ${this.text[1]}</p>
            </div>`
        }else{
            if(this.position==0){
                text=html`
                    <div class="bubble1">
                       <p>${this.text[0]}</p>
                       <p>${this.text[1]}</p>
                       <p>${this.text[2]}</p>
                       <p>${this.text[3]}</p>
                       <p>${this.text[4]}</p>
                    </div>
               `;
            }else{
                text=html`
                    <div class="bubble1">
                        <h1>${this.überschrift}</h1>
                       <p>${this.text[0]}</p>
                    </div>
               `;
            }
                    
        }
        return html`${text}`
    }

    /** 
    *Writes the img of the robot and returns it as HTML.
    * @returns {any}
    */
    private writeRoboter():any{
        return html`
        <div class="joules">
            <img class="joules-img" src=${this.joulesSource} />
        </div>`
    }

    /** 
    *Writes the buttons and returns it as HTML.
    * @returns {any}
    */
    private writeButtons():any{
        var text:any="";
        if(this.ablaufPosition==Ablauf.Einfuehrung||this.ablaufPosition==Ablauf.Aufgabe2Einführung||this.ablaufPosition==Ablauf.Ende||this.erklärung){
            text=html`
                <div class="button">
                    <my-button @click="${this._handleClick}">${this.buttonText}</my-button>
                </div>`
            this.erklärung=false;
        }
        else if(this.ablaufPosition==Ablauf.Aufgabe1){
            text=html`
                <div class="flexbox-buttons">
                    <my-button  @click="${this._handleClickAufgabe1}">A</my-button>
                    <my-button class="flex-button" @click="${this._handleClickAufgabe1}">B</my-button>
                    <my-button class="flex-button" @click="${this._handleClickAufgabe1}">C</my-button>
                    <my-button class="flex-button" @click="${this._handleClickAufgabe1}">D</my-button>
                </div>`;
            
        }

        return html`${text}`
    }

    /** 
    *Writes the task as img and returns it as HTML.
    * @returns {any}
    */
    private writeAufgabe():any{
        return html`
        <div id="aufgabenBild">
            <img class="aufgabenText" src=${this.text[0]} />
        </div>`


    }

    /** 
    *Returns task 2 (ablaufPosition==Aublauf.Aufgabe2) as HTML.
    * @returns {any}
    */
    private ladeAufgabe2():any{
        
        return html`
            <div id="flexbox-passworteingabe">
                <p class="passwort-label">Gib hier ein Passwort ein:</p> 
                    
                        <input class="passwort-input" @input=${this._inputChanged}/>
                    
                </label>
                <div id="fehlermeldung-container">
                        
                    <p>${this.fehlerMeldungPasswort}</p>
                        
                </div>
                <div id="passwort-button">
                    <my-button @click=${this._bearbeitePasswortEingabe} .disabled=${!this._submitEnabled}>
                        Passwort überprüfen!
                    </my-button>
                </div>
            </div>
      `;
    }



    render() {      
        if(this.ablaufPosition!=Ablauf.Aufgabe2){
            this.readData();
            if(this.roboter)
                return html` 
                    <div class="main-div">
                        <div class="inhalts-container">
                            ${this.writeText()}
                            ${this.writeRoboter()}
                            ${this.writeButtons()}
                        </div>
                    </div>
                    `
            else
                return html` 
                    <div class="main-div">
                        <div class="aufgaben-container rahmen">
                            ${this.writeAufgabe()}
                            ${this.writeButtons()}
                        </div>
                    </div>
                `
        }else{
            return html`
                <div class="main-div">
                    ${this.ladeAufgabe2()}
                </div>
            `
        }
    }

}

/**
 * Enum to save in which section of the game we are.
 * @enum
 */
enum Ablauf{
    Einfuehrung,
    Aufgabe1,
    Aufgabe2Einführung,
    Aufgabe2,
    Ende
    
}

customElements.define('secure-password', SecurePassword);

// declare global {
//   interface HTMLElementTagNameMap {
//     'secure-password': SecurePassword
//   }
// }