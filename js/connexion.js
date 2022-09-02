const register = "https://api.genuka.com/2021-10/clients/register"
var form = document.getElementById('register');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var tel = document.getElementById('tel')
    var pass1 = document.getElementById('pass1')


    // fetch post request

    fetch(register, {
        method: 'POST',
        user:JSON.stringify({
            email: email,
            tel: tel,
            firstname: firstname,
            lastname : lastname,
            password: pass1,
            company_id: 535,
            fromApi: true
              
        }),
        mode: 'no-cors',
        headers:{
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept, Accept-Language, X-Authorization",
            "content-type":"application/json; charset=UTF-8"
        }
        
    })
    .then((response) => {
        console.log(response)
    })




})

