var today = new Date();
var t = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var a=[

];

document.getElementById("register1").onclick = function() {

            document.getElementById("home").style.display = "none";
            document.getElementById("register").style.display = "block";
            document.getElementById("regis_table").style.display = "none";

        }

document.getElementById("table_reg").onclick = function() {

          document.getElementById("home").style.display = "none";
          document.getElementById("register").style.display = "none";
          document.getElementById("regis_table").style.display = "block";
          if(a.length == 0)
               {
                   document.getElementById("demo1").innerHTML="<h3><div class='container text-center'>No Registration Yet!!. Be the first one to register.</div></h3>";
               }
               else{
                   var text;
                   text= "<table class='table table-striped table-bordered table-hover'><thead class='thead-dark'>";
                   text=text + "<tr><th>#</th><th>Name</th><th>Email</th><th>Phone Number</th><th>Address</th><th>Gender</th><th>Event</th><th>Time</th></tr></thead><tbody>";
                   for(i=0;i<a.length;i++)
                   {
                       text= text + "<tr><td>" + (i+1) + "</td><td>" + a[i].name + "</td><td>" + a[i].email + "</td><td>" + a[i].tel + "</td><td>" + a[i].address + "</td><td>" + a[i].gender + "</td><td>" + a[i].event + "</td><td>" + a[i].time + "</td></tr>";
                   }
                   text += "</tbody></table>";
                   document.getElementById("demo1").innerHTML=text;
               }

        }

        document.getElementById("home1").onclick = function() {

          document.getElementById("home").style.display = "block";
          document.getElementById("register").style.display = "none";
          document.getElementById("regis_table").style.display = "none";

        }



//form validation

function validateform(){
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var regemail= /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,5})+$/;
  var regphone = /^(\+91-|\+91|0)?[6-9]\d{9}$/;
  var name1 = document.myform.name.value;
  var email1 = document.myform.email.value;
  var tel1 = document.myform.tel.value;
  var addr = document.myform.address.value;
  var gen = document.myform.gender.value;
  var evnt = document.getElementById('inputState').value;
  var inputState = document.getElementById('inputState');

  const rbs = document.querySelectorAll('input[name="gender"]');
  let selectedValue;
  for (const rb of rbs) {
      if (rb.checked) {
          selectedValue = rb.value;
          break;
      }
  }
  if(addr =="")
{
alert("Please Enter Your Address");
document.myform.address.focus();
return false;
}

    if(!regName.test(name1)){
        alert("Please enter your full name (first & last name).Don't use numbers");
        document.getElementById('name').focus();
        return false;
    }

    else if(!regemail.test(email1)){
      alert("Invalid Email Id");
      document.getElementById('email').focus();
      return false;
    }
    else if(!regphone.test(tel1)){
      alert("Invalid Phone Number. Must start with (+91-) or (+91) or (0) ");
      document.getElementById('tel').focus();
      return false;
    }
    else if(inputState.value == "Choose..."){
      alert("Please select an Event!!");
      return false;
    }
    if(selectedValue == null){
      alert("Please Select Your Gender!!");
      return false;
    }
    var to = new Date();
               var h = to.getHours() + ":" + to.getMinutes() + ":" + to.getSeconds();
               var k={name: name1, email: email1 , tel: tel1, address: addr , gender: gen, event: evnt, time: h}
               a.push(k);
               alert("Thankxx for registering with us!! Hope you Enjoyy the Event :) !!!");
               document.getElementById("regis_form").reset();
}


//for register buttons
function formfunc(){
  document.getElementById("home").style.display = "none";
  document.getElementById("register").style.display = "block";
  document.getElementById("regis_table").style.display = "none";

}
