import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('speech-component')
export class Speech extends LitElement {

    static styles = css`
        :host{
            position: absolute;
            top: 50%;
        }
    `


    render() {
        return html`
            <svg width="642" height="301" viewBox="0 0 642 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M518.352 301C518.538 301 518.723 300.996 518.91 300.987C521.091 300.894 523.221 300.185 525.118 298.919C527.015 297.654 528.623 295.87 529.806 293.718C538.666 278.187 549.539 264.373 562.032 252.775C569.595 245.685 577.498 239.093 585.14 232.717C604.857 216.274 623.425 200.788 633.732 179.389C656.204 132.729 629.739 67.7384 591.932 38.5923C549.526 5.90327 493.748 0.77573 439.789 0.103761C434.181 0.0342062 428.57 -0.000362368 422.955 2.86387e-06C325.732 0.0437266 228.713 10.4486 133.096 31.0862C101.301 37.9664 68.0192 46.3949 41.2745 66.8494C14.6885 87.1829 -1.47073 119.203 0.105713 148.427C2.40742 191.09 40.9663 222.968 76.0776 231.302C109.544 239.24 144.311 233.876 181.117 228.195C189.243 226.942 197.644 225.645 205.952 224.518C296.245 212.277 465.867 250.007 473.043 251.62L480.162 253.218L507.786 294.913C509.029 296.813 510.629 298.351 512.462 299.407C514.294 300.463 516.31 301.008 518.352 301Z" fill="white"/>
                <text x="20%" y="30%" font-family="Verdana" font-size="35" fill="blue">Lorem  </text>
            </svg>

        `
    }

}

