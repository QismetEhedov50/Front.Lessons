function Click(front) {
    console.log(front.parentElement.parentElement.firstElementChild);
    var Img = front.parentElement.parentElement.firstElementChild;
    Img.style.filter = "blur(0px)"
    console.log(front.nextElementSibling);
    var Soz = front.nextElementSibling;
    Soz.classList.remove("d-none");
}
var ul=document.createElement("ul")
function ToDoList() {
    // alert("wefvbbhfbfkb")
    var input = document.getElementById("Text").value
    //    console.log(input);
    var Li = document.createElement("li");
    Li.innerHTML=input;
    Li.style.color="brown"
    ul.appendChild(Li)
    Li.classList.add("list-group-item")
    ul.style.margin="1rem auto"
    ul.style.width="83%"
    ul.classList.add("list-group")
    var input = document.getElementById("Text").value=""
}
document.body.appendChild(ul);