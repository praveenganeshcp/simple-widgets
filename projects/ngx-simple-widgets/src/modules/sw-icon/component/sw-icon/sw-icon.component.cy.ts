import { SwIconComponent } from "./sw-icon.component";
import { MatIconModule } from "@angular/material/icon";

describe('SwIconComponent', () => {

    function mountComponent(iconName?: string) {
        cy.mount(SwIconComponent, {
            componentProperties: {
                name: iconName
            },
            imports: [
                MatIconModule
            ]
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
