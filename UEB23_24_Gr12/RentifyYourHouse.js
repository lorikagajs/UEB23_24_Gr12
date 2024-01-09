var canva = document.getElementById("katrori");
  var ctx = canva.getContext("2d");


  ctx.lineWidth = 2;
  ctx.strokeStyle =  "#002B5B"; // Blue color
  


  // Draw the first horizontal line
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(350, 50);
  ctx.stroke();

  // Draw the second horizontal line parallel to the first one
  ctx.beginPath();
  ctx.moveTo(50, 100);
  ctx.lineTo(350, 100);
  ctx.stroke();


  var Lease_Agreement = document.getElementById('Lease_Agreement');
  var RLease_Agreement = document.getElementById('RLease_Agreement');
  var Repairs_and_maintenance = document.getElementById('Repairs_and_maintenance');
  var Insurancet = document.getElementById('Insurancet');
  var Legal_Responsibilities = document.getElementById('Legale'); 

  var Iagreetoall = document.getElementById('Iagreetoall');

  var buttonRentify = document.getElementById('buttonRentify');

  function handleCheckboxChange() {
    if (Lease_Agreement.checked && RLease_Agreement.checked &&
        Repairs_and_maintenance.checked && Insurancet.checked && Legal_Responsibilities.checked) {
      console.log("All checkboxes are checked");
      Iagreetoall.disabled = false; 
      buttonRentify.disabled = false;
      Iagreetoall.checked=true;
      window.location.href = "#ridirektim";
    } else {
      console.log("Not all checkboxes are checked");
      Iagreetoall.disabled = true;
      buttonRentify.disabled = true;
      Iagreetoall.checked=false;
    }
  }

  Lease_Agreement.addEventListener('change', handleCheckboxChange);
  RLease_Agreement.addEventListener('change', handleCheckboxChange);
  Repairs_and_maintenance.addEventListener('change', handleCheckboxChange);
  Insurancet.addEventListener('change', handleCheckboxChange);
  Legal_Responsibilities.addEventListener('change', handleCheckboxChange);

  function handleCheck() {
    if (Iagreetoall.checked){
      buttonRentify.disabled = false;
    }else {
      buttonRentify.disabled = true;
    }
  }
  

  Iagreetoall.addEventListener('change', handleCheck);


  //Objekti

  class Apartmenti{

    constructor(titulli,adresa,city, zip, state, price){
      this.titulli =titulli;
      this.adresa=adresa;
      this.city=city;
      this.zip=zip;
      this.state = state;
      this.price = price;
    }
    toString() {
      
      return `Title: ${this.titulli}\nAddress: ${this.adresa}\nCity: ${this.city}\nZip: ${this.zip}\nState: ${this.state}\nPrice: ${this.price}`;
    }
  }
  let objekti;

  function pasKlikimit(){

  var titulli = document.getElementById('inputTitle').value;
  var adresa = document.getElementById('inputAddress').value;
  var city = document.getElementById('inputCity').value;
  var zip = document.getElementById('inputZip').value;
  var state = document.getElementById('inputState').value;
  var price =document.getElementById('price_').value;

  objekti = new Apartmenti(titulli,adresa,city,zip,state,price);

  }


  var buttonRentify = document.getElementById('buttonRentify');
 
  buttonRentify.onclick = function() {
    pasKlikimit();
    var stringu = objekti.toString();
    alert('You have successfully listed your house!\n ' + stringu);
    //window.location.reload();
    console.log("button clicked");
  };