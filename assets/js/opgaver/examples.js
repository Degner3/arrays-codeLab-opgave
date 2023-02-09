let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    /* din map kode her... */

    myExtras.push(myExtrasInput.value);
    
    // console.log(myExtras);

    updateExtras();
    

}


function updateExtras() {
    /* din map kode her... */

    let mytext = '<strong>Du har valgt</strong><br><ul> ' ;
    // console.log('extras array: ' + myExtras);

    /* din map kode her... */
    myExtras.map((items)=> {

        mytext = mytext + '<li>' + items + '</li>';

    });

    mytext = mytext + '</ul>';

    myExtrasListElement.innerHTML = mytext


}






