const login = "https://api.genuka.com/2021-10/clients/login"

var form = document.querySelector('#login');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.querySelector('#txtuser')
    var pass1 = document.querySelector('#txtpass')

    const user = {
        
        email: email.value,
        password: pass1.value,
        company_id: 535,
        fromApi: true

    }
    // console.log(user)

    fetch(login, {
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

