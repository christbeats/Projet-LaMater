const collections = "https://api.genuka.com/2021-10/companies/2/collections"


fetch(collections)
.then(function(response){

    return response.json()

}).then((completedata) => {

        let data1 = "";
        completedata.data.map((values) => {
            
            data1 += `<a href="index.html">
            <div class="option">
                <input type="radio" class="radio" id="shonen" name="category">
                <label for="shonen">${values.name}</label>
            </div>
        </a>` 
        });
        document.querySelectorAll('.options-container')[0].innerHTML = data1;

        console.log(completedata)

    })


