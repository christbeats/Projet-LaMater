fetch(company)
    .then((data) => {

        return data.json();

    }).then((completedata) => {

        console.log(completedata.name);
        document.getElementById('name').
        innerHTML=completedata.name

        console.log(completedata.email);
        document.getElementById('email').
        innerHTML=completedata.email

        console.log(completedata.phone);
        document.getElementById('phone').
        innerHTML=completedata.phone

        console.log(completedata.website);
        document.getElementById('website').
        innerHTML=completedata.website

        console.log(completedata.description);
        document.getElementById('description').
        innerHTML=completedata.description

        

    })