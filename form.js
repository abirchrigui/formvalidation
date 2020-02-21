function verifier(){
    
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var adr = document.getElementById('adr').value;
    var email = document.getElementById('email').value;
    var passw = document.getElementById('passw').value;
    var commen = document.getElementById('commen').value;
    var abir = /\S+@\S+\.\S+/;
    var houda=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if ((fname=="")||(lname=="")||(adr=="")||(email=="")||(passw=="")||(commen=="")){
    alert('you have to type something befor submiting');}
       
    if(!abir.test(email)){
        alert('invalidemail')
    }
    if(!houda.test(passw)){
        alert('invalidpassword')
    }
    
         
   
}


    
   


