const company = "https://api.genuka.com/2021-10/companies/details/2"
const logo = document.getElementById('logo')
const companyName = document.getElementById('name')

fetch(company)
    .then((data) => {

        return data.json();

    }).then((completedata) => {

        console.log(completedata.name);
        companyName.innerHTML=completedata.name
        companyName.style.alignSelf= "center"
        

        console.log(completedata.logo);
        logo.setAttribute('src', completedata.logo)
        logo.style= "width : 10% ; height: 10%"
        

    })
    