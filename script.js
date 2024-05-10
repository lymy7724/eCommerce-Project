fetch(`products.json`)
  .then((response) => response.json()) // parse the response as a JSON
  .then((data) => {
    const productContainer = document.getElementById("product-container");

    // for each loop - targets each item in the "items" array (data['items'])
    data.items.forEach((element) => {
      console.log(element);
      let name = element["product name"];
      let price = element["product price"];
      let details = element["product description"];
      let picture = element["picture-url"];

      // create a div element
      const productCard = document.createElement("div");

      // adds class to div
      productCard.classList.add("card");
      const html = `
            <div class="img-hover"><img src="${picture}" class="images"></div>
            <p class="name">${name}</p>
            <p>${details}</p>
            <p class="price">${price}</p>
            <div class="cart2"><button class="cart">ADD TO CART</button></div>
        `;
      productCard.innerHTML = html;
      document.getElementById("product-container").appendChild(productCard);
    });
  });

// form validation
// function validateForm() {
//   let hasErrors = false;
//   let errorMessage = "";
//   let validateEmail = document.forms["myForm"]["email"].value;
//   let validateMessage = document.forms["myForm"]["message"].value;

//   // if there isnt an email, then it sets the errors to true and adds error message
//   if (!validateEmail) {
//     hasErrors = true;
//     var element = document.getElementById("email");
//     element.classList.add("error");
//     errorMessage += "Your email must be filled out. ";
//   }

//   // if there isnt a message, then it sets the errors to true and adds error message
//   if (!validateMessage) {
//     hasErrors = true;
//     var element = document.getElementById("message");
//     element.classList.add("error");
//     errorMessage += "Please leave a message. ";
//   }

//   // if there is an error, it will alert an error message
//   if (hasErrors) {
//     alert(errorMessage);
//     return false;
//   }
//   return true;
// }
