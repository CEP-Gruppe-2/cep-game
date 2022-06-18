import { unsafeCSS, html, LitElement } from 'lit';
import styles from './security-incidents.scss?inline';
import {state} from 'lit/decorators.js';
import '../../components/button';
import sicherheitsvorfaelle from '../../data/firstModule/security-incidents.json';
import { addPointsToLocalStorage } from '../../functions/localstorage';
import { redirectTo } from '../../functions/redirect';


export class SecurityIncidents extends LitElement {

  private bild:string="";
  private text:string="";
  private buttons:String[]=[];
  private erklärung1:boolean=false;
  private richtigerButton:number=-1
  private punkte:number=0;

  static styles = unsafeCSS(styles);


  
  @state()
  position = 0;
  @state()
  auswahl = -1;

  
  /** 
    *Is called by the click on the image and counts up the position.
    * @returns {void}
    */
  _handleClickBild():void{
      this.position++;
      this.requestUpdate;
  }



    /** 
    *Is called by the click on the buttons and checked if the game is finished, counts up the position and saves Points.
    * @param e {Event} - the Event which was klicked
    * @returns {void}
    */
    _handleClickButton(e:Event):void{
        if(this.buttons[0]=="beenden"){
            addPointsToLocalStorage("Sicherheitsvorfälle", this.punkte+"");
            this.punkte+=Number(localStorage.getItem('points'));
            localStorage.setItem('points', this.punkte+"");
            redirectTo("chapter/1", "")
            return;
        }

        if(!this.erklärung1){
            this.buttons.length=0;
            this.position++;
         }
        else
        {
            schleife:for(var i:number=0;i < this.buttons.length;i++){
            if(this.buttons[i]==(e.target as HTMLDivElement).textContent){
                this.auswahl=i;
                if(this.auswahl==this.richtigerButton)
                    this.punkte+=50;
                break schleife;
            }

        }     
      }
      
      this.requestUpdate;
    }

    /** 
    *Is loading the Explanation out of the JSON.
    * @returns {void}
    */ 
    private ladeErklärungsDurchlauf():void{
        this.bild=sicherheitsvorfaelle.ablauf[this.position].antworten[this.auswahl].hintergrund;
        this.text="";
    }


    /** 
    *Is loading the path to the image out of the JSON.
    * @returns {void}
    */ 
  private ladeBild():void{
        this.bild=sicherheitsvorfaelle.ablauf[this.position].hintergrund;
        this.text=sicherheitsvorfaelle.ablauf[this.position].text;
        this.richtigerButton=+sicherheitsvorfaelle.ablauf[this.position].richtigerButton;
      

  }

    /** 
    *Is loading button texts from JSON and stores them in the "buttons" array if the content is not empty.
    * @returns {void}
    */ 
  private ladeButtons():void{
      for(let i:number=0;i<4;i++){
          if(sicherheitsvorfaelle.ablauf[this.position].buttons[i].buttonText!="")
          this.buttons[i]=sicherheitsvorfaelle.ablauf[this.position].buttons[i].buttonText;
          else 
          return;
      }
  }

    /** 
    *Is writing an image for the content and returns it as HTML.
    * @returns {any}
    */ 
  private schreibeBild():any{
      if(this.buttons.length==0&&this.text!="Inhalte Folgen...")
      return html`
            <img class="svg" srcset=${this.bild} @click=${this._handleClickBild}/> 
            `
      else if(this.text==""||this.text=="Frage")
      return html`
            <img class="svg" srcset=${this.bild} />
            `
      else 
      return html`
            <h1>${this.text}</h1>
            `
      
  }
    /** 
    *If buttons are needed, create buttons as html, returns empty html or html with 1,2 or 4 buttons.
    * @returns {any}
    */ 
  private schreibeButtons(): any{
      if(this.buttons.length==1){
          return html`<div class="flexbox-buttons">
              <my-button @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
          </div>`
      }
      else if(this.buttons.length==2){
          return html`<div class="flexbox-buttons">
              <my-button @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
              <my-button @click=${this._handleClickButton} >${this.buttons[1]}</my-button>
          </div>`
      }
      else if(this.buttons.length==4){
          return html`<div class="flexbox-buttons">
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[0]}</my-button>
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[1]}</my-button>
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[2]}</my-button>
              <my-button class="vier-button" @click=${this._handleClickButton} >${this.buttons[3]}</my-button>
          </div>`
      }
      else 
          return html``
  }
  


  render() {
      if(!this.erklärung1){
          this.ladeButtons();
          this.ladeBild();
      } else {
          this.ladeErklärungsDurchlauf();
          this.erklärung1=false;
          this.buttons=[];
          this.auswahl=-1;
      }


          if(this.text=="Sicherheitsvorfall: was ist das?"||this.text=="Frage"){
              this.erklärung1=true;
          }
            
          
          let display=this.schreibeBild();
          let buttons=this.schreibeButtons();
          

      return html`
        <div class="main-div">
            ${display}
            ${buttons}
        </div>
      `
  }

}

customElements.define('security-incidents', SecurityIncidents);

// declare global {
//   interface HTMLElementTagNameMap {
//     'security-incidents': SecurityIncidents
//   }
// }
