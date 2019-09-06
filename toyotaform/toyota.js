// validation of the toyota application using the arrow function.
// declaring the variable "valid" with the arrow function.
const validData = () => {

    // defining the variable customerID.
    let customerID = document.getElementById('customer');
    // assigning the regular expressions with variable numbers.
    let numbers = /^[0-9]+$/;
    if (customerID.value.match(numbers)) {

    }
    else {
        console.log('customerID must not be missing.');

    }
    // defining the variable name.
    let name = document.getElementById('name');
    // assigning the regular expressions with variable letters.
    let letters = /^[A-Za-z]+$/;
    if (letters.test(name.value) == false) {
        console.log('name must have alphabetic characters only')
    }
    else {

    }


    let Description = document.getElementById('des');
    // assigning the regular expressions with variable letters.
    let desc = /^[A-Za-z]+$/;
    if (desc.test(Description.value) == false) {
        console.log('Description must not be missing')
    }


    let partnumber = document.getElementById('part');
    // assigning the regular expressions with variable numbers.
    let partsyntax = /^[0-9]+$/;
    if (partnumber.value.match(partsyntax)) {

    }
    else {
        console.log('partnumber should be a number.');

    }



    let priceperpart = document.getElementById('price');
    // assigning the regular expressions with variable numbers.
    let pricesyntax = /^[0-9]+$/;
    if (priceperpart.value.match(pricesyntax)) {
        if (priceperpart.value > 0) {

        }
        else {
            console.log('price per part should be greater than zero');
        }

    }
    else {
        console.log('price per part should be a number.');

    }


    let quantity = document.getElementById('quantity');
    // assigning the regular expressions with variable numbers.
    let quantitysyntax = /^[0-9]+$/;
    if (quantity.value.match(quantitysyntax)) {
        if (quantity.value > 0) {

        }
        else {
            console.log('quantity should be greater than zero');
        }

    }
    else {
        console.log('quantity should be a number.');



        // using an 'if' function to validate in grouped form of shipping and it will help us check only one radio button. 
        let shipping = document.getElementsByName('shippingMethod');
        // a for loop, looping through the radio buttons.
        let shippingHandling;
        for (let count = 0; count < shipping.length; count++) {

            if (shipping.item(count).checked) {
                if (shipping.item(count).value == 'Fed Ex Air') {

                    shippingHandling = Number(quantity.value) * Number(12.00);
                    document.getElementById('handling').value=shippingHandling;

                }
                else if (shipping.item(count).value == 'Fed Ex Ground') {
                    console.log('Fed Ex Ground is checked');

                    shippingHandling = Number(quantity.value) * Number();
                    document.getElementById('handling').value=shippingHandling;
                }
                else if (shipping.item(count).value == 'Us Postal Air') {
                    console.log('Us Postal Air is checked');

                    shippingHandling = Number(quantity.value) * Number(12.00);
                    document.getElementById('handling').value=shippingHandling;
                }
                else {
                    shippingHandling = Number(quantity.value) * Number(12.00);
                    document.getElementById('handling').value=shippingHandling;
                }
            }
        }
    }


}
