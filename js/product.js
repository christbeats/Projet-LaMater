const products = "https://api.genuka.com/2021-10/companies/2/products"

const product_field = document.querySelectorAll('.grid-item ')

fetch(products)
    .then((data) => {

        return data.json();

    }).then((completedata) => {

        let data1 = "";
       
        completedata.data.map((values) => {
            
            data1 += `<div class="grid-item ">
            
            <div class="box">
            <div class="image">
            <img src=${values.medias.length == 0? 'image/none.jpg' : values.medias[0].link } alt="img">
            </div>
            <div class="content">
            <h3>${values.name}</h3>
            <div class="price">${values.price}</div>
            <a href="cart.html" class="btn">add to cart</a>
            </div>
            </div>
            </div>` 
        });

        document.querySelectorAll('.grille')[0].innerHTML = data1;


    }).catch((err) => {
        console.log(err);
    })
    
    product_field.forEach(item => {
        
             console.log(item)
        
      })