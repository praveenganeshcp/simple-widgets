import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SwSwitchModule } from "../../sw-switch.module";
import { SwSwitchComponent } from "./sw-switch.component";

describe('Switch component', () => {

    function mountComponent(isOn: boolean = false) {
        cy.mount(SwSwitchComponent, {
            componentProperties: {
                state: isOn
            },
            imports: [
                BrowserAnimationsModule,
                SwSwitchModule
            ]
        })
    }

    it('should mount', () => {
        mountComponent();
    })

    it('should move to on state when clicked in off state', () => {
        mountComponent();
        cy.get('.sw-switch-thumb').click();
        cy.get('.sw-switch-thumb').should('have.attr', 'style').should('contains', 'transform: translate(20px, 0px)')
    })
    
    it('should move to off state when clicked in on state', () => {
        mountComponent(true);
        cy.get('.sw-switch-thumb').click();
        cy.get('.sw-switch-thumb').should('have.attr', 'style').should('contains', 'transform: translate(0px, 0px)')
    })
    
})