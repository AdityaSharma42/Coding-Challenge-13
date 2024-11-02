const productContainer= document.getElementById('product-container');
const errorMessage= document.getElementById('error-message');

fetch ('https://www.course-api.com/javascript-store-products')
.then (response =>{
    if (!response.ok){
        throw new Error('Error');
    }
    return response.json();
})
.then (products=> {
    products.forEach(product=>{
        const listItem= document.createElement('li');
        const productDetails= document.createElement('div');

        const productImage= document.createElement('img');
        productImage.src= product.fields.image[0].url;
        productImage.alt=product.fields.name;

        const productInfo=document.createElement('p');

        productInfo.textContent=`${product.fields.name}- $${product.fields.price}`;
       
        const companyName= document.createElement('p');
        companyName.textContent= `Company: ${product.fields.company}`;
       
        productDetails.appendChild(productImage);
        productDetails.appendChild(productInfo);
        productDetails.appendChild(companyName);
        listItem.appendChild(productDetails);
        productContainer.appendChild(listItem);
    });
})
       
.catch (error=>{
    console.error ('There was a problem with the fetch operation:', error);
    errorMessage.textContent='Can not load products right now. Please try again later.';
});

