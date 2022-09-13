

const recherche = "https://api.genuka.com/2021-10/companies/2/products/search/?q="

const search = document.querySelector('#search-box')
search.addEventListener('keyup', (evt)=>{
      const champ = evt.target.value + ''

         axios
            .post(
                `https://api.genuka.com/2021-10/companies/2/products/search?q=${champ}`
            ).then(
                (res) => {
                    
                    console.log(res)
                
            let data2 = "";

            res.data.map((values) => {
            
                data2 += `

                <div class="grid-item ">
                <input type= "hidden" value = ${values.id} >
                <div class="box">
                <div class="image">
                <img src=${values.medias.length == 0? 'image/none.jpg' : values.medias[0].link } alt="img">
                </div>
                <div class="content">
                <h3>${values.name}</h3>
                <div class="price">${values.price}FCFA</div>
                <p class="btn">view</p>
                </div>
                </div>
                </div>
    
                </div> `
            });
                    console.log(data2)
            if(data2 == ''){
                document.querySelectorAll('.grille')[0].innerHTML = 'AUCUNS PRODUITS DANS CETTE CATEGORIE';
                document.querySelectorAll('.grille')[0].style.fontSize = "5rem"
                document.querySelectorAll('.grille')[0].style.display = "block"
                document.querySelectorAll('.grille')[0].style.margin = "5rem 3rem"
            }else{
                document.querySelectorAll('.grille')[0].style.display = "grid"
                document.querySelectorAll('.grille')[0].innerHTML = data2;
            }
            setTimeout(() => {
                const singleProduct = "https://api.genuka.com/2021-10/companies/2/products"
                const grids = document.querySelectorAll('.grid-item')
                const product = {}
                grids.forEach(elt => { 
                        console.log(elt)
                    elt.addEventListener('click', (e)=>{
                        e.stopPropagation()
                         let idProduct=   elt.querySelector('input').value
                            console.log(idProduct)
                         fetch(singleProduct + '/'+ idProduct)
                         .then( (res) => 
                         {
                             return res.json()
                         })
                        .then(async res => { 
                                 let data = await res
                                data? localStorage.setItem('productDetails', JSON.stringify(data)) : false
                                location.href  ='cart.html'
                         })
                    })
                })
            }, 3000);

                
                }

                
            ).catch(
                (res) => {console.log(res)}
            )
})