class Bookingu {
    constructor(name, mbiemri, email, adresa, city, state, bank, numberOfNights) {
        this.name = name;
        this.mbiemri = mbiemri;
        this.email = email;
        this.adresa = adresa;
        this.city = city;
        this.state = state;
        this.bank = bank;
        this.numberOfNights = numberOfNights;
      }
      
      uniqueId() {
        var uniqueid = Math.floor(Math.random() * 1000);
        return uniqueid;
    }
 
      toString() {

        var data = new Date();

     console.log(data.toString());


        return `Name: ${this.name}\nMbiemri: ${this.mbiemri}\nEmail: ${this.email}\nAddress: ${this.adresa}\nCity: ${this.city}\nState: ${this.state}\nBank: ${this.bank}\nNumber of Nights: ${this.numberOfNights.toString()}\nYour booking Id: ${this.uniqueId()}\nTime of Rent: ${data.toString()}`;
      }

}
  let objekti;
  
  function pasKlikimit() {
    var emri = document.getElementById('Emri').value;
    var mbiemri = document.getElementById('Mbiemri').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var adresa = document.getElementById('inputAddress').value;
    var city = document.getElementById('inputCity').value;
    var bank = document.getElementById('bank').value;
    var state = document.getElementById('inputState').value;
    var numberOfnights = document.getElementById('a').value;

    // Debugging: Log input values
  console.log('Emri:', emri);
  console.log('Mbiemri:', mbiemri);
  console.log('Email:', email);
  console.log('Address:', adresa);
  console.log('City:', city);
  console.log('Bank:', bank);
  console.log('State:', state);
  console.log('Number of Nights:', numberOfnights);
  
    objekti = new Bookingu(emri, mbiemri, email, adresa, city, state, bank, numberOfnights);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var buttonBooking = document.getElementById('buttoni');

    buttonBooking.onclick = function () {
        var emri = document.getElementById('Emri').value;
        var mbiemri = document.getElementById('Mbiemri').value;
        var inputAddress = document.getElementById('inputAddress').value;
        var inputCity = document.getElementById('inputCity').value;
        var inputState = document.getElementById('inputState').value;
        var exampleInputEmail1 = document.getElementById('exampleInputEmail1').value;

        if (exampleInputEmail1.trim() === '' || inputState.trim() === '' || inputCity.trim() === '' || inputAddress.trim() === '' || mbiemri.trim() === '' || emri.trim() === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Your existing code for the successful booking
        pasKlikimit();
        var stringu = objekti.toString();
        alert('You have successfully rented! Here are your details:\n ' + stringu);

        setTimeout(function () {
            window.location.reload();
        }, 100);
        console.log("button clicked");
    };
});
