const register = "https://api.genuka.com/2021-10/clients/register"
var form = document.getElementById('register');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var tel = document.getElementById('tel')
    var pass1 = document.getElementById('pass1')

    const user = {
        email: email.value,
        tel: tel.value,
        first_name: firstname.value,
        last_name: lastname.value,
        password: pass1.value,
        company_id: 535,
        fromApi: true

    }
    console.log(user)


    // fetch post request

    fetch(register, {
        method: 'POST',
        body:JSON.stringify(user),
        headers:{
            Accept: 'application/json',
            "content-type":"application/json; charset=UTF-8"
        }

    })
    .then(async (response) => {
        const data = await response.json();
        console.log(data)
        localStorage.setItem("user",JSON.stringify(data))
        location.href = 'accueil.html'
}).catch( r => console.log(r))




})

