const collections = "https://api.genuka.com/2021-10/companies/2/collections"

async function start(){
    const response = await fetch(collections)
    const completedata = await response.json()
    //console.log(completedata.data)
    createCategories(completedata.data)
}

start()

function createCategories(completedata){

    let data1 = "";
completedata.map((values) => {
            
    data1 += `
        
           <div class="option category_name"  >
                <input type="radio"  id="${values.id}" name="category" value="${values.id}" >
                <label for="${values.name}" onchange="loadCategory(this.value)">${values.name}</label>
            </div>
        
       ` 
 });
document.querySelectorAll('.options-container')[0].innerHTML = data1;

//ajouter les evenement sur les categories
const categoryName = document.querySelectorAll(".category_name")

categoryName.forEach(elt => {
    elt.addEventListener('click',(e) => {
        let id_cat = + elt.querySelector("input").value
        // console.log(elt.querySelector("label").innerText)
        let SingleCollection = `https://api.genuka.com/2021-10/companies/2/collections/${id_cat}`
    fetch(SingleCollection)
    .then((data) => {

        return data.json();
        

    }).then((completedata) => {

        let data2 = "";

        completedata.products.data.map((values) => {
        
            data2 += `

            <div class="grid-item grid-item-details">
            
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

        if(data2 == ''){
            document.querySelector('#category_field').innerHTML= "Categorie  " + elt.querySelector("label").innerHTML
            document.querySelectorAll('.grille')[0].innerHTML = 'AUCUNS PRODUITS DANS CETTE CATEGORIE';
            document.querySelectorAll('.grille')[0].style.fontSize = "5rem"
            document.querySelectorAll('.grille')[0].style.display = "block"
            document.querySelectorAll('.grille')[0].style.margin = "5rem 3rem"
        }else{
            document.querySelectorAll('.grille')[0].style.display = "grid"
            document.querySelectorAll('.grille')[0].innerHTML = data2;
            
           document.querySelector('#category_field').innerHTML= "Categorie  " + elt.querySelector("label").innerHTML
        }

    }).catch((err) => {
        console.log(err);
    })
    })

})

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

}

async function loadCategory(values){
    alert(values)
    // const response = await fetch(`https://api.genuka.com/2021-10/companies/2/collections/87`)
    // const data =await response.json()
    // console.log(data.collection.name);
    // document.getElementById('shoname').
    // innerHTML=data.collection.name
}


