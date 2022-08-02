const company = "https://api.genuka.com/2021-10/companies/details/535"

fetch(company)
    .then((data) => {

        return data.json();

    }).then((completedata) => {

        console.table(completedata);
        // document.getElementById('root').
        // innerHTML=completedata.logo

    })
    