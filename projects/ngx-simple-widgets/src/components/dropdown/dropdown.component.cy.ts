import { SwDropdownInputComponent } from './dropdown.component';

describe('dropdown component should', () => {
  function mountComponent() {
    cy.mount(SwDropdownInputComponent, {
      componentProperties: {
        options: [
          { value: 'option_1', key: 'Option 1' },
          { value: 'option_2', key: 'Option 2' },
          { value: 'option_3', key: 'Option 3' },
          { value: 'option_4', key: 'Option 4' },
        ],
        selectedValues: ['option_2'],
      },
    });
  }

  beforeEach(() => {
    mountComponent();
  });

  it('show down arrow when panel is closed', () => {
    cy.get('.sw-dropdown-input sw-icon mat-icon').should(
      'contains.text',
      'expand_more',
    );
  });

  it('show up arrow when panel is opened', () => {
    cy.get('.sw-dropdown-input').click();
    cy.get('.sw-dropdown-input sw-icon mat-icon').should(
      'contains.text',
      'expand_less',
    );
  });

  it('render dropdown panel when clicked on input', () => {
    cy.get('.sw-dropdown-input').click();
    cy.get('.cdk-overlay-container .cdk-listbox.sw-dropdown-panel').should(
      'be.visible',
    );
  });

  it('render provided options in the panel', () => {
    cy.get('.sw-dropdown-input').click();
    cy.get(
      '.cdk-overlay-container .cdk-listbox.sw-dropdown-panel .cdk-option.sw-dropdown-panel-option',
    ).should('have.length', 4);
    cy.get(
      `.cdk-overlay-container .cdk-listbox.sw-dropdown-panel .cdk-option.sw-dropdown-panel-option:nth-child(1)`,
    ).should('contains.text', 'Option 1');
    cy.get(
      `.cdk-overlay-container .cdk-listbox.sw-dropdown-panel .cdk-option.sw-dropdown-panel-option:nth-child(2)`,
    ).should('contains.text', 'Option 2');
    cy.get(
      `.cdk-overlay-container .cdk-listbox.sw-dropdown-panel .cdk-option.sw-dropdown-panel-option:nth-child(3)`,
    ).should('contains.text', 'Option 3');
    cy.get(
      `.cdk-overlay-container .cdk-listbox.sw-dropdown-panel .cdk-option.sw-dropdown-panel-option:nth-child(4)`,
    ).should('contains.text', 'Option 4');
  });

  it('highlight selected value in panel', () => {
    cy.get('.sw-dropdown-input').click();
    cy.get(
      `.cdk-overlay-container .cdk-listbox.sw-dropdown-panel .cdk-option.sw-dropdown-panel-option:nth-child(2)`,
    ).click();
    cy.get(
      `.cdk-overlay-container .cdk-listbox.sw-dropdown-panel .cdk-option.cdk-option-active.sw-dropdown-panel-option`,
    ).should('contains.text', 'Option 2');
  });

  it('close panel when clicked outside', () => {
    cy.get('.sw-dropdown-input').click();
    cy.get('.cdk-overlay-container .cdk-listbox.sw-dropdown-panel').should(
      'be.visible',
    );
    cy.get('body').click();
    cy.get('.cdk-overlay-container .cdk-listbox.sw-dropdown-panel').should(
      'not.exist',
    );
  });

  it('display selected value in input', () => {
    cy.get('.sw-dropdown-input > div > span').should(
      'contains.text',
      'Option 2',
    );
  });
});
