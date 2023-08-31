import { SwIconModule } from "../sw-icon/sw-icon.module";

describe('button component should', () => {

	function mountPlainButtonComponent(type: string, size: string) {
		cy.mount(`
			<button size="${size}" ${type}>Click me !</button>
		`, {imports: []})
	}
	
	function mountIconButtonComponent(type: string) {
		cy.mount(`
			<button ${type}>
				<sw-icon name="person"></sw-icon>
			</button>
		`, {imports: [, SwIconModule]})

	}
	
	it('add default padding and border radius', () => {
		mountPlainButtonComponent('sw-primary-button', 'lg');
		cy.get('button').should('have.css', 'padding', '8px').should('have.css', 'border-radius', '4px');
	});

	it('render in small size for sm size', () => {
		mountPlainButtonComponent('sw-primary-button', 'sm');
		cy.get('button').should('have.css', 'font-size', '12px');
	});
	
	it('render in medium size for md size', () => {
		mountPlainButtonComponent('sw-primary-button', 'md');
		cy.get('button').should('have.css', 'font-size', '16px');
	});
	
	it('render in large size for lg size', () => {
		mountPlainButtonComponent('sw-primary-button', 'lg');
		cy.get('button').should('have.css', 'font-size', '20px');
	});
	
	it('use primary background color for sw-primary-button', () => {
		mountPlainButtonComponent('sw-primary-button', 'lg');
		cy.get('button').should('have.css', 'background-color', 'rgb(105, 48, 195)').should('have.css', 'border-width', '0px');
	});
	
	it('show border for sw-bordered-button', () => {
		mountPlainButtonComponent('sw-bordered-button', 'lg');
		cy.get('button').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)').should('have.css', 'border-width', '1px');
	});
	
	it('use red background color for sw-danger-button', () => {
		mountPlainButtonComponent('sw-danger-button', 'lg');
		cy.get('button').should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.css', 'border-width', '0px');
	});
	
	it('render button without background and border for sw-text-button', () => {
		mountPlainButtonComponent('sw-text-button', 'lg');
		cy.get('button').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)').should('have.css', 'border-width', '0px');
	});
	
	it('render icon inside button without border and background for sw-icon-button', () => {
		mountIconButtonComponent('sw-icon-button');
		cy.get('button sw-icon mat-icon')
			.should('have.text', 'person');
		cy.get('button')
			.should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
			.should('have.css', 'border-width', '0px');
	});
	
	it('render icon inside button and show border for sw-bordered-icon-button', () => {
		mountIconButtonComponent('sw-bordered-icon-button');
		cy.get('button sw-icon mat-icon');
		cy.get('button')
			.should('have.text', 'person')
			.should('have.css', 'border-width', '1px');
	});
	
	it('show loader till subscription is completed, if provided', () => {});
	
	it('be disabled when loader is shown', () => {});

})
