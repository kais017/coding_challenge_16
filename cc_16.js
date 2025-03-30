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
    const container = document.getElementById("product-container");
container.innerHTML = '';

products.slice(0, 5).forEach(product => { //takes first 5 products
    
    const { name, price, image } = product.fields;
    // names, price, and image of product

    const productDiv = document.createElement("div");
    productDiv.className = "product-div";
    // html fo reach product

    productCard.innerHTML = `
    <img src="${image[0].url}" alt="${name}" />
    <div class="product-name">${name}</div>
    <div class="product-price">$${(price / 100).toFixed(2)}</div>
  `;

    container.appendChild(productDiv);

 });
}

// task 5: reusable error handler

function handleError(error) {
    console.error("An error occurred:", error.message);
} // shows an error message on console




