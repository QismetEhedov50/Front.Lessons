//1
let SET = 'SET_DATA';
let GET = 'GET_DATA';
let DELETE = 'DELETE_DATA';

//1.1
function Emeliyyat(type) {
    switch (type) {
        case "SET":
            console.log('SET_DATA');
            break;
        case "GET":
            console.log('GET_DATA');
            break;
        case "DELETE":
            console.log('DELETE_DATA');
            break;
        default:
            console.log('Bu emeliyyat yanlisdir.');
            break;
    }
}

Emeliyyat("SET");
Emeliyyat("GET");
Emeliyyat("DELETE");


//1.2
// let Newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let data of Newarray) {
//     if (Emeliyyat == "SET") {
//     }
// }
// console.log(Newarray[4]);

//1.3
// let NewArray = [];
// for (let data of NewArray) {
//     if (Emeliyyat == "DELETE") {
//         delete data[0];
//     }
// }
// console.log('SILINECEK DATA TAPILMADI');

//1.4
// let Newgetarray = ['GET_DATA'];
// for (let data of Newgetarray) {
//     if (Emeliyyat == "GET") {
//         data=Newarray
//     }
// }
// console.log('GET_DATA')

//1.5
let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// for (let i = 1; i <= 31; i++) {
//     if (i == 31) {
//         console.log("'January', 'March', 'May', 'July', 'August', 'October', 'December'");
//     }
//     else if (i == 30) {
//         console.log("'April', 'June', 'September', 'November'");
//     }
//     else if (i == 28 || i == 29) {
//         console.log("'February'");
//     }
// }
function Ay(data) {
    switch (data) {
        case 'January':
            console.log('Januar - 31 days');
            break;
        case 'February':
            console.log('February - 28 or 29 days');
            break;
        case 'March':
            console.log('March - 31 days');
            break;
        case 'April':
            console.log('April - 30 days');
            break;
        case 'May':
            console.log('May - 31 days');
            break;
        case 'June':
            console.log('June - 30 days');
            break;
        case 'July':
            console.log('July -31 days');
            break;
        case 'August':
            console.log('August - 31 days');
            break;
        case 'September':
            console.log('September - 30 days');
            break;
        case 'October':
            console.log('October - 31 days');
            break;
        case 'November':
            console.log('November - 30 days');
            break;
        case 'December':
            console.log('December - 31 days');
            break;
        default:
            console.log('Bu emeliyyat yanlisdir.');
            break;
    }
}
Ay('January');
Ay('February');
Ay('March');
Ay('April');
Ay('May');
Ay('June');
Ay('July');
Ay('August');
Ay('September');
Ay('October');
Ay('November');
Ay('December');

//1.6
let date = new Date();
console.log(date)

//2
let fullName = 'Murad Nerimanli'
let result = [];
for (var data of fullName) {
    result.push(data);
}
console.log(result);
//3
let word = "Ey babeK kebaB ye!";
let netice = "";
for (var x = word.length - 1; x >= 0; --x) {
    netice += word[x];
}
console.log(netice);

//4
let Cem = 0;
let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];
for (let i = 0; i <= arr.length; i++) {
    if (i % 7 == 0 && i % 7 == 0) {
        Cem += i
    }
}
console.log(Cem);

//6

//7
let object = {
    key: 1, value: 0,
    key: 2, value: 3,
    key: 3, value: 2,
    key: 4, value: 4,
    key: 5, value: 53,
    key: 7, value: 7,
    key: 8, value: 8,
    key: 9, value: 91
};
