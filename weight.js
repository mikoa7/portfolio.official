let kgref = document.getElementById('kg');
let poundsref = document.getElementById('pounds');
let ouncesref = document.getElementById('ounces');

let convertKg = () => {
    let kg = kgref.value;
    poundsref.value = (kg * 2.205).toFixed(2);
    ouncesref.value = (kg * 35.274).toFixed(2);
};
kgref.addEventListener('input',convertKg);

let convertP = () => {
    let pounds = poundsref.value;
    kgref.value = (pounds / 2.205).toFixed(2);
    ouncesref.value = (pounds * 16).toFixed(2);
};
poundsref.addEventListener('input',convertP);

let convertOunces = () => {
    let ounces = ouncesref.value;
    kgref.value = (ounces / 35.274).toFixed(2);
    poundsref.value = ( ounces / 16).toFixed(2);
}
ouncesref.addEventListener('input',convertOunces);