import { SwIconComponent } from "./icon.component";

describe('SwIconComponent', () => {

    function mountComponent(iconName?: string) {
        cy.mount(SwIconComponent, {
            componentProperties: {
                name: iconName
            }
        })
    }

    it("should render home icon if 'home' is passed as icon name", () => {
        mountComponent('home')
        cy.get('mat-icon').should('have.text', 'home')
    })

    it('should not render the icon if name is not specified', () => {
        mountComponent();
        cy.get('mat-icon').should('have.text', '');
    })
});
