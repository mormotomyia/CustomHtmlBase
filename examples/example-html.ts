/**
 * @author Mormotomyia
 * @copyright Mormotomyia 2021
 */

import { CustomElementHTMLConfig,CustomHTMLElement } from "../src/custom-base-html";


const width=1080

@CustomHTMLElement({selector:"html-test",
template:`<video class='customvideo'><source></video>`,
style:`video{height:${width*16/9}px; width: ${width}px}`,
useShadow: false})
export class TestCanvas extends HTMLElement{
    constructor(){
        super();
        console.log('asd')
    }

    set template(template:string){
        this.innerHTML = template;
    }

    set src(source:string) {
        this.getElementsByTagName('video')[0].getElementsByTagName('source')[0].setAttribute("src", source);
    }

    load(){
        this.getElementsByTagName('video')[0].load();
    }
    
    play(){
        this.getElementsByTagName('video')[0].muted = true;
        this.getElementsByTagName('video')[0].play();
    }


    connectedCallback() {
        // const elm = document.createElement('h3');
        // elm.textContent = 'Boo!';
        // this.shadowRoot.appendChild(elm);
        // console.log('connected callback');
    }

    disconnectedCallback() {
        console.log('disconnected callback');
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log(this.getAttribute('data-test'))
        
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    componentDidUnmount() {
        console.log('component did unmount');
    }

} 

setTimeout(() => document.getElementsByTagName('body')[0].appendChild(new TestCanvas()),1000)

const getTestCanvas = (): TestCanvas => {

    return <TestCanvas>document.getElementsByTagName('html-test')[0]

}

setTimeout(() => getTestCanvas().src = "video",1050)
setTimeout(() => getTestCanvas().play(),1050)
// setTimeout(() => console.log(document.getElementsByTagName('html-test')[0].getElementsByTagName('video')[0].preload="auto"),1000)
// setTimeout(() => console.log(document.getElementsByTagName('html-test')[0].getElementsByTagName('video')[0].load()),1200)


