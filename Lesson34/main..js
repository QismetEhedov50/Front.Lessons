//1
var fullname = "Qismət Əhədov Ədalət";
var Myarr = fullname.split(" ");
console.log(Myarr);

2
var Namestring = Myarr.toString();
console.log(Namestring);
var Namestringcomma = Namestring.replaceAll("," , " ");
console.log(Namestringcomma);

//3
var array = [9, 3, 14, 5, 7, 65, 97, 5, 82, 101, 5, 73, 82, 5, 101, 75, 99, 80];
var eded = 0;
for (var i = 0; i <= array.length; i++) {
    if (array[i] == 5) {
        eded++
    }
}
console.log(eded);

//4

function Includes(array, number){
    for(var item of array){
        if(item==number){
            return true;
        }
    }
}

var Arrnumber = array.sort(function (a, b) { return a - b });
console.log(Arrnumber);
var dublicateArr=[];

for(var i = 0; i <= Arrnumber.length; i++){
    if(Arrnumber[i]==Arrnumber[i+1]){
        if(Includes(dublicateArr,Arrnumber[i])){
            console.log("This item has already been used")
        }
        else{
            dublicateArr.push(Arrnumber[i])
        }
    }
}
console.log(dublicateArr)

//5
var EnboyukElement=array[0];
for(var i = 0; i <= array.length; i++){
    if(EnboyukElement<array[i]){
        EnboyukElement=array[i]
    }
}
console.log(EnboyukElement)
var Arrdublicate = 0;
for (var i = 0; i <= array.length; i++) {
    if (array[i] == 101) {
        Arrdublicate++
    }
}
console.log(Arrdublicate);

//6
var Name="Qismət Əhədov Ədalət";
var NameArr=Name.split(" ");

var letterArr=[];

for (var data of NameArr) {
    letterArr.push(data[0])
}
console.log(letterArr)