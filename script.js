import data from './products.json' assert{type: 'json'}; // imports json file 

// for each loop - targets each item in the "items" array (data['items'])
data['items'].forEach((element) => {
    console.log(element);
    let name = element["product name"]
    let price = element["product price"]
    let details = element["product description"]
    let picture = element["picture-url"]

    // create a div element
    const productCard = document.createElement("div");

    // adds class to div
    productCard.classList.add("card")
    const html =
        `
            <div class="img-hover"><img src="${picture}" class="images"></div>
            <p class="name">${name}</p>
            <p>${details}</p>
            <p class="price">${price}</p>
            <div class="cart2"><button class="cart">ADD TO CART</button></div>
        `
    productCard.innerHTML = html
    document.getElementById("product-container").appendChild(productCard);

});

