var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
// ----------------
var signinE = document.getElementById('signinE')
var signinP = document.getElementById('signinP')
var signuparray=[];

if (localStorage.getItem('signuparray') == null) {
    signuparray = []
} else {
    signuparray = JSON.parse(localStorage.getItem('signuparray'))
}
function signUp(){
    if(signupName.value == "" || signupEmail.value == "" || signupPassword.value == ""){
        document.querySelector('#success').classList.remove('text-success')
        document.querySelector('#success').classList.add('text-danger')
        document.getElementById('success').innerHTML = "All inputs is required"

                // console.log("3");
    }else{
        // console.log("4");
        var signUP = {
            name : signupName.value,
            email : signupEmail.value,
            password : signupPassword.value
        }
        if(signuparray.length == 0 ){
        // console.log("8");
            signuparray.push(signUP);
            localStorage.setItem("signuparray",JSON.stringify(signuparray))
            // console.log(signuparray);
            document.querySelector('#success').classList.add('text-success')
            document.querySelector('#success').classList.remove('text-danger')
            document.getElementById('success').innerHTML = "success"
            return true;
        }else{
        // console.log("6");
        for (let i = 0; i < signuparray.length; i++){
            // console.log("9")
        if (signuparray[i].email == signUP.email){
            // console.log("11")
        document.querySelector('#success').classList.remove('text-success')
        document.querySelector('#success').classList.add('text-danger')
        document.getElementById('success').innerHTML = "All inputs is required"
        return false;
       }else{
        // console.log("7");
        var signUP = {
            name : signupName.value,
            email : signupEmail.value,
            password : signupPassword.value
        }
        signuparray.push(signUP);
        localStorage.setItem("signuparray",JSON.stringify(signuparray))
        // console.log(signuparray);
        document.querySelector('#success').classList.add('text-success')
        document.querySelector('#success').classList.remove('text-danger')
        document.getElementById('success').innerHTML = "success"
        return true;
    }
    }}
    // console.log("5");
    // console.log(signuparray);
    }}
function addd(){
    document.querySelector('div.logg').classList.remove('d-none')
    document.querySelector('div.logg').classList.add('d-flex')
    document.querySelector('div.log').classList.remove('d-flex')
    document.querySelector('div.log').classList.add('d-none')
}
function signIn(){
    document.querySelector('div.logg').classList.add('d-none')
    document.querySelector('div.logg').classList.remove('d-flex')
    document.querySelector('div.log').classList.add('d-flex')
    document.querySelector('div.log').classList.remove('d-none')
}
function login(){
    if(signinE.value == "" || signinP.value == ""){
        document.querySelector('#incorrect').classList.remove('text-success')
        document.querySelector('#incorrect').classList.add('text-danger')
        document.getElementById('incorrect').innerHTML = "All inputs is required"
    }else{
        var password = signinP.value
        var email = signinE.value
       for (let index = 0; index < signuparray.length; index++) {
        if (signuparray[index].email == email && signuparray[index].password == password ){
            document.querySelector('div.loggg').classList.remove('d-none')
            document.querySelector('div.loggg').classList.add('d-flex')
            document.querySelector('div.log').classList.remove('d-flex')
            document.querySelector('div.log').classList.add('d-none')
            document.querySelector('nav.navl').classList.remove('d-none')
            document.getElementById('wel').innerHTML = "welcome "+ signuparray[index].name
    }else{
            document.getElementById('incorrect').innerHTML = 'All inputs is required'
    }  
    }}
}
function logout() {
    document.querySelector('div.loggg').classList.remove('d-flex')
    document.querySelector('div.loggg').classList.add('d-none')
    document.querySelector('div.log').classList.remove('d-none')
    document.querySelector('div.log').classList.add('d-flex')
    document.querySelector('nav.navl').classList.add('d-none')
}
