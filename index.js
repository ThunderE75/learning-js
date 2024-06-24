/*  Hide & Show HTML Elements

.style.display = 'none'/'block' vs .style.visibility = 'hidden'/'visible'
                display = doesn't reserve the space for that element
                visibility = Reserve the space for that element
*/


let button = document.getElementById('button');
let img = document.getElementById('carImg');

button.addEventListener('click', event => {
    if (img.style.visibility === 'hidden') {
        img.style.visibility = 'visible';
        button.textContent = `Hide`;

    } else {
        img.style.visibility = 'hidden';
        button.textContent = `Show`;
    }
});