const collections = "https://api.genuka.com/2021-10/companies/2/collections"


async function category() {
    const response = await fetch(collections)
    const data = await response.json()
    console.log(data)

    createCollectionList(data.message)
}

category()

function createCollectionList(collectionList){

    let data2 = "";
    createCollectionList.data.map((collection) => {
            
            data2 =`<div class="options-container">
            <div class="option">
                <input type="radio" class="radio" id="shonen" name="category">
                <label for="shonen"> <a href="index.html">${collection.name}</a> </label>
            </div> 
            
        </div>
        <div class="selected"> Categorie </div> `
        });


    document.querySelectorAll('.select-box')[0].innerHTML = data2;
    }
