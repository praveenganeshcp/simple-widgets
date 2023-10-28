describe('toast service should', () => {
  function showToast(level: string) {
    cy.mount(
      `
			<sw-toast-host-demo level="${level}"></sw-toast-host-demo>
		`,
      {
        imports: [],
      },
    );
  }

  it('show provided title and message', () => {
    showToast('success');
    cy.get(
      '.cdk-overlay-container .sw-toast #sw-toast-content #sw-toast-title-content',
    ).should('have.text', 'Toast demo');
    cy.get(
      '.cdk-overlay-container .sw-toast #sw-toast-content #sw-toast-message-content',
    ).should('have.text', 'Toast message shown for demo');
  });

  it('show error icon for error message', () => {
    showToast('error');
    cy.get('.cdk-overlay-container .sw-toast #sw-toast-icon mat-icon').should(
      'have.text',
      'error',
    );
  });

  it('show warn icon for warning message', () => {
    showToast('warn');
    cy.get('.cdk-overlay-container .sw-toast #sw-toast-icon mat-icon').should(
      'have.text',
      'warning',
    );
  });

  it('show success icon for error message', () => {
    showToast('success');
    cy.get('.cdk-overlay-container .sw-toast #sw-toast-icon mat-icon').should(
      'have.text',
      'done',
    );
  });

  it('show error message in red background', () => {
    showToast('error');
    cy.get('.cdk-overlay-container .sw-toast').should(
      'have.css',
      'background-color',
      'rgb(255, 0, 0)',
    );
  });

  it('show success message in green background', () => {
    showToast('success');
    cy.get('.cdk-overlay-container .sw-toast').should(
      'have.css',
      'background-color',
      'rgb(0, 128, 0)',
    );
  });

  it('show warn message in orange background', () => {
    showToast('warn');
    cy.get('.cdk-overlay-container .sw-toast').should(
      'have.css',
      'background-color',
      'rgb(255, 165, 0)',
    );
  });
});
