/**
 * @author Mormotomyia
 * @copyright Mormotomyia 2021
 */


export interface CustomNoTemplateElementHTMLConfig {
    selector: string;
    useShadow?: boolean;
    extender?:string
}

const noop = () => {};

const validateSelector = (selector: string) => {
    if (selector.indexOf('-') <= 0) {
        throw new Error('You need at least 1 dash in the custom element name!');
    }
};

export const CustomNoTemplateHTMLElement = (config: CustomNoTemplateElementHTMLConfig) => (cls:any) => {
    validateSelector(config.selector);

    
    const connectedCallback = cls.prototype.connectedCallback || noop;
    const disconnectedCallback = cls.prototype.disconnectedCallback || noop;

    cls.prototype.connectedCallback = function () {
        

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

