//task 2: Fetch Products with .then()
const BASE_URL =  'https://www.course-api.com/javascript-store-products'

function fetchProductsThen() { //creating a function that fetches product data from the URL

    fetch(BASE_URL)
    .then(response => {
        if(!response.ok) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then(products => {
       products.forEach(product => {
        console.log(product.fields.name); //logs each products name to console 
       }); 
    })
    .catch(error => { 
        console.error('Fetch failed', error); //logs an error message to console
    });
}


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

function displayProducts(products) {
const productContainer = document.querySelector('#product-container');
productContainer.innerHTML = '';

products.slice(0, 5).forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    
    // Create HTML structure for each product
    const productHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <img src="${product.image}" alt="${product.name}" />
    `;
    
    // Set the HTML content for the product
    productElement.innerHTML = productHTML;
    
    // Append the product to the container
    productContainer.appendChild(productElement);
});

}

