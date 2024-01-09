let elements = [];
let dollar = document.querySelectorAll('.pagesa');

for (let i = 0; i < dollar.length; i++) {
    let element = dollar[i].textContent;
    elements.push(element);
}

console.log("Elements:", elements);

const euro = elements.map(toEuro);
console.log("Elements:", euro);

function toEuro(cmimi){
      cmimi = cmimi*.91
      return parseFloat(cmimi).toFixed();
}

var toEurosButton = document.getElementById('toEuroButton'); 
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