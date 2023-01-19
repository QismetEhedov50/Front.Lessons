var yas = prompt("Please enter your age");
if (yas > 0 && yas < 30) {
    document.write(yas ** 2)
}
else if (yas >= 30 && yas <= 40) {
    document.write(yas)
}
else if (yas > 100 || yas <= 0) {
    document.write("Düzgün məlumat daxil etməmisiniz")
}
else {
    document.write("Yenidən cəhd edin")
}


// var string = prompt("Please enter a string");
// var len = string.length;
// var front = 'It is a Palindrome';
// for (var x = 0; x < len / 2; x++) {
//     if (string[x] != string[len - 1 - x]) {
//         front = 'It is not a Palindrome'
//     }
// }
// document.write(`${string}:${front}`);


// var number = prompt("Please enter a number");
// for (var x = 0; x <= 10; x++) {
//     document.write(`${number} x ${x} = ${number * x} <br>`)
// }