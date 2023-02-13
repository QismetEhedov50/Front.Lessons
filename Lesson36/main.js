var arr = [
    { type: "Bugatti", color: "blue", capacity: 2 },
    { type: "Ferrari", color: "red", capacity: 2 },
    { type: "Lamborghini", color: "black", capacity: 2 },
    { type: "Chevrolet", color: "green", capacity: 4 },
    { type: "Cadillac", color: "gray", capacity: 4 },
    { type: "Vita", color: "red", capacity: 8 },
    { type: "Bentley", color: "white", capacity: 2 },
    { type: "Mazda", color: "orange", capacity: 4 },
    { type: "Kia", color: "red", capacity: 2 },
    { type: "Hyundai", color: "white", capacity: 5 },
    { type: "Toyota", color: "brown", capacity: 4 }
];

//1
var newArr = [];
for (var data of arr) {
    if (data.type[0] == "B") {
        newArr.push(data);
    }
}
console.log(newArr);

//2
var EnuzunType = arr[0].type.length;
for (var data of arr) {
    if (EnuzunType < data.type.length) {
        EnuzunType = data.type.length;
        console.log(data.color, data.capacity);
    }
}

//3
for(var data of arr){
    var Soz = data.type;
    var t= 0;
    for(var data2 of Soz){
        if(data2=="t"){
            ++t;
        }
    }
    if(t==2){
        console.log(data.color, data.capacity)
    }
}

//4
for(var data of arr){
    var Soz = data.type;
    var t= 0;
    for(var data2 of Soz){
        if(data2=="l"){
            ++t;
        }
    }
    if(t==2){
        console.log(data.color, data.capacity)
    }
}

//5
var Uzunarray=[];
for (var item of arr) {
    if(item.type.length==7){
            Uzunarray.push(item)
    }
}
console.log(Uzunarray);

//6
var boyuk= arr[0].capacity;
var ad="";
for(var data of arr){
    if(data.capacity>boyuk){
        boyuk=data.capacity
        ad=data.type
        
    }
}
console.log(boyuk + " " + ad);

//7
var length=arr[0].type.length;
var ad="";
var index=0;
for(var item in arr){
    if(arr[item].type.length>length){
        length=arr[item].type.length;
        ad=arr[item].type;
        index=item;
    }
}
console.log(index**2 + " " + ad);

//8
var Cem=0;
for (var data of arr) {
    if (data.type[data.type.length - 1] == "i") {
        Cem+=data.capacity
        console.log(data.type, data.capacity)
    }
}
console.log(Cem);