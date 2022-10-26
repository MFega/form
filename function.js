var text = document.getElementById("demo");
var text2 = document.getElementById("demo-2");
var text3 = document.getElementById("demo-3");
var text4 = document.getElementById("demo-4");

var myForm =document.forms.myForm
 

myForm.onsubmit = function validateForm(){
  let messages = []
    if(myForm.fname.value == ""){
         text.innerHTML = "First Name cannot be empty";
         return false
    }
     if(myForm.lname.value == ""){
        text2.innerHTML = "Last Name cannot be empty";
        return false
    }
     if(myForm.email.value == ""){
        text3.innerHTML = "Looks like this is not an email";
        return false
    }
     if(myForm.password.value){
        text4.innerHTML = "Password cannot be empty";
        return false
    }
    else{
        text.innerHTML = "";
        text2.innerHTML = "";
        text3.innerHTML = "";
        text4.innerHTML = "";
        return true
    }

}

 