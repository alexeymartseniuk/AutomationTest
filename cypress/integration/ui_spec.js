describe('Automation test', () => {
    it('Navigate to first URL', function() {
        // Open first URL
        cy.visit('https://applitools.com/helloworld');

        // Click button "Click me"
        cy.get('button').click();

        // Create a screenshot
        cy.eyesOpen({
            appName: 'Automated test',
            testName: 'Compare screens',
        });
        cy.eyesCheckWindow();
        cy.eyesClose();
    });


    it('Navigate to second URL', function() {
        // Open second URL
        cy.visit('https://applitools.com/helloworld?diff1');

        // Click button "Click me"
        cy.get('button').click();

        // Create a screenshot
        cy.eyesOpen({
            appName: 'Automated test',
            testName: 'Compare screens',
        });
        cy.eyesCheckWindow();
        cy.eyesClose();
    });
});
