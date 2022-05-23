import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';
import { belohnung } from '../../data/belohnung/belohnung.data';

@customElement('app-belohnung')
export class Belohnung extends CtLit {
    private spielername:String="";
    private punkte:number=0;
    private quelle:any="";
    /*public aktuelleSeite:Pages=0;*/
    /*private spielerkennung*/

    static styles = css`
    :host {
        display: block;
    }

    #main-div { 
        display: grid;
        grid-template-columns: 1fr 0fr 1fr;
        grid-template-rows: 1fr 0.5fr 0.5fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
        "info-punkte info-history info-history"
        "img-E-City img-E-City img-E-City"
        "eindrücke eindrücke eindrücke";
    }

    #info-punkte { grid-area: info-punkte; }

    #info-history { grid-area: info-history; }

    #img-E-City { grid-area: img-E-City; }

    #eindrücke { grid-area: eindrücke; }

    #city {
        width: 100%;
        height: auto;
        margin-top: 40px;
        margin-bottom: 40px;
        }
    
    #eintauschen-btn{
        width: 100%;
        height: auto;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    
    #img-energie{
        width: 100%;
        height: auto;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    `;


    /*lädt die spielerdaten*/
    private ladeSpieler():void{
        
    }

    private getECity():String{
        /*if e city licht an gebe helles zurück ansonten dunkles*/
        return belohnung.cityHell;
    }

    /* gibt eindrücke als HTML zurück*/
    private getEindrücke():any{
        /* for eindrücke des spielers
            this.eindrücke=this.eindrücke+ <div> <img src.../> </div>
        */
        let eindrücke=""
            for(var i:number=0;i<belohnung.eindrücke.length;i++){
                this.quelle=belohnung.eindrücke[i];
                eindrücke=eindrücke+ `<div class="eindrücke-img"> <img srcset="res/belohnung/belohnung${i}.jpg" alt="Image"/></div>`
            }
            console.log("hier"+eindrücke)
            return html`${eindrücke}`
    }

    /* gibt Page 1 als HTML zurück*/
    private ladePage():any{
        var batterie=belohnung.batterie;
        console.log(batterie)
            return html`
                <div id="main-div">
                    <div id="info-Energie">
                        <div id="img-energie"><img srcset=${batterie} alt="Batterie"/>
                        </div>
                        <div id=Punkte>
                            <h1>Gesamtanzahl deiner Punkte</h1>
                            <p>${this.punkte} Points / Kwh</p>
                        </div>
                        <div id="eintauschen-btn"> <button-component textButton="Eintauschen">Eintauschen</button-component>
                        </div>
                    </div>
                    <div id="info-history">
                        <h1> Hier steht die history</h1>
                    </div>
                
                <div id="img-E-City">
                    <img id="city" srcset="${this.getECity()}" alt="Bild von E-City"/>
                </div>
                <div id="eindrücke">
                    <h1>Eindrücke aus E-City</h1>
                    <div>
                        <h4>füge hier bilder von e City ein</h4>
                        ${this.getEindrücke()}
                    </div>
                </div>
                `
    }
    
    




    render() {
        let display;
        if(this.spielername=="")
            this.ladeSpieler();

        display=this.ladePage();
            
        
           



        return html`
            ${display}`;
    }
}

/*enum Pages{
PAGEONE,
PAGETWO
}*/