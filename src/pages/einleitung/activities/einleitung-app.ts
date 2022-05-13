import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';
import { einleitung } from '../../../data/einleitung.data';


@customElement('app-einleitung')
export class AppEinleitung extends CtLit {

    private schwachstellen : Boolean;
    private hacker : Boolean;
    
    private roboterArray : Object;
    private schwachstellenArray : Object;
    private hackerArray : Object;

    private positionArray : number;

    constructor(){
        super();
        this.schwachstellen = false;
        this.hacker = false;

        this.roboterArray = einleitung.roboterImages;
        this.positionArray = 0;
    }

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100vh;
            background-color: #68C382;  
            position: relative;    
            overflow: hidden;      
        }

        .circle-icon{
            display: block;
            position: absolute;
            z-index: 10;
        }

        .float-left-top{
            left: -250px;
            top: -250px;
        }

        .float-right-bottom{
            bottom: -250px;
            right: -250px;
        }


    `;

    _displayEinleitung(){
        return html `<img @click="${this._count}" src="${this.roboterArray[this.positionArray].src}"/>`
    }

    _count(){
        console.log(1);
        
        this.positionArray = this.positionArray + 1;

        console.log(this.positionArray);

        this.update();
    }


    render() {
        return html`
            <svg class="float-left-top circle-icon" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
            </svg>

            <svg class="float-right-bottom circle-icon" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
            </svg>

            ${this._displayEinleitung()}

        `;
    }
}