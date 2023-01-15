var front = prompt("Please enter a number");
for (var x = 1; x <= front; x++) {
    var div = document.createElement("div");
    div.style.width = "150px";
    div.style.height = "150px";
    div.innerHTML = x;
    document.getElementById("myDIV").appendChild(div);
}

var arr = [5, 78, 4, 8, 98, 88, 2, 1, 34, 69];
// console.log(arr.length);
// var enboyukElement = arr[0];
// var enkicikElement = arr[0]
// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     // if(arr[i]%3==0){
//     //     console.log(arr[i])
//     // }
//     if (enboyukElement < arr[i]) {
//         enboyukElement = arr[i]
//     }
//     if (enkicikElement > arr[i]) {
//         enkicikElement = arr[i]
//     }
// }
// console.log(enboyukElement)
// console.log(enkicikElement)

for( var data of arr){
    console.log(data)
}