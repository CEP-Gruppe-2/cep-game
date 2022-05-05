import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('circle-component')
export class Circle extends LitElement {

    static styles = css`
        :host{
            width: auto;
            height: auto;
            display: block;
            position: absolute;
            top: -250px;
            left: -250px;
            padding: 0;
            margin: 0;
        }
    `

    @property({type: Boolean})
    circleVisible = false

    @property({type: Number})
    circleHeight = 0

    @property({type: Number})
    circleWidth = 0

    @property({type: Number})
    circleTop = 0

    @property({type: Number})
    circleLeft = 0

    getCircleImage(){
        if(this.circleVisible){
            return html `
                
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" style="top: -250px; left: -250px" xmlns="http://www.w3.org/2000/svg">
                    <circle id="circle-svg" cx="250" cy="250" r="250" fill="#61AF77"/>
                </svg>
            `
        }else{
            return html``
        }
    }

    render() {
        return this.getCircleImage();
    }

}

