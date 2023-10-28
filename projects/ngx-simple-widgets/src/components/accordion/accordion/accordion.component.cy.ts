import { SwAccordionComponent } from './accordion.component';
import { SwAccordionBodyComponent } from '../accordion-body/accordion-body.component';
import { SwAccordionTitleComponent } from '../accordion-title/accordion-title.component';

describe('Accordion component should', () => {
  const accordionBody = 'Simple Widgets is a simple component library';
  const accordionTitle = 'Introduction';

  function mountComponent() {
    cy.mount(
      `
      <sw-accordion>
        <sw-accordion-title>${accordionTitle}</sw-accordion-title>
        <sw-accordion-body>${accordionBody}</sw-accordion-body>
      </sw-accordion>
    `,
      {
        imports: [
          SwAccordionComponent,
          SwAccordionTitleComponent,
          SwAccordionBodyComponent,
        ],
      },
    );
  }

  it('render title provided inside sw-accordion-title', () => {
    mountComponent();
    cy.get('sw-accordion-title').should('have.text', accordionTitle);
  });

  it('render down arrow button in collapsed state', () => {
    mountComponent();
    cy.get('.sw-accordion-title mat-icon').should(
      'have.text',
      'keyboard_arrow_down',
    );
  });

  it('not render accordion body in collapsed state', () => {
    mountComponent();
    cy.get('sw-accordion-body').should('be.hidden');
  });

  it('render accordion body in expanded state', () => {
    mountComponent();
    cy.get('sw-accordion-title').click();
    cy.get('sw-accordion-body').should('be.visible');
  });

  it('render up arrow button in expanded state', () => {
    mountComponent();
    cy.get('sw-accordion-title').click();
    cy.get('.sw-accordion-title mat-icon').should(
      'have.text',
      'keyboard_arrow_up',
    );
  });

  it('render content provided inside sw-accordion-body', () => {
    mountComponent();
    cy.get('sw-accordion-body').should('have.text', accordionBody);
  });

  it('render accordion title with grayed background in disabled state', () => {});

  it('render accordion body border in grayed color in disabled state', () => {});

  it('toggle the accordion body when clicked on accordion title in disabled state', () => {});
});
