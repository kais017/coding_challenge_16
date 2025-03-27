const BASE_URL =  'https://www.course-api.com/javascript-store-products'

export function fetchProductsThen() {
    return fetch(BASE_URL)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error`);
        }
        return response.json();
    })
    .then(products => {
       products.forEach(product => {
        console.log(product.name);
       }); 
    })
    .catch(error => { 
        console.error('Fetch failed', error);
        throw error;
    });
}

fetchProductsThen();

