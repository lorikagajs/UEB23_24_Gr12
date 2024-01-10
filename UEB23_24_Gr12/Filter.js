
var FilterButton = document.getElementById('Filter'); 


const under100= elements.filter(function(element,index,elements){
    return element<100;
  });

  console.log("Elements:", under100);
  

  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let isFiltered = false;

    document.getElementById('Filter').addEventListener('click', function() {
      

      cards.forEach((card, index) => {
        const price = elements[index];
        card.style.display = isFiltered ? 'block' : under100.includes(price) ? 'block' : 'none';
      });

      isFiltered = !isFiltered;
    });
  });