const SingleCollection = "https://api.genuka.com/2021-10/companies/2/collections/87"


fetch(SingleCollection)
    .then((data) => {

        return data.json();
        

    }).then((completedata) => {

        let data2 = "";

        completedata.products.data.map((values) => {
        
            data2 += `

            <div class="grid-item">
            
            <div class="box">
            <div class="image">
            <img src=${values.medias.length == 0? 'image/none.jpg' : values.medias[0].link } alt="img">
            </div>
            <div class="content">
            <h3>${values.name}</h3>
            <div class="price">${values.price}FCFA</div>
            <a href="" class="btn">add to cart</a>
            </div>
            </div>
            </div>
 
             </div> `
        });

        document.querySelectorAll('.grille')[0].innerHTML = data2;

    }).catch((err) => {
        console.log(err);
    })






