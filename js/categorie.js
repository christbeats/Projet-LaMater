const collections = "https://api.genuka.com/2021-10/companies/2/collections"


// fetch(collections)
// .then(function(response){

//     return response.json()

// }).then((completedata) => {

//         let data1 = "";
//         completedata.data.map((values) => {
            
//             data1 += `<a href="index.html">
//             <div class="option">
//                 <input type="radio" class="radio" id="shonen" name="category">
//                 <label for="shonen">${values.name}</label>
//             </div>
//         </a>` 
//         });
//         document.querySelectorAll('.options-container')[0].innerHTML = data1;

//         console.log(completedata)

//     })

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
        
           <div class="option" >
                <input type="radio" class="radio" id="${values.name}" name="category"  >
                <label for="${values.name}" onchange="loadCategory(this.value)">${values.name}</label>
            </div>
        
       ` 
 });
document.querySelectorAll('.options-container')[0].innerHTML = data1;


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


