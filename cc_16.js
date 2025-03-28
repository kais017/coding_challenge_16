const BASE_URL =  'https://www.course-api.com/javascript-store-products'

function fetchProductsThen() { //creating a function that fetches product data from the URL
    return fetch(BASE_URL)
    .then(response => {
        if(!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then(products => {
       products.forEach(product => {
        console.log(product.name); //logs each products name to console 
       }); 
    })
    .catch(error => { 
        console.error('Fetch failed', error); //logs an error message to console
        throw error; 
    });
}

fetchProductsThen(); //calling function

// task 3: fetch products with async/await

async function fetchProductsAsync() { //creating another function that uses async/await and try/catch to fetch product data
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error ('Error');
        }

        const products = await response.json();
        displayProducts(products); //calls on helper function to render products
    } catch (error) {
        handleError(error); //passed to this function if theres an error
    }
}

//task 4: display products

