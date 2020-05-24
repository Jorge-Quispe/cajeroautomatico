let pass=""

function login(numero) {
        pass += numero;
            
            document.getElementById("pass").value = pass;
        }
        
        
        


function validar() {
     pass =+ document.getElementById('pass').value;
    if ( pass != 70381222 ) {
        document.getElementById('mensaje').style.display="block";
       
    }else{
        document.getElementById('pantalla1').style.display='none';
        document.getElementById('pantalla2').style.display='block';
    }
}
