function myFun(){
 var name=document.getElementById("name").value;
 var email=document.getElementById("email").value;
 var number=document.getElementById("num").value;
 var text=document.getElementById("txt").value;
  alert("Your name is " + name +"\n Your email is " + email + " \n Your number is " 
    + number + "\n Your message was " + text)
}
function validateform(){  
var name=document.myform.name.value;
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}}