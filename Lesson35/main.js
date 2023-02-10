var arr2 = [
    { name: "test", key: 1 },
    { name: "task", key: 2 },
    { name: "tanqo", key: 3 },
    { name: "like", key: 4 },
    { name: "task", key: 5 },
    { name: "trust", key: 6 },
    { name: "test", key: 7 },
    { name: "last", key: 8 },
    { name: "tanqo", key: 9 },
    { name: "elephant", key: 10 },
    { name: "love", key: 11 },
    { name: "small", key: 12 },
    { name: "little", key: 13 },
];

//1
var newArr = [];
for (var data of arr2) {
    if (data.name[0] == "t") {
        newArr.push(data);
    }
}
console.log(newArr);

//2
var newArray = [];
for (var data of arr2) {
    if (data.name[0] == "t" && data.name[data.name.length-1] == "t") {
        newArray.push(data);
    }
}
console.log(newArray.length);

//3
for (var data of arr2) {
    if (data.name[0] == "t" && data.name[data.name.length-1] == "t") {
        console.log(data.key)
    }
}

//4
// for (var item of arr2) {
//     if (item.name[item.name.length-1] == "e") {
//         item.name="SuperDev";
//     }
// }
// console.log(arr2);

//5

//6

//7
var lengthArr = [];
for (var data of arr2) {
    if (data.name.length == 4) {
        lengthArr.push(data);
    }
}
console.log(lengthArr);

//8


//9
