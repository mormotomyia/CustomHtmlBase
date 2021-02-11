/**
 * @author Mormotomyia
 * @copyright Mormotomyia 2021
 */

import { CustomElement } from '../src/custom-base';

@CustomElement({
    selector: 'mormo-video',
    template: `<source>`,
    style: `position: inherit; left:0; top:0;opacity:0`,
    useShadow: false,
    extender: 'video',
})
export class CustomMormoVideo extends HTMLVideoElement {
    constructor() {
        super();
        // this.connectedCallback();
        // this is hacking the template into existence before the call to connectedCallback.
        // Usually you want to create the template on adding it to the DOM.
        // I want to abuse HTMLVideoElements which arent connected to the DOM to store additional state.
        //
        this.instanciate();
    }

    instanciate() {
        // throw new Error("Method not implemented.");
    }

    connectedCallback() {
        // const elm = document.createElement('h3');
        // elm.textContent = 'Boo!';
        // this.shadowRoot.appendChild(elm);
        // console.log('connected callback');
    }

    disconnectedCallback() {
        // console.log('disconnected callback');
    }

    componentWillMount() {
        // console.log('component will mount');
        // console.log(new Date().getMilliseconds())
        // console.log(this)
        // this.style.color = 'red'
        // this.setAttribute('style','animation: fadein 0.5s;')
        // this.style.animationName = 'fade in'
        // this.style.animationDuration = "300.3";
    }

    componentDidMount() {
        // console.log('component did mount');
        console.log(new Date().getMilliseconds());
    }

    componentWillUnmount() {
        // console.log('component will unmount');
    }

    componentDidUnmount() {
        // console.log('component did unmount');
    }

    get playing() {
        return !!(
            this.currentTime > 0 &&
            !this.paused &&
            !this.ended &&
            this.readyState > 2
        );
    }

    get playable() {
        return !!(this.readyState > 2);
    }
}
