/**
 * @author Mormotomyia
 * @copyright Mormotomyia 2021
 */

import { CustomNoTemplateHTMLElement,CustomNoTemplateElementHTMLConfig } from "../src/custom-base-no-template";


@CustomNoTemplateHTMLElement({
    selector: 'no-template-selector',
    useShadow: false
})
export class NoTemplateElement extends HTMLElement {
   constructor(){
       super()
   }
}

const test =  new NoTemplateElement()

document.getElementsByTagName('body')[0].appendChild(test)
