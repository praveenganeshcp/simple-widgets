import { SwTableModule } from "../../sw-table.module";

describe('table component should', () => {

	function mountComponent(isLoading: boolean = false, renderTemplateForIconCol: boolean = false) {
		
		const activeColumns = `[
			 { fieldName: 'brand_name', label: 'Brand', renderTemplate: false, flex: '0 0 33%' },
			 { fieldName: 'car_name', label: 'Car', renderTemplate: false, flex: '0 0 33%' },
			 { fieldName: 'is_suv', label: 'Is SUV', renderTemplate: ${renderTemplateForIconCol}, flex: '0 0 33%' },
		]`
		
		const rows = `[
			{ brand_name: 'Toyota', car_name: 'Innova', is_suv: false },
			{ brand_name: 'Renault', car_name: 'Kiger', is_suv: true },
			{ brand_name: 'Tata', car_name: 'Tiago', is_suv: false }
		]`
		
		cy.mount(`
			<ng-template #tem let-value="value"><h1>{{ value }}</h1></ng-template>
			<sw-table 
				[activeColumns]="${activeColumns}" 
				[isLoading]="${isLoading}" 
				[customCellTemplate]="tem"
				[rows]="${rows}">
			</sw-table>
		`, {
			imports: [SwTableModule]
		});
	}

	it('render given columns', () => {
		mountComponent();
		cy.get('table > thead > tr > td').should('have.length', 3);
		cy.get('table > thead > tr > td:nth-child(1)').should('contain.text', 'Brand');
		cy.get('table > thead > tr > td:nth-child(2)').should('contain.text', 'Car');
		cy.get('table > thead > tr > td:nth-child(3)').should('contain.text', 'Is SUV');	
	})	
	
	it('render given rows', () => {
	    mountComponent();
	    cy.get('table > tbody > tr').should('have.length', 3);
	    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(1)').should('contain.text', 'Toyota');
	    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain.text', 'Innova');
	    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(3)').should('contain.text', 'false');
	})
	
	it('render loading text in all the cells, when input isLoading param is set to true', () => {
            mountComponent(true);
	    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(1)').should('contain.text', 'Loading ...');
	    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').should('contain.text', 'Loading ...');
	    cy.get('table > tbody > tr:nth-child(1) > td:nth-child(3)').should('contain.text', 'Loading ...');
	});
	
	it('render header rows cells with primary color background', () => {
		mountComponent();
		cy.get('table > thead > tr:nth-child(1) > td:nth-child(1)').should('have.css', 'background-color',  'rgb(105, 48, 195)');
		cy.get('table > thead > tr:nth-child(1) > td:nth-child(2)').should('have.css', 'background-color',  'rgb(105, 48, 195)');
		cy.get('table > thead > tr:nth-child(1) > td:nth-child(3)').should('have.css', 'background-color',  'rgb(105, 48, 195)');
	})
	
	it('render even rows cells with dark color background', () => {
		mountComponent();
		cy.get('table > tbody > tr:nth-child(2) > td:nth-child(1)').should('have.css', 'background-color',  'rgb(214, 218, 219)');
		cy.get('table > tbody > tr:nth-child(2) > td:nth-child(2)').should('have.css', 'background-color',  'rgb(214, 218, 219)');
		cy.get('table > tbody > tr:nth-child(2) > td:nth-child(3)').should('have.css', 'background-color',  'rgb(214, 218, 219)');
	})
	
	it('render odd rows cells with white color background', () => {
		mountComponent();
		cy.get('table > tbody > tr:nth-child(1) > td:nth-child(1)').should('have.css', 'background-color',  'rgb(255, 255, 255)');
		cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2)').should('have.css', 'background-color',  'rgb(255, 255, 255)');
		cy.get('table > tbody > tr:nth-child(1) > td:nth-child(3)').should('have.css', 'background-color',  'rgb(255, 255, 255)');
	})
	
	it('render top left and right border rounded', () => {
	
	})
	
	it('render bottom left and right border rounded', () => {
	
	})
	
	it('render custom template based on column definition', () => {
	
	})
	
	it('render column based on flex provided', () => {
		
	})
})
