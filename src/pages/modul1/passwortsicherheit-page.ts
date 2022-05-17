import { css, html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { passwortsicherheit } from "../../data/modul1/passwortsicherheit";
import "../../component/button";

@customElement('passwortsicherheit-page')
export class Passwortsicherheit extends LitElement{
    private backgroundcolor:String='';
    private inhalt:String='';
    private alt:String='';
    private buttonText:String='';
    private start:boolean=false;
    private lösung:String='';
    private richtig:boolean= false;
    private erklärung:boolean=false;
    private modi2:boolean=false;
    private passwort:String="";


    @property({type: Number})
    position = 0;
    positionErklaerung=0;
    fehlerMeldungPasswort="";

    @state()
    _submitEnabled = false;

    @query('input')
    _input!: HTMLInputElement;
    
    static styles = css`
  
        :host {
            display: block;
            width: 100%;
            height: 100vh;
            background-color: #68C382;  
            position: relative;    
            overflow: hidden;      
        }   

       /* .multipleChoiceButtonsBox {
            display: flex;
            position: relative;
            margin: 0 auto;
           
        }
       */
         
        .text-joules{
            z-index: 20;
            position: relative;
            display: block;
            width: 100%;
            height: 80%;
            margin: 0 auto;
        }

        .aufgabenstellung{
            z-index: 20;
            position: relative;
            display: block;
            width: 100%;
            height: 80%;
            margin: 0 auto;
        }

        

        .passworteingabefeld{}

        .fehlermeldung{}


        @media only screen and (min-width: 540px) {
            .text-joules ,.aufgabenstellung{
                width: 80%;
            }   
        }

        @media only screen and (min-width: 768px) {
            .text-joules ,.aufgabenstellung{
                width: 570px;
            }   
        }

        @media only screen and (min-width: 1100px) {
            .text-joules ,.aufgabenstellung{
                width: 670px;
                height: 90%;
            }   
        }



        

          
    `
    
    _handleClick(e:Event):void{
        console.log((e.target as HTMLDivElement).textContent)
        /*wenn im spielmodus mit multiple choice lösung überprüfen*/
       spielLogikMultipleChoice: if(!this.modi2&&this.start){
            if((e.target as HTMLDivElement).textContent==="weiterNachErklärung"){
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
            if((e.target as HTMLDivElement).textContent==="Passwort überprüfen!"){
                this._bearbeitePasswortEingabe()
                if(this.richtig)
                console.log("JA");
                    /*rufe neue seite auf*/
                else
                return;

                
            }



        }

        if((e.target as HTMLDivElement).textContent==="Starten"){
            this.position=-1;
            this.start=true;
        }

        
        
        /*wenn aufgabe falsch oder richtig gemacht wurde erklärung durchgehen und Eklärungsposition hochzählen, ansonsten normale position weitermachen*/
        if(this.erklärung){
            console.log("Position Erklärung: "+this.positionErklaerung);
            /*positionerklärung wird woanders hochgezählt*/
        }else{
            this.position++;
            console.log("Position: "+this.position);
            if(this.positionErklaerung>0){
                this.positionErklaerung=0;
                console.log("Position Erklärung auf 0 gesetzt!");
            }
                
        }
       this.requestUpdate();
    }


    _inputChanged(e: Event) {
        this._submitEnabled = !!(e.target as HTMLInputElement).value;
      }


      _bearbeitePasswortEingabe(){
                      /*Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character*/
        let pattern=  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$";

        this.passwort=this._input.value;
        this._input.value = '';
        this._submitEnabled = false;
        console.log(this.richtig);
        if(!this.passwort.match(pattern))
            this.fehlerMeldungPasswort="Das Passwort: "+this.passwort+" ist zu unsicher.";
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
            displayPosition=html`
            <img class="text-joules" position: "absolute" width="2000" height="700" srcset=${this.inhalt}  alt=${this.alt}/>
            <div><button-component  id="starten-button" textButton=${this.buttonText} @click="${this._handleClick}">${this.buttonText}</button-component></div>
            `
        }else{
            displayPosition = html `
            <img class="text-joules" position: "absolute" width="2000" height="700" srcset=${this.inhalt} @click="${this._handleClick}" alt=${this.alt}/>
            `
        }

        
        }else{/*nach start geht es hier weiter*/

            /*ausgabe modi1 aufgabe und lösung*/
            if(!this.modi2){
                if(!this.erklärung){
                    /* ausgabe aufgabenstellung*/
                    console.log("ausgabe aufgabe an Position: "+this.position)
                    this.inhalt=passwortsicherheit.aufgabe1[this.position].frage;
                    this.lösung=passwortsicherheit.aufgabe1[this.position].lösung;
                    this.alt=passwortsicherheit.aufgabe1[this.position].text;

                    displayPosition = html`
                        <img class="text-joules" position: "absolute" width="2000" height="700" srcset=${this.inhalt}  alt=${this.alt}/>
            
                        <div class="multipleChoiceButtonsBox">
                            <button-component textButton='A' @click="${this._handleClick}">A</button-component>
                            <button-component textButton='B' @click="${this._handleClick}">B</button-component>
                            <button-component textButton='C' @click="${this._handleClick}">C</button-component>
                            <button-component textButton='D' @click="${this._handleClick}">D</button-component>
                        </div>
            
                        `
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
                        <img class="aufgabenstellung" srcset=${this.inhalt} />
                        <button-component type="submit" id="weiter" textButton='weiter' @click="${this._handleClick}">weiterNachErklärung</button-component>
                `
                
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
                    console.log("Modi 2 aufgabenstellung wird geladen")
                    displayPosition = html`
                            <label>Gib hier ein Passwort an: 
                                <input id="passwort-input" @input=${this._inputChanged}/>
                            </label>
                            <div id="fehlermeldung-container">${this.fehlerMeldungPasswort}</div>
                            <button-component id="passwort-button" textButton="Passwort überprüfen!" @click=${this._handleClick} .disabled=${!this._submitEnabled}>Passwort überprüfen!</button-component>
                       
                    `

                }else{/*ausgabe Lösung*/
                console.log("Modi 2 lösung wird geladen")
                displayPosition = html`
                    <h1>erklärung und ende kapitel</h1>
                `
                }



            }
           
        }
        return html`
        ${displayPosition}
        `
        }

    
}