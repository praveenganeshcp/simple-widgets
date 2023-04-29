import { SwTooltipModule } from "../../sw-tooltip.module";

describe('tooltip component should', () => {

	function mountComponent() {
		cy.mount(`
			<div style="margin: 3rem;">
				<sw-tooltip text="hello" position="RIGHT">
					<span id="host">Hello</span>
				</sw-tooltip>
			</div>
		`, {imports: [SwTooltipModule]});
	}
	
	beforeEach(() => {
		mountComponent();
	})
	
	it('render tooltip when hovered on host element', () => {
		cy.get('#host').trigger('mouseenter');
		cy.get('.cdk-overlay-container .sw-tooltip').should('be.visible');
	})
	
	it('hide tooltip when hovered away from host element', () => {
		cy.get('#host').trigger('mouseenter');
		cy.get('.cdk-overlay-container .sw-tooltip').should('be.visible');
		cy.get('#host').trigger('mouseleave');
		cy.get('.cdk-overlay-container .sw-tooltip').should('not.exist');
	})
	
	it('render input text in tooltip when hovered on host element', () => {
		cy.get('#host').trigger('mouseenter');
		cy.get('.cdk-overlay-container .sw-tooltip').should('contains.text', 'hello');
	})
})
