const form = document.querySelector('#form');
const ad = document.querySelector('input[name="Ad"]');
const soyad = document.querySelector('input[name="Soyad"]');
const ata = document.querySelector('input[name="Ata adi"]');
const olke = document.querySelector('input[name="Olke"]');
const seher = document.querySelector('input[name="Seher"]');
const unvan = document.querySelector('input[name="Unvan"]');
const telefon = document.querySelector('input[name="Telefon"]');
const mail = document.querySelector('input[name="Mail"]');
const gender = document.querySelector('input[name="gender"]');
const social = document.querySelector('#social');
const type = document.querySelector('input[name="type"]');
const subjects = document.querySelector('#subjects');
const checkbox = document.querySelector('#gridCheck');

// function isNullOrEmpty(input) {
//     if (input.value == "" || input.value == null || input.value == undefined) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function showErrorMessage(input) {
//     let label = input.previousElementSibling;
//     console.log(label)
//     label.style.color="red"
//     input.nextElementChild.innerHTML = + " Bu sahə daxil edilməlidir";
// }
// function hideErrorMessage(input){
//     input.nextElementChild.innerHTML = " ";
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     if(isNullOrEmpty(ad)){
//         showErrorMessage(ad)
//     }
//     else{
//         hideErrorMessage(ad)
//     }
// })

//inputa error mesaji elave etmek ucun
function showErrorMessage(input) {
    let label = input.previousElementSibling;
    console.log(label)
    label.style.color = "red";
    input.nextElementSibling.innerHTML = label.innerText + " is required";
}
//inputdan error mesajini  silmek ucun
function hideErrorMessage(input) {
    let label = input.previousElementSibling;
    label.style.color = "black";
    input.nextElementSibling.innerHTML = "";
}


//inputun bos olub olmamasi yoxlanilir
function isNullOrEmpty(input) {
    if (input.value == "" || input.value == null || input.value == undefined) {
        showErrorMessage(input)
        return true;
    } else {
        hideErrorMessage(input)
        return false;
    }
}


// function checkEqual(input1, input2) {
//     if (input1.value == input2.value) {
//         hideErrorMessage(input2)
//     } else {
//         let label = input2.previousElementSibling;
//         input2.nextElementSibling.innerHTML = label.innerText + " is not matched";
//     }
// }

// function checkRadio() {
//     var check = false;
//     genders.forEach(element => {
//         if (element.checked) {
//             check = true;
//         }
//     });

//     if (check == true) {
//         document.querySelector(".errorRadio").innerHTML = ""
//     } else {
//         document.querySelector(".errorRadio").innerHTML = "Gender is required"
//     }
// }




// agreeCadition.addEventListener("click",function(){
//     if(agreeCadition.checked){
//         registerBtn.disabled = false;
//     }else{
//         registerBtn.disabled = true;
//     }
// })


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (isNullOrEmpty(ad)) {
        showErrorMessage(ad)
    } else {
        if (!ad.value.includes('@')) {
            ad.nextElementSibling.innerHTML = "not have @";
        } else {
            hideErrorMessage(ad)
        }
    }

    isNullOrEmpty(soyad)
    isNullOrEmpty(nameInput)
    isNullOrEmpty(phone)
    isNullOrEmpty(cityInput)

    checkEqual(email, emailr)
    checkEqual(password, passwordr)


    if (country.value == "choose") {
        showErrorMessage(country)
    } else {
        hideErrorMessage(country)
    }

    checkRadio();


})