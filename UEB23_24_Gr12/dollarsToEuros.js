let elements = [];
let dollar = document.querySelectorAll('.pagesa');

for (let i = 0; i < dollar.length; i++) {
    let element = dollar[i].textContent;
    elements.push(element);
}

console.log("Elements:", elements);


const euro = elements.map(toEuro);
const under100= elements.filter(function(element,index,elements){
  return element<100;
});
console.log("Elements:", euro);
console.log("Elements:", under100);

function toEuro(cmimi){
      cmimi = cmimi*.91
      return parseFloat(cmimi).toFixed();
}

var toEurosButton = document.getElementById('toEuroButton'); 
var FilterButton = document.getElementById('Filter'); 
var FilterB=false;
var isToEuros = false;

toEurosButton.addEventListener('click',function(){
    var pagesatElements = document.querySelectorAll('.pagesa');

        pagesatElements.forEach(function(element, index) {
            if (!isToEuros) {
                // Update the content when clicked
                element.innerHTML = euro[index];
              } else {
                // Revert the content of the element when unchecked
                element.innerHTML =  elements[index];
              }
        })

      // Toggle the state
      isToEuros = !isToEuros;
})

FilterButton.addEventListener('click',function(){
  const shpit= document.querySelector('.card');
  var pagesatElements = document.querySelectorAll('.pagesa');

      pagesatElements.forEach(function(element, index) {
          if (!FilterB) {
              // Update the content when clicked
              element.innerHTML = under100[index];
                if(under100[index]==undefined){
                   
                }
            } else {
              // Revert the content of the element when unchecked
              element.innerHTML =  elements[index];
            }
      })

    // Toggle the state
    FilterB = !FilterB;
})


$(document).ready(function () {
  // Button click event handler
  $('#toEuroButton').on('click', function () {
      // Toggle button text
      var buttonText = $('#toEuroButton').text(); //Get - merr permes ID tekstin aktual te butonit
      if (buttonText.includes('Euro')) {
          $('#toEuroButton').text('Show price in Dollar'); //Set - vendos tekstin e caktuar ne buton permes ID, metoda .text()
      } else {
          $('#toEuroButton').text('Show price in Euro');
      }
  });


  // Initial state, assuming dollar signs are present
  var toEuro = false;

  // Function to toggle between dollar and euro signs
  function toggleCurrency() {
    // Select all elements with class "currency" and update their content
    $('.currency').each(function() {
      var content = $(this).text();
      if (toEuro) {
        // Replace Euro signs back to Dollar signs
        content = content.replace('€', '$');
      } else {
        // Replace Dollar signs with Euro signs
        content = content.replace('$', '€');
      }
      $(this).text(content);
    });

    // Toggle the state for the next click
    toEuro = !toEuro;
  }

  // Attach the click event to the button with id "toEuroButton"
  $('#toEuroButton').on('click', function() {
    toggleCurrency();
  });

  
  $('#toEuroButton').addClass('exchange'); //addClass - shton klase ne elementin me ID te caktuar, manipulim me CSS
  $('#Filter').addClass('exchange'); //addClass - shton klase ne elementin me ID te caktuar, manipulim me CSS
  $('#Reduce').addClass('exchange'); //addClass - shton klase ne elementin me ID te caktuar, manipulim me CSS
});

