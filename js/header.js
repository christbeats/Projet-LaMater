const company = "https://api.genuka.com/2021-10/companies/details/2"

fetch(company)
    .then((data) => {

        return data.json();

    }).then((completedata) => {

        console.log(completedata.name);
        document.getElementById('name').
        innerHTML=completedata.name

        console.log(completedata.logo);
        document.getElementById('log').
        innerHTML=completedata.logo

    })
    