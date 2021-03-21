/**
 * @author Mormotomyia
 * @copyright Mormotomyia 2021
 */


export interface CustomSlotHTMLConfig {
    selector: string;
    slots: Array<string>;
    useShadow?: boolean;
    extender?:string
}

const noop = () => {};

const validateSelector = (selector: string) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};

export const CustomSlotHTMLElement = (config: CustomSlotHTMLConfig) => (cls:any) => {
    validateSelector(config.selector);
    const slots:Array<HTMLSlotElement> = []
    config.slots.forEach(element => {
        const slot = document.createElement('slot');
        slot.name = element;
        slots.push(slot);
    });
    
    
    const connectedCallback = cls.prototype.connectedCallback || noop;
    const disconnectedCallback = cls.prototype.disconnectedCallback || noop;



    cls.prototype.connectedCallback = function () {
        this.slots = slots;
        this.userData = document.createElement('user-data')
        console.log(this)


        this.appendChild(this.userData)
        slots.forEach((slot:HTMLSlotElement) => {
            const clone = document.importNode(slot, true);
            if (config.useShadow) {
                this.attachShadow({mode: 'open'}).appendChild(clone);
            } else {
                this.appendChild(clone);
            }
        });

        


        if (this.componentWillMount) {
            this.componentWillMount();
        }
        connectedCallback.call(this);
        if (this.componentDidMount) {
            this.componentDidMount();
        }
    };

    cls.prototype.disconnectedCallback = function () {
        if (this.componentWillUnmount) {
            this.componentWillUnmount();
        }
        disconnectedCallback.call(this);
        if (this.componentDidUnmount) {
            this.componentDidUnmount();
        }
    };
    if (config.extender) {
        window.customElements.define(config.selector, cls, {
            extends: config.extender,
        });
    } else {
        window.customElements.define(config.selector, cls);
    }
};

