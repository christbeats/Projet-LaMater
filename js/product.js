const product = "https://api.genuka.com/2021-10/companies/2/products"

fetch(product)
    .then((products) => {

        return products.json();

    }).then((completeproducts) => {

        let products1 = "";
        completeproducts.map((values) => {
            products1 = 
            '<div class="grid-item">'
            '<div class="box">'
            '<div class="image">'
            '<img src=${values.medias} alt="img">'
            '</div>'
            '<div class="content">'
            '<h3>${values.name}</h3>'
            '<div class="price">${values.price}</div>'
            '<a href="" class="btn">add to cart</a>'
            '</div>'
            '</div>'
            '</div>'
        });
        document.getElementById("grille").innerHTML = products1;

    }).catch((err) => {
        console.log(err)
    })
    