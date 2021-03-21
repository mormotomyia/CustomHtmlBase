

import { CustomSlotHTMLElement } from "../src/slot-base";
import {  } from "../src/all";


@CustomSlotHTMLElement({selector:'slot-element',
slots:['content'],
useShadow:false,

})
export class SlotHTML extends HTMLElement{
    constructor(){
        super();
        
    }

    setSlots(id:string,tag:string, content:string){
        console.log(this.userData)
        const insert = document.createElement(tag)
        insert.innerHTML = content;
        insert.slot = id
        this.userData.appendChild(insert)
        // console.table(this.slots)
    }
}


const body = document.getElementsByTagName('body')[0];
const slotsitem = new SlotHTML()
body.appendChild(slotsitem)

setTimeout(()=> slotsitem.setSlots('content',"h1","haha"),500);
setTimeout(()=> slotsitem.setSlots('content',"h1","haha1"),2000);
