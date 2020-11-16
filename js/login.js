function login() {
    var userName = document.getElementById('uname').value;
    var userPass = document.getElementById('pass').value;
    if(!localStorage.hasOwnProperty(userName)) {
        alert("Uusario o contraseña incorrectos");
    } else if(localStorage.getItem(userName) == userPass) {
        alert("Ha iniciadio sesión, " + userName);
        location.href = 'ventana.html';
    } else {
        alert("La contraseña es erronea.");
    }     
}