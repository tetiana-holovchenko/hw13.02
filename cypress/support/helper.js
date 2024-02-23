export function fillAuthorizationFields(username = '', password = ''){
    cy.log('Fill in authorization fields');
    username ? cy.get('#loginFrm_loginname').type(username) : cy.log('username field not filled');
    password ? cy.get('#loginFrm_password').type(password) : cy.log('password field not filled');
    cy.get('[title="Login"]').click();
}


// if(username){
//     cy.get('#loginFrm_loginname').type(username)
// } else {
//     cy.log('username field not filled')
// }



// export function productSearch(productName = '') {
//     if (productName) {
//         cy.get('body').then((body) => {
//             if (body.find(#prdocutname).length > 0) {
                   
//             }
//         cy.get('.a #prdocutname').contains(productName);// find?
//         cy.get('button[name="submit_search"]').click();
//     } else {
//         cy.log('No product name provided');
//     }
// }



// export function productSearch(productName = '') {
//     if (productName) {
//         // Find the element with the title equal to productName inside the body
//         cy.get('body').then((body) => {
//             if (body.find(`[title='${productName}']`).length > 0) {
//                 // If the element is found, verify the text and continue with other actions
//                 cy.get('a.prdocutname').should('have.prop', 'textContent', `${productName}`);
//             } else {
//                 // If the element is not found, perform other actions (e.g., clicking pagination)
//                 cy.get('.pagination').contains('>').click();
//                 // Assuming findItem is another function for further actions
//                 productSearch(productName);
//             }
//         });
//     }
// }

export function findItem(productName) {
    cy.log('Find item');
    cy.get('body').then((body) => {
            if (body.find(`[title="${productName}"]`).length > 0) {
                cy.get(`[title="${productName}"]`).click();
                cy.get('.bgnone').should('have.text', productName);
            } else {
                cy.get('.pagination li a').contains('>').click();
                findItem(productName)
            }
        })
}