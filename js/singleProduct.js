const singleProduct = "https://api.genuka.com/2021-10/companies/2/products"

setTimeout(() => {
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
