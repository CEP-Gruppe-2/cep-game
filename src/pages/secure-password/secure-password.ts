import { html, LitElement, unsafeCSS} from 'lit';
import styles from './secure-password.scss?inline';
import { property, query, state} from 'lit/decorators.js';
import passwortsicherheit from '../../data/firstModule/passwortsicherheit.json';

export class SecurePassword extends LitElement {

    static styles = unsafeCSS(styles);

    private joulesSource:string="";
    private text:string[]=[];
    private buttonText:string="";
    private roboter:boolean=false;
    private ablaufPosition:Ablauf=Ablauf.Einfuehrung;   
    private lösung:string="";
    private überschrift:string=""
    private fehlerMeldungPasswort:string='';
    private eingabe:string="";

    
    @property({type: Number})
    position = 0;

    @property({type: Boolean})
    richtig=false;

    @property({type: Boolean})
    erklärung=false;

    @state()
    _submitEnabled = false;

    @query('input')
    _input!: HTMLInputElement;


    _handleClick(e:Event):void{
        this.position++;


        if((e.target as HTMLDivElement).textContent==='Beenden'){
            console.log("spiel beendet")
            return;
        }
/*später nich zusammenfassen*/
        /*wenn der button text starten hat setze enum eins weiter und position=0*/
        if((e.target as HTMLDivElement).textContent==='Starten'){
            this.position=0;
            this.ablaufPosition++;
            console.log("button erstes else gedrückt")
            /*wenn aufgabe 1 fertig und enum eins weiter und position=0*/
        }else if(this.ablaufPosition==Ablauf.Aufgabe1&&this.position==3){
            this.position=0;
            this.ablaufPosition++;
            console.log("button zweites else gedrückt")
        }else if(this.ablaufPosition==Ablauf.Aufgabe2Einführung&&(e.target as HTMLDivElement).textContent==='Starten'){
            this.position=0;
            this.ablaufPosition++;
            console.log("Startbutton gedrückt")
        }

        
        



    }

    _handleClickAufgabe1(e:Event):void{
        
        if((e.target as HTMLDivElement).textContent===this.lösung){
            this.richtig=true;
            console.log("Klick war richtig")
        }
        else{
            this.richtig=false;
            console.log("Klick war falsch")
        }
        this.erklärung=true;
        this.requestUpdate();
    }

    _handleClickAufgabe2(e:Event):void{
        this._bearbeitePasswortEingabe();
    }

    _bearbeitePasswortEingabe(){
        /*Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character*/
        let pattern=  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-.,]).{8,}$/;
    
        this.eingabe=this._input.value;
        this._input.value = '';
        this._submitEnabled = false;
        if(!this.eingabe.match(pattern))
          this.fehlerMeldungPasswort='Das Passwort: '+this.eingabe+' ist zu unsicher.';
        else
          this.ablaufPosition++;
      }
    
    
  _inputChanged(e: Event) {
    this._submitEnabled = !!(e.target as HTMLInputElement).value;
  }


    private readData():void{
        if(this.ablaufPosition==Ablauf.Einfuehrung){
            this.joulesSource=passwortsicherheit.roboterSource;
            this.text[0]=passwortsicherheit.einfuehrung[this.position].text;
            this.buttonText=passwortsicherheit.einfuehrung[this.position].buttonText;
            this.roboter=passwortsicherheit.einfuehrung[this.position].roboter;
        }
        else if(this.ablaufPosition==Ablauf.Aufgabe1){
            console.log("Aufgabe1")
            if(!this.erklärung){
                this.text[0]=passwortsicherheit.aufgabe1[this.position].frage;
                this.lösung=passwortsicherheit.aufgabe1[this.position].lösung;
                this.roboter=passwortsicherheit.aufgabe1[this.position].roboter;
                /*this.antworten[0]=passwortsicherheit.aufgabe1[this.position].antwort1;
                this.antworten[1]=passwortsicherheit.aufgabe1[this.position].antwort2;
                this.antworten[2]=passwortsicherheit.aufgabe1[this.position].antwort3;
                this.antworten[3]=passwortsicherheit.aufgabe1[this.position].antwort4;
                this.hinweis=passwortsicherheit.aufgabe1[this.position].hinweis;*/
            }else{
                if(this.richtig){
                    console.log("lade erklärung richtig")
                    this.text[0]=passwortsicherheit.aufgabe1[this.position].richtig[0].überschrift;
                    this.text[1]=passwortsicherheit.aufgabe1[this.position].richtig[0].text1;
                    this.text[2]=passwortsicherheit.aufgabe1[this.position].richtig[0].text2;
                    this.text[3]=passwortsicherheit.aufgabe1[this.position].richtig[0].text3;
                    this.buttonText=passwortsicherheit.aufgabe1[this.position].richtig[0].buttonText;
                    this.roboter=passwortsicherheit.aufgabe1[this.position].richtig[0].roboter;
                }else{
                    console.log("lade erklärung falsch")
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
            console.log("lade aufgabe 2 daten")
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


    /*schreibt den text in die Sprechblase*/
    private writeText():any{
        var text:any="";

        if(this.ablaufPosition==Ablauf.Einfuehrung){
            console.log("schreibe in sprechblase einführung")
            text=html`
                <div class="bubble1">
                    <p>${this.text[0]}</p>
                </div>
                `
                
        }
        else if(this.ablaufPosition==Ablauf.Aufgabe1){
            console.log("schreibe in sprechblase erklärung")
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
                   <p>${this.text[0]} "Punkte" ${this.text[1]}</p>
            </div>`
        }else{
            console.log("schreibe in sprechblase aufgabe2 pos: "+this.position)
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


    /*schreibt das img des roboters*/
    private writeRoboter():any{
        /*var text:any="";

        if(this.ablaufPosition==Ablauf.Einfuehrung||this.ablaufPosition==Ablauf.Aufgabe1&&this.erklärung){
            if(this.roboter){
                text=html`
                <div class="joules rahmen">
                    <img src=${this.joulesSource}/>
                </div>`
            }else
            return;

                
        }
        else if(this.ablaufPosition==Ablauf.Aufgabe1){
            aufgabe1 
                
        }else{
            aufgabe2 
                
        }
*/
        return html`
        <div class="joules">
            <img class="joules-img" src=${this.joulesSource}/>
        </div>`
    }


    /*schreibt die Buttons*/
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

    
    /*schreibt die aufgabe in dafürvorgesehene feld*/
    private writeAufgabe():any{
        var text:any="";

        if(this.ablaufPosition==Ablauf.Aufgabe1||this.ablaufPosition==Ablauf.Einfuehrung){
            text=html`
                <div id="aufgabenBild">
                    <img src=${this.text[0]}/>
                </div>`
        }
        
            

        return html`
        <div id="aufgabenBild">
            <img src=${this.text[0]}/>
        </div>`


    }

    private ladeAufgabe2():any{
        
        return html`
            <div id="flexbox-passworteingabe">
                <label class="passwort-label">Gib hier ein Passwort ein: 
                    <div class="passwort-eingabe">
                        <input class="passwort-input" @input=${this._inputChanged}/>
                    </div>
                </label>
                <div id="fehlermeldung-container">
                        
                    <p>${this.fehlerMeldungPasswort}</p>
                        
                </div>
                <div id="passwort-button">
                    <my-button @click=${this._handleClickAufgabe2} .disabled=${!this._submitEnabled}>
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
            console.log("eingabefeld aufgabe 2 wird geladen")
            return html`
                <div class="main-div">
                    ${this.ladeAufgabe2()}
                </div>
            `
        }
    }

}
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