function signup() {     
    var uname = document.getElementById('uname').value;    
    var pass = document.getElementById('pass').value;    
    localStorage.setItem(uname, pass);
    alert("Usuario registrado");   
    document.getElementById("signup").reset();
     
}