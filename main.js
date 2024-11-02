const productContainer= document.getElementById('product-container');
const errorMessage= document.getElementById('error-message');

fetch ('https://www.course-api.com/javascript-store-products')
.then (response =>{
    if (!response.ok){
        throw new Error('Error');
    }
    return response.json();
})
.then (data=>{
    displayProducts(data);
})
       
.catch (error=>{
    errorMessage.textContent='Can not load products right now. Please try again later.';
    console.error ('There was a problem with the fetch operation:', error);
});

