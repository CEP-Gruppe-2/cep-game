import { html, LitElement, unsafeCSS} from 'lit';
import styles from './secure-password.scss?inline';
import { property, query, state} from 'lit/decorators.js';
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



    /*wird von den buttons mit dem Text "Weiter", "starten" und "beenden" aufgerufen, hier wird übebprüft welcher button geklickt wurde und entweder die Position erhöht, das spiel beendet, oder Position auf 0 gesetzt und das Spielablauf Enum angepasst */
    _handleClick(e:Event):void{
        this.position++;


        if((e.target as HTMLDivElement).textContent==='Beenden'){
           addPointsToLocalStorage("Passwortsicherheit", this.punkte+"");
            this.punkte+=Number(localStorage.getItem('points'));
            localStorage.setItem('points', this.punkte+"");
            redirectTo("chapter/1", "")
        }
        /*wenn der button text starten hat setze enum eins weiter und position=0*/
        if((e.target as HTMLDivElement).textContent==='Starten'||this.ablaufPosition==Ablauf.Aufgabe1&&this.position==3||this.ablaufPosition==Ablauf.Aufgabe2Einführung&&(e.target as HTMLDivElement).textContent==='Starten'){
            this.position=0;
            this.ablaufPosition++;
            /*wenn aufgabe 1 fertig und enum eins weiter und position=0*/
        }
    }

    /*Wird von den Multiplechoice buttons aufgerufen und wertet aus ob der angeklickte button richtig ist */
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

    /*Wird vom button im letzten Spielmodi aufgerufen */
    _handleClickAufgabe2():void{
        this._bearbeitePasswortEingabe();
    }

    /*übeprüft ob das angegebene Passwort den vorgaben des REGEX entsprechen */
    private _bearbeitePasswortEingabe():void{
        /*Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character*/
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
    
    
      /*hier wird das eingegebene Passwort erstmal gespeichert */
    _inputChanged(e: Event) {
    this._submitEnabled = !!(e.target as HTMLInputElement).value;
    }

    /*liest die benötigten Daten aus der JSON datei */
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


    /*schreibt den text in die Sprechblase und gibt diese als HTML zurück*/
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


    /*schreibt das img des roboters und gibt dieses als HTML zurück*/
    private writeRoboter():any{
        return html`
        <div class="joules">
            <img class="joules-img" src=${this.joulesSource} />
        </div>`
    }


    /*schreibt die Buttons und gibt diese als HTML zurück*/
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

    
    /*schreibt die aufgabe in dafür vorgesehene feld und git diese als HTML zurück*/
    private writeAufgabe():any{
        return html`
        <div id="aufgabenBild">
            <img class="aufgabenText" src=${this.text[0]} />
        </div>`


    }

    /*gibt die aufgabe 2 als HTML zurück*/
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
