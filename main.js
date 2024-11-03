const productContainer= document.getElementById('product-container');
const errorMessage= document.getElementById('error-message');

fetch ('https://www.course-api.com/javascript-store-products') //fetching product data from the api
.then (response =>{ //checking if the API responds properly
    if (!response.ok){
        throw new Error('Error');//the error is thrown to be caught if not
    }
    return response.json();
})
.then (products=> {
    products.forEach(product=>{
        const listItem= document.createElement('li'); 
        const productDetails= document.createElement('div');
        productDetails.className= 'product-details';

        const productImage= document.createElement('img'); //creating an image element
        productImage.src= product.fields.image[0].url; //the source is the url
        productImage.alt=product.fields.name; //alt text

        const productInfo=document.createElement('p');
        productInfo.textContent=`Product: ${product.fields.name}- $${product.fields.price}`;
       
        const companyName= document.createElement('p');
        companyName.textContent= `Company: ${product.fields.company}`;//making the text include the name of the company
       
        productDetails.appendChild(productImage);
        productDetails.appendChild(productInfo);
        productDetails.appendChild(companyName);

        listItem.appendChild(productDetails);
        productContainer.appendChild(listItem);
    });
})
       
.catch (error=>{
    console.error ('There was a problem with the fetch operation:', error); //if there is an error, it will be logged 
    errorMessage.textContent='Can not load products right now. Please try again later.'; //error message
});

