document.getElementById('GithubDataBtn').addEventListener('click', function(){
var data = document.getElementById('Userid').value
fetchUserData(data)
});


function fetchUserData(username){
    fetch(` https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(json => console.log(json))
}