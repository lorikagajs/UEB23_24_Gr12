let elements = [];
let para = document.querySelectorAll('.pagesa');
for (let i = 0; i < para.length; i++) {
    let element = para[i].textContent;
    elements.push(element);}

    console.log("Elements:", elements);
    const Zbritja = elements.map(Lirimi);
    console.log("Elements:", Zbritja);


    function Lirimi(cmimi){
        cmimi = cmimi*.8
        return parseFloat(cmimi).toFixed(2);
    }

    var CheckboxZbrit = document.getElementById('Zbritja');

    CheckboxZbrit.addEventListener('change',function(){
        var pagesatElements = document.querySelectorAll('.pagesa');

        pagesatElements.forEach(function(element, index) {
            if (CheckboxZbrit.checked) {
                // Update the content of the element when checked
                element.innerHTML = Zbritja[index];
              } else {
                // Revert the content of the element when unchecked
                element.innerHTML =  elements[index];
              }
    })
    })